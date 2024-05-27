import { Dispatch, SetStateAction, useState } from "react";

import { regUser } from "../../../lib/api/api";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "../../../lib/slices/tokenSlice";

interface PropsWindow {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Register({ setIsOpen }: PropsWindow) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password2, setPasswordConfirmation] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters long");
      return;
    }
    if (phoneNumber.length < 8) {
      alert("Phone number must be at least 10 characters long");
      return;
    }

    try {
      const response = await regUser({
        username,
        phoneNumber,
        password,
        password2,
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(setToken(response.data.token) as any);
        setIsOpen(true);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-md w-full p-6 bg-black  rounded-lg shadow-md border-2 border-white">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Sign up
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4 text-black">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="text-black form-input mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:focus:ring-gray-600 focus:ring-opacity-50"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phonenumber"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone number
          </label>
          <input
            type="text"
            id="phonenumber"
            className="text-black form-input mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:focus:ring-gray-600 focus:ring-opacity-50"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="text-black form-input mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:focus:ring-gray-600 focus:ring-opacity-50"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="passwordConfirmation"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            className="text-black form-input mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 dark:focus:ring-gray-600 focus:ring-opacity-50"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full text-red hover:before:bg-redborder-pink-500 relative h-[50px] overflow-hidden border border-pink-500 bg-white px-3 text-pink-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-pink-500 before:transition-all before:duration-500 hover:text-white hover:shadow-pink-500 hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-10">Sign up</span>
        </button>
      </form>
      <div className="text-center mt-4 flex justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300">
          Already have an account?
        </p>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="group text-white transition-all duration-300 ease-in-out"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Sign in
          </span>
        </button>
      </div>
    </div>
  );
}

export default Register;
