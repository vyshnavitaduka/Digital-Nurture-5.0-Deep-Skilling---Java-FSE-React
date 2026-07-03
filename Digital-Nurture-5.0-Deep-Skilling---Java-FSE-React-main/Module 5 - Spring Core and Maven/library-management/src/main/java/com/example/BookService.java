package com.example;

public class BookService {

    private BookRepository bookRepository;

    // No-arg constructor
    public BookService() {
    }

    // Constructor Injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService created via Constructor Injection");
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookRepository set via Setter Injection");
    }

    public void getBookDetails(int id) {
        String book = bookRepository.findBookById(id);
        System.out.println("Fetched from Service: " + book);
    }

    public void addNewBook(String bookName) {
        bookRepository.saveBook(bookName);
    }
}
