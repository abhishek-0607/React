import React from "react";

const initState = {
  name: "",
  isMarried: "",
  gender: "",
  email: "",
};

export default function Form1() {
  const [formData, setFormData] = React.useState(initState);

  const fileref = React.useRef();

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(fileref.current.files[0]);
  };

  const { name, isMarried, gender, email } = formData;

  return (
    <div>
      <h1>Form: person details</h1>
      <form onSubmit={onSubmit}>
        <label>
          name
          <input onChange={handleChange} name="name" value={name} type="text" />
        </label>
        <br />
        <br />
        <label>
          email
          <input
            onChange={handleChange}
            name="email"
            value={email}
            type="email"
          />
        </label>
        <br />
        <br />
        <select name="gender" value={gender} onChange={handleChange}>
          <option value="M">male</option>
          <option value="F">female</option>
          <option value="Others">others</option>
        </select>
        <br />
        <br />
        <label>
          Married
          <input
            onChange={handleChange}
            name="isMarried"
            checked={isMarried}
            type="checkbox"
          />
        </label>
        <br />
        <br />
        <input type="file" ref={fileref} />
        <input type="submit" value=" submit" />
      </form>
    </div>
  );
}
