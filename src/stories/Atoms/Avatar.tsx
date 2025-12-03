import "./avatar.css";

interface AvatarProps {
  src: string;
  size?: "small" | "medium" | "large";
  alt?: string;
}

export const Avatar = ({
  src,
  size = "medium",
  alt = "Avatar",
}: AvatarProps) => {
  return (
    <div className="storybook-avatar">
      <img
        src={src}
        alt={alt}
        data-testid="avatar"
        className={`storybook-avatar-img storybook-avatar--${size}`}
      />
    </div>
  );
};
