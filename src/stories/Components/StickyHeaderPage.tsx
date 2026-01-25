import React from "react";
import { Header, HeaderProps } from "./Header";
import { Typography } from "../Atoms/Typography";
import "./stickyHeaderPage.css";

// Reusing HeaderProps ensures consistency across the app
export interface StickyHeaderPageProps extends Omit<HeaderProps, 'user'> {
  user?: HeaderProps['user'];
}

/**
 * A layout component featuring a sticky navigation bar and scrollable content.
 */
export const StickyHeaderPage: React.FC<StickyHeaderPageProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => {
  return (
    <div>
      <div className="sticky-header">
        <Header
          user={user}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      </div>

      <div className="content">
        <Typography type="title" label="Sticky Header Page" />
        {[...Array(15)].map((_, i) => (
          <Typography
            key={i}
            type="text"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        ))}

        <div className="interaction-section">
          <Typography
            type="subtitle"
            label="Here’s an interaction section 🧩"
          />
          <button className="fake-button">Click me</button>
        </div>

        {[...Array(10)].map((_, i) => (
          <Typography
            key={`after-${i}`}
            type="text"
            label="More Lorem ipsum after the interaction..."
          />
        ))}
      </div>
    </div>
  );
};