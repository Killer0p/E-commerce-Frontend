import { useEffect, useState } from "react";
import registerField from "../config/registerField";
import { useNavigate } from "react-router-dom";
import Textfield from "../Components/Textfield.jsx";
import axios from "axios";
import { handlePostOperation } from "../config/handlePostOperation.js";
import { BASE_URL, registerInitialValue } from "../config/constant.js";
import Cookies from "js-cookie";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(registerInitialValue);

  const handleSaveCookie = () => {
    Cookies.set("name", "Ribesh");

    // try {
    //   await axios.get("http://localhost:4000/test", {
    //     withCredentials: true,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleClearCookie = () => {
    Cookies.remove("name");
  };

  const name = Cookies.get("name");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await handlePostOperation("/auth/register", formData);

    console.log(response);

    if (response.status === 201) {
      alert("User Registered sucessfully");
      setFormData(registerInitialValue);
    } else {
      alert("Registration Failed");
    }
    //  navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleClearCookie = async () => {
  //   console.log("object");
  //   try {
  //     await axios.get(`${BASE_URL}/clear-cookie`, {
  //       withCredentials: true,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <button onClick={handleSaveCookie} className="border">
        Add Cookie
      </button>
      <button onClick={handleClearCookie} className="border z-50">
        Clear Cookie
      </button>
      {name}
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
