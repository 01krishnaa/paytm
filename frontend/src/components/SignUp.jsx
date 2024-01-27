import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="m-5 p-5 mx-auto mt-20 w-[350px] h-[580px] shadow-xl bg-slate-50 rounded-xl">
      <div className="text-center text-4xl font-bold mb-5">Sign Up</div>
      <p className="text-xl text-center">
        Enter your information to create an account
      </p>
      <div>
        <b>First Name </b> <br />
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-slate-50 my-3 p-2 rounded-lg border w-full"
          type="text"
          placeholder="John"
        />
      </div>
      <div>
        <b>Last Name </b> <br />
        <input
          onChange={(e) => setLastName(e.target.value)}
          className="bg-slate-50 my-3 p-2 rounded-lg border w-full"
          type="text"
          placeholder="Doe"
        />
      </div>
      <div>
        <b>Email</b> <br />
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="bg-slate-50 my-3 p-2 rounded-lg border w-full"
          type="email"
          placeholder="johndoe@example.com"
        />
      </div>
      <div>
        <b>Password</b> <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="bg-slate-50 my-3 p-2 rounded-lg border w-full"
          type="password"
        />
      </div>
      <button
        onClick={() => {
          axios.post("http://localhost:5000/api/v1/user/signup", {
            firstName,
            lastName,
            username,
            password,
          });
        }}
        className="mb-2 w-full px-10 py-2 bg-black text-white rounded-lg"
      >
        Sign Up
      </button>
      <p className="font-medium text-center">
        Already have an account? <u>Login</u>
      </p>
    </div>
  );
};

export default SignUp;
