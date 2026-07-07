package com.example;

public class BookRepository {

    public String findBookById(int id) {
        // Simulating a database fetch
        return "Book with ID " + id + ": 'Effective Java'";
    }

    public void saveBook(String bookName) {
        System.out.println("Book saved to repository: " + bookName);
    }
}
