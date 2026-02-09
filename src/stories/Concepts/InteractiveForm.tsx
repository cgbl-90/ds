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
    name: "",
    surname: "",
    email: "",
    age: "",
    maritalStatus: "single",
    country: "",
    languages: [],
    newsletter: false,
    contactMethod: "email",
    feedback: "",
    referralSource: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = event.target as HTMLInputElement;
    const { name, value, type, checked } = target;

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
      {/* 1. Name */}
      <div className="form-group">
        <Label htmlFor="name">1. Name:</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* 2. Surname */}
      <div className="form-group">
        <Label htmlFor="surname">2. Surname:</Label>
        <Input
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </div>

      {/* 3. Email */}
      <div className="form-group">
        <Label htmlFor="email">3. Email:</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* 4. Age */}
      <div className="form-group">
        <Label htmlFor="age">4. Age:</Label>
        <Input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      {/* 5. Marital Status (Radio) */}
      <div className="form-group">
        <Label>5. Marital Status:</Label>
        <div className="radio-group-container">
          <label>
            <input
              type="radio"
              name="maritalStatus"
              value="single"
              checked={formData.maritalStatus === "single"}
              onChange={handleChange}
            />{" "}
            Single
          </label>
          <label>
            <input
              type="radio"
              name="maritalStatus"
              value="married"
              checked={formData.maritalStatus === "married"}
              onChange={handleChange}
            />{" "}
            Married
          </label>
        </div>
      </div>

      {/* 6. Country */}
      <div className="form-group">
        <Label htmlFor="country">6. Country:</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>

      {/* 7 & 8. Languages (Checkboxes) */}
      <div className="form-group">
        <Label>7 & 8. Languages:</Label>
        <div className="checkbox-group-container">
          <label>
            <input
              type="checkbox"
              name="languages"
              value="JavaScript"
              checked={formData.languages.includes("JavaScript")}
              onChange={handleChange}
            />{" "}
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="languages"
              value="Python"
              checked={formData.languages.includes("Python")}
              onChange={handleChange}
            />{" "}
            Python
          </label>
        </div>
      </div>

      {/* 10. Feedback */}
      <div className="form-group">
        <Label htmlFor="feedback">10. Any feedback for us?</Label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      {/* 11. Referral Source */}
      <div className="form-group">
        <Label htmlFor="referralSource">11. How did you hear about us?</Label>
        <Input
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
        />
      </div>

      {/* Newsletter */}
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />{" "}
          Yes, I'd like to receive updates.
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />{" "}
          I agree to the Terms and Conditions.
        </label>
      </div>

      <div className="form-submit-button">
        <Button type="submit" label="Submit" size="large" />
      </div>

      {submitted && <p className="form-success-message">Success!</p>}
    </form>
  );
};
