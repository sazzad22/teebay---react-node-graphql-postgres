import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const signInUser = gql`
  query SigninUser($email:String! ,$password:String!) {
    signinUser(email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [runSignInUser, { loading, error, data }] = useLazyQuery(signInUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(email,password)
      await runSignInUser({ variables: { email, password } });
    }
    if (data?.signinUser){
      navigate("/")
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //   } = useForm();

  //   const onSubmit = (data) => {

  //     // signInWithEmailAndPassword(data.email, data.password);

  //   };
  return (
    // <div className="flex items-center min-h-screen justify-center pt-20 ">
    //   <div className="card lg:w-96 w-full bg-base-100 shadow-2xl ">
    //     <div className="card-body">
    //       <h2 className="text-center font-bold text-2xl text-accent ">Login</h2>
    //       {/* form */}
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <div className="form-control w-full max-w-xs">
    //           {/* Email input */}
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="Your Email"
    //             className="input  input-bordered input-accent  w-full max-w-xs"
    //             {...register("email", {
    //               required: {
    //                 value: true,
    //                 message: "An Email is Required",
    //               },
    //               pattern: {
    //                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    //                 message: "Provide A Valid Email",
    //               },
    //             })}
    //           />
    //           <label className="label">
    //             {errors.email?.type === "required" && (
    //               <span className="text-red-500 label-text-alt">
    //                 {errors.email.message}
    //               </span>
    //             )}
    //             {errors.email?.type === "pattern" && (
    //               <span className="text-red-500 label-text-alt">
    //                 {errors.email.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>
    //         {/* password */}
    //         <div className="form-control w-full max-w-xs mb-6">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="password"
    //             className="input input-bordered input-accent w-full max-w-xs"
    //             {...register("password", {
    //               required: {
    //                 value: true,
    //                 message: "Password is Required",
    //               },
    //               minLength: {
    //                 value: 6,
    //                 message: "Provide A 6 character password",
    //               },
    //             })}
    //           />
    //           <label className="label">
    //             {errors.email?.type === "required" && (
    //               <span className="text-red-500 label-text-alt">
    //                 {errors.password.message}
    //               </span>
    //             )}
    //             {errors.email?.type === "pattern" && (
    //               <span className="text-red-500 label-text-alt">
    //                 {errors.password.message}
    //               </span>
    //             )}
    //           </label>
    //         </div>
    //         {/* Login Button */}
    //         <input
    //           className="btn btn-outline btn-accent w-full max-w-xs shadow-lg  hover:drop-shadow-xl ease-in"
    //           value="Login"
    //           type="submit"
    //         />
    //       </form>
    //       <p className="mt-3">
    //         {/* <small>
    //           New to Doctors Portal?{" "}
    //           <Link
    //             className="text-secondary hover:underline font-bold"
    //             to="/signup"
    //           >
    //             Sign Up
    //           </Link>{" "}
    //         </small> */}
    //       </p>
    //       {/* <div className="divider">OR</div> */}
    //       {/* <button
    //         onClick={() => signInWithGoogle()}
    //         className="btn btn-outline btn-info shadow-lg hover:shadow-xl ease-in "
    //       >
    //         Google Sign In
    //       </button> */}
    //     </div>
    //   </div>
    // </div>
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
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-800">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
