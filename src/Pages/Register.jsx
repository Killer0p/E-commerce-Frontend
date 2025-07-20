import { useState } from "react";
import registerField from "../config/registerField";
import { useNavigate } from "react-router-dom";
import Textfield from "../Components/Textfield.jsx";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
    phone: "",
    address: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div>Register</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4">
        {registerField.map(({ id, label, placeholder, type, name }) => (
          <Textfield
            key={name}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            type={type}
            value={formData[name]}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;