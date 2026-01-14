import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { Checkbox } from "../Atoms/Checkbox";
import { Radio } from "../Atoms/Radio";
import "./form.css";

interface FormData {
  name: string;
  email: string;
  favoriteColor: string;
  agree: boolean;
  gender: string;
  feedback: string;
  contactMethod: "email" | "phone";
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    favoriteColor: "",
    agree: false,
    gender: "",
    feedback: "",
    contactMethod: "email",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="storybook-form">
      <div className="form-group">
        <Label text="Name" />
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
      </div>
      {/* ... Other inputs similarly updated ... */}
      <button type="submit" className="form-submit-btn">Submit</button>
    </form>
  );
};