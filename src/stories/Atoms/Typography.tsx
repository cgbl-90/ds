import PropTypes from "prop-types";
import "./typography.css";

export const Typography = ({
  type,
  styleType,
  label,
  as,
  ...props
}: {
  type: "title" | "subtitle" | "text" | "code";
  styleType?: "italic" | "bold" | "underline";
  label: React.ReactNode;
  as?: string;
  [key: string]: any;
}) => {
  const typeToTag = {
    title: "h1",
    subtitle: "h2",
    text: "p",
    code: "pre",
  };

  const Component = (as || typeToTag[type] || "div") as React.ElementType;

  const typeClass = `typography--${type}`;
  const styleClass = styleType ? `typography--${styleType}` : "";

  return (
    <Component className={`typography ${typeClass} ${styleClass}`} {...props}>
      {type === "code" ? <code>{label}</code> : label}
    </Component>
  );
};

Typography.propTypes = {
  type: PropTypes.oneOf(["title", "subtitle", "text", "code"]).isRequired, // Semantic type.
  styleType: PropTypes.oneOf(["italic", "bold", "underline"]), // Styling options.
  label: PropTypes.node.isRequired, // Content to display.
  as: PropTypes.string, // Override the default HTML tag for the component.
};

Typography.defaultProps = {
  styleType: null,
  as: null,
};
