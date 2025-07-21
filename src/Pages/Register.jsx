import { useEffect, useState } from "react";
import registerField from "../config/registerField";
import { useNavigate } from "react-router-dom";
import Textfield from "../Components/Textfield.jsx";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
    phone: "",
    // address: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const handleSaveCookie = async () => {
      try {
        await axios.get("http://localhost:4000/test", {
          withCredentials: true,
        });
      } catch (error) {
        console.log(error);
      }
    };
    handleSaveCookie();
  }, []);
  
  const handlePostOperation = async (url, data) => {
    try {
      const result = await axios.post(url, data);
      return result;
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await handlePostOperation(
      "http://localhost:4000/api/auth/register",
      formData
    );

    console.log(response);

    if (response.status === 201) {
      alert("User Registered sucessfully");
    } else {
      alert("Registration Failed");
    }
    //  navigate("/login");
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
