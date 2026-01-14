import "./avatar.css";

interface AvatarProps {
  /** The image URL (can be a local import or remote link) */
  src: string;
  /** How big should it be? */
  size?: "small" | "medium" | "large";
  /** Screen reader text for accessibility */
  alt?: string;
}

/** * Simple circular avatar component for user profiles.
 */
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
