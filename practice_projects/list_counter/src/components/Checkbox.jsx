import React from "react";
import { useState } from "react";

const init = {
  filter1: false,
  filter2: false,
  filter3: false,
};
export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(init);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked((prev) => ({ ...prev, [name]: checked }));
  };
  console.log(isChecked);
  return (
    <div>
      <input
        type="checkbox"
        name="filter1"
        checked={isChecked.filter1}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="filter2"
        checked={isChecked.filter2}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="filter3"
        checked={isChecked.filter3}
        onChange={handleChange}
      />
    </div>
  );
};
