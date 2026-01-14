import "./badge.css";

interface BadgeProps {
  /** The text displayed inside the badge */
  text: string;
  /** Visual style mapping to the status */
  style: "new" | "success" | "warning";
}

/** * Status indicator used to highlight new items or system states.
 */
const Badge = ({ text, style }: BadgeProps) => {
  return (
    <span className={`badge badge--${style}`}>
      <span className="badge-text">{text}</span>
    </span>
  );
};

export default Badge;
