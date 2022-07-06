import React from "react";
import laptop from "../pages/assets/Parent Dashboard 1.png";
import "../App.css";

function Login() {
  return (
    <React.Fragment>
      <div class="bg-white h-screen">
        <div class="flex flex-row h-screen w-full">
          <div className="flex flex-col w-full bg-blue-700 justify-center items-center">
            <div className="items-center md-4">
              <span className="text-5xl text-white font-semibold">
                Welcome to eDucura
              </span>
              <h5 className="text-white">
                The place for every school and every Parent
              </h5>
            </div>

            <div>
              <img className="" src={laptop} alt="" />
            </div>
          </div>

          <div className="flex flex-col w-full justify-center ">
            <div>
              <form
                action="post"
                class="mt-4 mb-4 flex justify-center items-center flex-col"
              >
                <div className="flex flex-col justify-center w-3/4 mb-4">
                  <h1 className="text-blue-700 text-4xl font-semibold mb-1">
                    Login
                  </h1>

                  <p className="mt-2">
                    Don't have an account?{" "}
                    <a href="/" className="text-blue-700 hover:underline">
                      Register
                    </a>{" "}
                  </p>
                </div>

                <div className="flex-col m-3 w-3/4">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="Email"
                    class="border w-full border-gray-900 py-2 px-3 text-grey-darkest rounded required"
                  />
                </div>

                <div className="flex-col m-3 w-3/4">
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="border w-full border-gray-900 py-2 px-3 text-grey-darkest rounded required"
                  />
                </div>

                <div class="flex items-center mb-1">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember Me
                  </label>
                </div>
                <button
                  class="block text-sm w-3/4 m-2 bg-blue-700 hover:bg-teal-dark text-white text-lg mx-auto p-2 rounded"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
