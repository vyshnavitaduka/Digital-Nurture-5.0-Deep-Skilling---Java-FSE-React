import React from "react";

function BookDetails() {
  const book = {
    title: "Effective Java",
    author: "Joshua Bloch",
    pages: 412,
    genre: "Programming",
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Pages: {book.pages}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}

export default BookDetails;
