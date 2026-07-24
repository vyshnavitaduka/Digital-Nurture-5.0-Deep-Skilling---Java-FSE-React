import React from "react";

// GUESSED CONTENT: custom file name/content wasn't visible in the screenshot.
// Placeholder based on folder name "blogapp" — replace with your real component.

const posts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React components and JSX." },
  { id: 2, title: "Understanding Hooks", excerpt: "useState and useEffect explained with examples." },
];

function Blog() {
  return (
    <div>
      <h2>Blog App</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "16px" }}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
