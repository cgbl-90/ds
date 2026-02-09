import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { Checkbox } from "../Atoms/Checkbox";
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
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
      {/* Name Field */}
      <div className="form-group">
        <Label text="Name" />
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      {/* Email Field - Added to satisfy canvas.getByPlaceholderText(/email/i) */}
      <div className="form-group">
        <Label text="Email" />
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      {/* Agree Checkbox - Added to satisfy canvas.getByLabelText(/i agree/i) */}
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree
        </label>
      </div>

      <button type="submit" className="form-submit-btn">
        Submit
      </button>
    </form>
  );
};
