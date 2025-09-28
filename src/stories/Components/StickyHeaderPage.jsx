import { Header } from "./Header";
import { Typography } from "../Atoms/Typography";
import "./stickyHeaderPage.css";

export const StickyHeaderPage = ({
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
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
            label="More Lorem ipsum after the interaction... Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        ))}
      </div>
    </div>
  );
};
