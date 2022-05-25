import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, clearStudent } from ".././redux/features/studentSlice";

const Student = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const std = useSelector(getStudent);
  useEffect(() => {
    console.log(id);
    dispatch(getStudent(Number(id)));
    return () => {
      dispatch(clearStudent());
    };
  }, []);

  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, email, phone, address } = student;

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
          {/* <p class="text-xl font-medium text-indigo-500">ID: {id}</p> */}
        </div>
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">
            {firstName} {lastName}
          </h2>
          <p class="mt-2 text-gray-600">{email}</p>
          <p class="mt-2 text-gray-600">{address}</p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Student;
