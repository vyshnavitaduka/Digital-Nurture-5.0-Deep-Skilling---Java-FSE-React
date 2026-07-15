package com.cognizant.springlearn.service;

import com.cognizant.springlearn.dao.EmployeeDao;
import com.cognizant.springlearn.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    public Employee addEmployee(Employee employee) {
        return employeeDao.addEmployee(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeDao.getAllEmployees();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return employeeDao.getEmployeeById(id);
    }

    public Optional<Employee> updateEmployee(int id, Employee employee) {
        return employeeDao.updateEmployee(id, employee);
    }

    public boolean deleteEmployee(int id) {
        return employeeDao.deleteEmployee(id);
    }
}
