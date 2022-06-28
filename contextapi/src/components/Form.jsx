import React from "react";
import styles from "./Form.module.css";

export const Form = ({ onSubmit, children, title }) => {
  return (
    <div>
      <form className={styles.myform} onSubmit={onSubmit}>
        <h3>{title}</h3>
        {children}
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};
