import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Students from "./Students";
import AddStudent from "./AddStudent";
import Student from "./Student";
import EditStudent from "./EditStudent";
import store from "../redux/store";
import Nav from "./Nav";

const Data = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Students />}></Route>
            <Route path="/students/create" element={<AddStudent />}></Route>
            <Route path="/students/:id" element={<Student />}></Route>
            <Route path="/students/:id/edit" element={<EditStudent />}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default Data;
