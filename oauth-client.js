const http = require("http");
const https = require("https");
const url = require("url");
const querystring = require("querystring");

const MCP_CONFIG = {
  clientId: "cdf3737dff9d485485968e50b63fd8b4",
  mcpUrl: "https://6660ebc2b5354cce3ebff235-qkewamujhb.chromatic.com/mcp",
};

let accessToken = null;
let server = null;

function fetchUrl(urlString, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new url.URL(urlString);
    const isHttps = urlObj.protocol === "https:";
    const client = isHttps ? https : http;

    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: options.method || "GET",
      headers: options.headers || {},
    };

    const req = client.request(requestOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on("error", reject);

    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

function startAuthServer(redirectUri) {
  return new Promise((resolve, reject) => {
    server = http.createServer(async (req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      const query = parsedUrl.query;

      if (pathname === "/callback") {
        if (query.code) {
          console.log("✓ Authorization code received");

          // Exchange code for access token
          const tokenData = querystring.stringify({
            grant_type: "authorization_code",
            code: query.code,
            client_id: MCP_CONFIG.clientId,
            redirect_uri: redirectUri,
          });

          try {
            const tokenResponse = await fetchUrl(`${MCP_CONFIG.mcpUrl}/token`, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": Buffer.byteLength(tokenData),
              },
              body: tokenData,
            });

            const tokenBody = JSON.parse(tokenResponse.body);
            if (tokenBody.access_token) {
              accessToken = tokenBody.access_token;
              console.log("✓ Access token obtained");
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(
                "<h1>✓ Authentication successful!</h1><p>You can close this window.</p>",
              );
              resolve(accessToken);
            } else {
              throw new Error("No access token in response");
            }
          } catch (err) {
            console.error("Token exchange error:", err.message);
            res.writeHead(500);
            res.end("Token exchange failed");
            reject(err);
          }
        } else if (query.error) {
          res.writeHead(400);
          res.end(`Error: ${query.error}`);
          reject(new Error(query.error));
        }
      }
    });

    server.listen(0, () => {
      const port = server.address().port;
      const redirectUri = `http://localhost:${port}/callback`;
      console.log(
        `OAuth callback server listening on http://localhost:${port}`,
      );
      resolve({ token: null, port, redirectUri });
    });

    server.on("error", reject);
  });
}

async function authenticate() {
  console.log("Starting OAuth authentication...");

  // Start server first to get dynamic port
  const serverPromise = new Promise((resolve) => {
    server = http.createServer(async (req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      const query = parsedUrl.query;

      if (pathname === "/callback") {
        if (query.code) {
          console.log("✓ Authorization code received");
          const port = server.address().port;
          const redirectUri = `http://localhost:${port}/callback`;

          // Exchange code for access token
          const tokenData = querystring.stringify({
            grant_type: "authorization_code",
            code: query.code,
            client_id: MCP_CONFIG.clientId,
            redirect_uri: redirectUri,
          });

          try {
            const tokenResponse = await fetchUrl(`${MCP_CONFIG.mcpUrl}/token`, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": Buffer.byteLength(tokenData),
              },
              body: tokenData,
            });

            const tokenBody = JSON.parse(tokenResponse.body);
            if (tokenBody.access_token) {
              const accessToken = tokenBody.access_token;
              console.log("✓ Access token obtained");
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(
                "<h1>✓ Authentication successful!</h1><p>You can close this window.</p>",
              );
              resolve(accessToken);
            } else {
              throw new Error("No access token in response");
            }
          } catch (err) {
            console.error("Token exchange error:", err.message);
            res.writeHead(500);
            res.end("Token exchange failed");
            resolve(null);
          }
        } else if (query.error) {
          res.writeHead(400);
          res.end(`Error: ${query.error}`);
          resolve(null);
        }
      }
    });

    server.listen(0, () => {
      const port = server.address().port;
      const redirectUri = `http://localhost:${port}/callback`;
      console.log(
        `OAuth callback server listening on http://localhost:${port}`,
      );

      const authUrl =
        `${MCP_CONFIG.mcpUrl}/authorize?` +
        querystring.stringify({
          client_id: MCP_CONFIG.clientId,
          redirect_uri: redirectUri,
          response_type: "code",
          scope: "stories",
        });

      console.log(`\nOpen this URL to authenticate:\n${authUrl}\n`);
    });
  });

  const token = await serverPromise;

  if (server) {
    server.close();
  }

  return token;
}

async function getStories(token) {
  console.log("\nFetching stories from MCP server...");

  const response = await fetchUrl(MCP_CONFIG.mcpUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    try {
      const stories = JSON.parse(response.body);
      return stories;
    } catch {
      return response.body;
    }
  } else {
    throw new Error(`HTTP ${response.status}: ${response.body}`);
  }
}

function getRandomStories(stories, count = 10) {
  const storiesArray = Array.isArray(stories)
    ? stories
    : Object.values(stories || {});
  const shuffled = [...storiesArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

async function main() {
  try {
    const token = await authenticate();
    const allStories = await getStories(token);
    const randomStories = getRandomStories(allStories, 10);

    console.log("\n✓ Connected to Hawkins!\n");
    console.log("✓ 10 Random Stories:\n");
    console.log(JSON.stringify(randomStories, null, 2));
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
