"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className={styles.container}>
      {!submittedName ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>Enter your name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      ) : (
        <h2 className={styles.heading}>Hello, {submittedName}!</h2>
      )}
    </div>
  );
}
