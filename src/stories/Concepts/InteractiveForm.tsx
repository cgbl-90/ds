import React, { useState } from "react";
import { Button } from "../Atoms/Button";
import { Input } from "../Atoms/Input";
import { Label } from "../Atoms/Label";
import "./interactive-form.css";

interface FormData {
  name: string;
  surname: string;
  email: string;
  age: string;
  maritalStatus: string;
  country: string;
  languages: string[];
  newsletter: boolean;
  contactMethod: string;
  feedback: string;
  referralSource: string;
  terms: boolean;
}

export const InteractiveForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", surname: "", email: "", age: "", maritalStatus: "single",
    country: "", languages: [], newsletter: false, contactMethod: "email",
    feedback: "", referralSource: "", terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      if (name === "languages") {
        const newLanguages = checked
          ? [...formData.languages, value]
          : formData.languages.filter((lang) => lang !== value);
        setFormData((prev) => ({ ...prev, languages: newLanguages }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.terms) {
      setSubmitted(true);
    } else {
      alert("You must agree to the terms.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <Label htmlFor="name">1. Name:</Label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      {/* ... Remaining form groups following the same pattern ... */}
      <div className="form-submit-button">
        <Button type="submit" label="Submit" size="large" />
      </div>
      {submitted && <p className="form-success-message">Success!</p>}
    </form>
  );
};