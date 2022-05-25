import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { deleteStudent } from "../redux/features/studentSlice";

const StudentItem = ({ student }) => {
  const { id, firstName, lastName, email, phone, address } = student;
  //console.log(student);

  const { isAuthenticated } = useAuth0();

  let nav = useNavigate();

  const navigate = ()=>{
    nav('/students/:id/edit');
  }

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteStudent(id));
  };
  return (
    <div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div class="flex justify-start mt-4">
          <p class="text-xl font-medium text-indigo-500">ID: {id}</p>
        </div>
        <div>
          <Link to={`/students/${id}`}>
            <h2 class="text-gray-800 text-3xl font-semibold">
              {firstName} {lastName}
            </h2>
          </Link>
          <p class="mt-2 text-gray-600">{email}</p>
          <p class="mt-2 text-gray-600">{address}</p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">
            {phone}
          </a>
        </div>
        {isAuthenticated && <button onClick={handleDelete}>Delete</button>}
        <Link to={`/students/${id}/edit`}> <button>Edit Data</button></Link>
        {/* {isAuthenticated && <button >Edit Data</button>} */}
      </div>
    </div>
  );
};

export default StudentItem;
