import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import Tooltip from "../Atoms/Tooltip";

export const SettingsRow = ({ label, placeholder, tooltip }) => (
  <div>
    <Tooltip text={tooltip}>
      <Label text={label} />
    </Tooltip>
    <Input placeholder={placeholder} />
  </div>
);
