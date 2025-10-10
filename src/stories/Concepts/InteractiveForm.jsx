import { useState } from "react";
import { Button } from "../Atoms/Button";
import { Input } from "../Atoms/Input";
import { Label } from "../Atoms/Label";
import { Checkbox } from "../Atoms/Checkbox";
import { Radio } from "../Atoms/Radio";
import "./interactive-form.css";

export const InteractiveForm = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      // Handle multiple checkboxes for 'languages'
      if (name === "languages") {
        const newLanguages = checked
          ? [...formData.languages, value]
          : formData.languages.filter((lang) => lang !== value);
        setFormData((prev) => ({ ...prev, languages: newLanguages }));
      } else {
        // Handle single checkboxes
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.terms) {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
    } else {
      alert("You must agree to the terms and conditions.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* Question 1: Name */}
      <div className="form-group">
        <Label htmlFor="name">1. Name:</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>

      {/* Question 2: Surname */}
      <div className="form-group">
        <Label htmlFor="surname">2. Surname:</Label>
        <Input
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </div>

      {/* Question 3: Email */}
      <div className="form-group">
        <Label htmlFor="email">3. Email:</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="user@example.com"
          required
        />
      </div>

      {/* Question 4: Age */}
      <div className="form-group">
        <Label htmlFor="age">4. Age:</Label>
        <Input
          id="age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="e.g., 30"
          required
        />
      </div>

      {/* Question 5: Marital Status (Radio) */}
      <div className="form-group">
        <Label as="span">5. Marital Status:</Label>
        <div className="radio-group-container">
          <Radio
            label="Single"
            name="maritalStatus"
            value="single"
            checked={formData.maritalStatus === "single"}
            onChange={handleChange}
          />
          <Radio
            label="Married"
            name="maritalStatus"
            value="married"
            checked={formData.maritalStatus === "married"}
            onChange={handleChange}
          />
          <Radio
            label="Other"
            name="maritalStatus"
            value="other"
            checked={formData.maritalStatus === "other"}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Question 6: Country */}
      <div className="form-group">
        <Label htmlFor="country">6. Country:</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="e.g., Spain"
        />
      </div>

      {/* Question 7: Programming Languages (Checkbox) */}
      <div className="form-group">
        <Label as="span">7. Which languages do you know?</Label>
        <div className="checkbox-group-container">
          <Checkbox
            label="JavaScript"
            name="languages"
            value="javascript"
            checked={formData.languages.includes("javascript")}
            onChange={handleChange}
          />
          <Checkbox
            label="Python"
            name="languages"
            value="python"
            checked={formData.languages.includes("python")}
            onChange={handleChange}
          />
          <Checkbox
            label="Java"
            name="languages"
            value="java"
            checked={formData.languages.includes("java")}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Question 8: Newsletter */}
      <div className="form-group">
        <Label as="span">8. Subscribe to our newsletter?</Label>
        <Checkbox
          label="Yes, I'd like to receive updates."
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
      </div>

      {/* Question 9: Contact Method (Radio) */}
      <div className="form-group">
        <Label as="span">9. Preferred Contact Method:</Label>
        <div className="radio-group-container">
          <Radio
            label="Email"
            name="contactMethod"
            value="email"
            checked={formData.contactMethod === "email"}
            onChange={handleChange}
          />
          <Radio
            label="Phone"
            name="contactMethod"
            value="phone"
            checked={formData.contactMethod === "phone"}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Question 10: Feedback */}
      <div className="form-group">
        <Label htmlFor="feedback">10. Any feedback for us?</Label>
        <Input
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Your comments..."
        />
      </div>

      {/* Question 11: Referral Source */}
      <div className="form-group">
        <Label htmlFor="referralSource">11. How did you hear about us?</Label>
        <Input
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          placeholder="e.g., Social Media"
        />
      </div>

      {/* Question 12: Terms and Conditions */}
      <div className="form-group">
        <Checkbox
          label="I agree to the Terms and Conditions."
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-submit-button">
        <Button type="submit" label="Submit" variant="secondary" size="large" />
      </div>

      {submitted && (
        <p className="form-success-message">
          Success! Your form has been submitted.
        </p>
      )}
    </form>
  );
};
