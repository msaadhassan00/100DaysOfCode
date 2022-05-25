import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addStudent } from "../redux/features/studentSlice";

const AddStudent = () => {

  const [newStd, setnewStd] = useState({
    id: uuidv4(),
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    phone:'',
  })
  let nav = useNavigate();

  const dispatch = useDispatch();

 
  const handleAddData = (e) =>{
    e.preventDefault();
    dispatch(addStudent(newStd))
    nav('/')
  }
  

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div class="w-full max-w-xs">
        <h1 className="text-center font-bold text-xl text-blue-500">
          Add Student Data
        </h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>handleAddData(e)}>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              First Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              value={newStd.firstName}
              onChange={(e)=>setnewStd({...newStd,firstName:e.target.value})}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Last Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              value={newStd.lastName}
              onChange={(e)=>setnewStd({...newStd,lastName:e.target.value})}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
              value={newStd.email}
              onChange={(e)=>setnewStd({...newStd,email:e.target.value})}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Address"
              value={newStd.address}
              onChange={(e)=>setnewStd({...newStd,address:e.target.value})}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Phone
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone Number"
              value={newStd.phone}
              onChange={(e)=>setnewStd({...newStd,phone:e.target.value})}
            />
          </div>

          <div class="flex items-center justify-center">
            <button
              class="w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
        
            >
              Add Data
            </button>
           
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020  All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AddStudent;
