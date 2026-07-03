package com.example;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class Exercise1_1TestClass {

    @Test
    public void testAddition() {

        int num1 = 10;
        int num2 = 20;

        int result = num1 + num2;

        assertEquals(30, result);
    }
}