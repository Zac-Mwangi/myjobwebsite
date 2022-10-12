import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/NavBar";
import JobList from "./components/JobList/JobList";
import JobDetails from "./components/JobDetails/JobDetails";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}
