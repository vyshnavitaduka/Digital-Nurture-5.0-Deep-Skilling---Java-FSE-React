package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

public class StringUtilsTest {

    StringUtils stringUtils = new StringUtils();

    @Test
    public void testReverse() {
        assertEquals("olleh", stringUtils.reverse("hello"));
    }

    @Test
    public void testIsPalindromeTrue() {
        assertTrue(stringUtils.isPalindrome("madam"));
    }

    @Test
    public void testIsPalindromeFalse() {
        assertFalse(stringUtils.isPalindrome("hello"));
    }

    @Test
    public void testIsPalindromeWithSpaces() {
        assertTrue(stringUtils.isPalindrome("nurses run"));
    }

    @Test
    public void testCountVowels() {
        assertEquals(3, stringUtils.countVowels("hello world"));
    }

    @Test
    public void testCapitalize() {
        assertEquals("Hello", stringUtils.capitalize("hELLO"));
    }
}