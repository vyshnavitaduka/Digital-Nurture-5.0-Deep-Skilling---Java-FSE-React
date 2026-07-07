package com.spring.orm;

import com.spring.orm.model.Country;
import com.spring.orm.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        List<Country> countries = countryService.getAllCountries();
        System.out.println("---- Countries loaded from database ----");
        countries.forEach(System.out::println);
    }
}
