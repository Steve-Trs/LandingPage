import React, { useState } from "react";
import "../assets/form.css";
import Button from "./Button";

export default function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/get-early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message);
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (err) {
      alert("Error sending email!", err);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <>
      <form
        action="/get-early-access"
        method="POST"
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Enter Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleClick} />
      </form>
    </>
  );
}
