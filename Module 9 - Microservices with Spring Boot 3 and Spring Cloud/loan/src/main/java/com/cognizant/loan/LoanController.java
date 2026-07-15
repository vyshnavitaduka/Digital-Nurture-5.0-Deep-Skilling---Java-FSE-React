package com.cognizant.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loan")
public class LoanController {

    @GetMapping("/{id}")
    public String getLoan(@PathVariable String id) {
        return "Loan details for loan ID: " + id;
    }

    @GetMapping("/status")
    public String status() {
        return "Loan service is up and running";
    }
}
