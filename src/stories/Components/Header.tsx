import React from "react";
import { Button } from "../Atoms/Button";
import { Icon } from "../Atoms/Icon";
import "./header.css";

export interface HeaderProps {
  user?: {
    name: string;
  };
  /** Callback for when the login button is clicked */
  onLogin: () => void;
  /** Callback for when the logout button is clicked */
  onLogout: () => void;
  /** Callback for when the sign up button is clicked */
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className="storybook-header">
      <div>
        <Icon size="small" />
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);
