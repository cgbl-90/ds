// Form.jsx
import React, { useState } from "react";
import { Label } from "../Atoms/Label"; 
import { Input } from "../Atoms/Input"; 
import { Checkbox } from "../Atoms/Checkbox"; 
import { Radio } from "../Atoms/Radio"; 
import "./form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favoriteColor: "",
    agree: false,
    gender: "",
    feedback: "",
    contactMethod: "email", // Default contact method
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="storybook-form">
      <Label text="Name" />
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <Label text="Email" />
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <Label text="Favorite Color" />
      <Input
        name="favoriteColor"
        value={formData.favoriteColor}
        onChange={handleChange}
        placeholder="Enter your favorite color"
      />

      <Label text="Gender" />
      <div>
        <Radio
          label="Male"
          checked={formData.gender === "male"}
          onChange={handleChange}
          name="gender"
          value="male"
        />
        <Radio
          label="Female"
          checked={formData.gender === "female"}
          onChange={handleChange}
          name="gender"
          value="female"
        />
      </div>

      <Label text="Feedback" />
      <Input
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        placeholder="Enter your feedback"
      />

      <Label text="Preferred Contact Method" />
      <select
        name="contactMethod"
        value={formData.contactMethod}
        onChange={handleChange}
      >
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>

      <Checkbox
        label="I agree to the terms and conditions"
        checked={formData.agree}
        onChange={handleChange}
        name="agree"
      />

      <button type="submit">Submit</button>
    </form>
  );
};
