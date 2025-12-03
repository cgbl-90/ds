import "./badge.css";

interface BadgeProps {
  text: string;
  style: "new" | "success" | "warning";
}

const Badge = ({ text, style }: BadgeProps) => {
  return (
    <span className={`badge badge--${style}`}>
      <span className="badge-text">{text}</span>
    </span>
  );
};

export default Badge;
