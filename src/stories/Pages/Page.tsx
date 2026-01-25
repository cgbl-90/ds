import React from "react";
import { Typography } from "../Atoms/Typography";
import { Header } from "../Components/Header";
import { Button } from "../Atoms/Button";
import "./page.css";

/** User object definition for the header state */
interface User {
  name: string;
}

export const Page: React.FC = () => {
  // Tracks the logged-in user; undefined indicates logged-out state
  const [user, setUser] = React.useState<User | undefined>();

  return (
    <article>
      {/* Header receives the user state and setter functions as callbacks */}
      <Header
        user={user}
        onLogin={() => setUser({ name: "Sleepy Beauty" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Sleepy Beauty" })}
      />

      <section className="storybook-page">
        <Typography type="title" label="This is a title" />
        <br />
        <Typography type="text" label="Lorem ipsum dolor sit amet..." />
        <br />
        <Typography type="code" label="Lorem ipsum dolor sit amet..." />
        <br />
        <div className="button-container">
          <Button primary={true} size="medium" label="Primary" />
          <Button primary={false} size="medium" label="Secondary" />
        </div>
      </section>
    </article>
  );
};