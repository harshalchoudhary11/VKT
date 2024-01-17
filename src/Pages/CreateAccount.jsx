import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <>
      <header className="p-4 pt-20 sm:ml-64 ">
        {" "}
        <div>
          <h1 className="text-left pt-1 pl-5 h-9 bg-blue-950 border-solid  text-white">
            {" "}
            Create Account
          </h1>
        </div>
        <div className="w-full h-4/5 mx-auto bg-white p-2  shadow-md border-2 border-solid border-gray-300">
          <h2 className="text-2xl font-bold mb-2 text-center">
            My Information
          </h2>
          <h3 className="text-md font-bold mb-4">
            <span className="text-red-600">*</span>Indicates a required field
          </h3>
          <form className="space-y-4">
            <div className="mb-1 col-span-1">
              <label
                htmlFor="projectID"
                className="block text-sm font-medium text-gray-600"
              >
                Employee ID<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectID"
                name="projectID"
                className="mt-1 p-2 border rounded-md w-full grid-cols-1"
                placeholder="Enter the employee code "
              />
            </div>

            <h3 className="text-md font-extrabold mb-4">Legal Name</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter first name"
              />

              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter last name"
              />
            </div>
            <h3 className="text-md font-extrabold mb-4">Phone</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Mobile Number 1<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter mobile number 1"
              />
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Mobile Number 2<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter mobile number 2"
              />

              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter email"
              />
            </div>
            <h3 className="text-md font-extrabold mb-4">Personal Details</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Qualification <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Qualification"
              />
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Date of birth <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Date of birth"
              />

              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Age <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter father's name"
              />

              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                id="Gender"
                name="Gender"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Select Gender"
                required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-600 "
              >
                Experience <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Experience"
              />
            </div>

            <h3 className="text-md font-extrabold mb-4"> Address</h3>
            <div className="mb-1 ml-8 space-y-2">
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Personal Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter personal address"
              />
              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Temporary Address<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Temporary address"
              />

              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                State<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter state name"
              />

              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                City<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter city name"
              />

              <label
                htmlFor="technology"
                className="block text-sm font-medium text-gray-600"
              >
                Pincode<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Pincode"
              />
            </div>

            <div className="mt-1 space-x-4 col-span-2">
              <button
                type="submit"
                className="bg-green-600 text-white p-2 ml-4 rounded-md w-36 text-centre "
              >
                Done Registration
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default CreateAccount;
