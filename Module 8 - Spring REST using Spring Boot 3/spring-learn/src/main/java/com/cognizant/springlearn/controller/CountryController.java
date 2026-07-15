package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/countries")
public class CountryController {

    @Autowired
    private Country country;

    @GetMapping
    public Country getCountry() {
        return country;
    }
}
