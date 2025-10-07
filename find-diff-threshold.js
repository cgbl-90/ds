const fs = require("fs");
const path = require("path");
const glob = require("glob");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const SEARCH_PATHS = [
  "./.storybook/preview.@(js|ts|jsx|tsx)",
  "./src/**/*.stories.@(js|ts|jsx|tsx)",
];

let findings = [];

console.log("🔍 Searching for `diffThreshold` configurations...");

// Function to search a single file
function searchFileForThreshold(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) return;

  const content = fs.readFileSync(absolutePath, "utf-8");

  try {
    const ast = parser.parse(content, {
      sourceType: "module", // Important for ES modules
      plugins: ["jsx", "typescript"], // Enable plugins for TS/JSX syntax
    });

    traverse(ast, {
      // We are looking for an object property with the key 'diffThreshold'
      ObjectProperty(path) {
        // Check if the property's key is an identifier named 'diffThreshold'
        if (path.node.key.name === "diffThreshold") {
          // Check if the value is a literal (like a number or string)
          if (
            path.node.value.type === "NumericLiteral" ||
            path.node.value.type === "StringLiteral"
          ) {
            findings.push({
              file: filePath,
              value: path.node.value.value,
            });
          }
        }
      },
    });
  } catch (error) {
    // Ignore parsing errors for files that aren't valid JS/TS
    if (!(error instanceof SyntaxError)) {
      console.error(`Could not process ${filePath}:`, error);
    }
  }
}

// Find all files matching the patterns and search them
const files = SEARCH_PATHS.flatMap((pattern) => glob.sync(pattern));
files.forEach(searchFileForThreshold);

// --- Report Results ---
if (findings.length > 0) {
  console.log("\n✅ Found `diffThreshold` in the following files:");
  findings.forEach(({ file, value }) => {
    console.log(`  - ${file}: \x1b[32m${value}\x1b[0m`); // Green text for value
  });
} else {
  console.log(
    "\nℹ️ No explicit `diffThreshold` was found. Chromatic will use its default value."
  );
}
