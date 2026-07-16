import React from "react";
import "./App.css";
import BlogDetails from "./BlogDetails";
import BookDetails from "./BookDetails";
import CourseDetails from "./CourseDetails";

function App() {
  return (
    <div className="App">
      <BlogDetails />
      <hr />
      <BookDetails />
      <hr />
      <CourseDetails />
    </div>
  );
}

export default App;
