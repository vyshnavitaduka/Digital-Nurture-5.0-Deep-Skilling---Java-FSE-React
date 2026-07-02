package com.example;

import java.util.logging.Logger;

public class Exercise1_6LoggingExample {

    private static final Logger logger = Logger.getLogger(Exercise1_6LoggingExample.class.getName());

    public void performTask() {
        logger.info("Task started");

        System.out.println("Performing task...");

        logger.info("Task completed");
    }
}