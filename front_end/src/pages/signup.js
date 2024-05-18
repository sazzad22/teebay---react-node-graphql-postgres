import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link, useLocation, useNavigate } from "react-router-dom";

const signUpUser = gql`
  mutation SignupUser($name:String,$email:String! ,$password:String!) {
    signupUser(name: $name,email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [runSignUpUser, { loading, error, data }] = useLazyQuery(signUpUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
      await runSignUpUser({ variables: { email, password } });
    }
    if (data?.signinUser) {
      navigate("/");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-bold mb-6">SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              LOGIN
            </button>
          </div>
        </form>
        {/* <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Signup
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default SignUp;
