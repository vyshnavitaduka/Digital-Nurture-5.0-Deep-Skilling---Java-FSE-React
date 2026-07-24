import React from "react";

function BlogDetails() {
  const blog = {
    title: "Getting Started with React Hooks",
    author: "Asha Rao",
    date: "2026-02-10",
    content: "React Hooks let you use state and other React features without writing a class...",
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>
        <em>By {blog.author} on {blog.date}</em>
      </p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
