import React from "react";

import { Typography } from "../Atoms/Typography";
import { Header } from "../Components/Header";
import { Button } from "../Atoms/Button";

import "./page.css";

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Sleepy Beauty" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Sleepy Beauty" })}
      />

      <section className="storybook-page">
        <Typography type="title" label="This is a title" />
        <br />
        <Typography
          type="text"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
        />
        <br />
        <Typography
          type="code"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."
        />
        <br />
        <div className="button-container">
          <Button primary={true} size="medium" label="Primary" />
          <Button primary={false} size="medium" label="Secondary" />
        </div>
      </section>
    </article>
  );
};
