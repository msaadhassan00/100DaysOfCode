import React from "react";
import { useSelector } from "react-redux";
import StudentItem from "./StudentItem";

const Students = () => {
  const students = useSelector((state) => state.student.students);

  return (
    <div className="flex flex-wrap w-screen h-screen justify-evenly">
      {students.map((item, index) => {
        return <StudentItem key={index} student={item} />;
      })}
    </div>
  );
};

export default Students;
