
import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="m-5 p-5 mx-auto mt-40 w-[350px] h-[400px] shadow-xl bg-slate-50 rounded-xl">
      <div className="text-center text-4xl font-bold mb-5">Sign In</div>
      <p className="text-xl text-center">
        Enter your credentials to access your account
      </p>
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
          axios.post("http://localhost:5000/api/v1/user/signin", {
            username,
            password,
          });
        }}
        className="mb-2 w-full px-10 py-2 bg-black text-white rounded-lg"
      >
        Sign In
      </button>
      <p className="font-medium text-center">
        Dont't have an account? <u>Sign Up</u>
      </p>
    </div>
  );
};

export default SignIn;
