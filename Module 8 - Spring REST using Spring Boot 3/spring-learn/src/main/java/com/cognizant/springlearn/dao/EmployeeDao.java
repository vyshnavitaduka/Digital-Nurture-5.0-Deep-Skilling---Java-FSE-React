package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Employee;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Repository
public class EmployeeDao {

    private final Map<Integer, Employee> employees = new ConcurrentHashMap<>();
    private final AtomicInteger idCounter = new AtomicInteger(1);

    public EmployeeDao() {
        addEmployee(new Employee(0, "Asha Rao", "asha.rao@example.com", 65000, 1));
        addEmployee(new Employee(0, "Vikram Shah", "vikram.shah@example.com", 72000, 1));
    }

    public Employee addEmployee(Employee employee) {
        int id = idCounter.getAndIncrement();
        employee.setId(id);
        employees.put(id, employee);
        return employee;
    }

    public List<Employee> getAllEmployees() {
        return List.copyOf(employees.values());
    }

    public Optional<Employee> getEmployeeById(int id) {
        return Optional.ofNullable(employees.get(id));
    }

    public Optional<Employee> updateEmployee(int id, Employee updated) {
        if (!employees.containsKey(id)) {
            return Optional.empty();
        }
        updated.setId(id);
        employees.put(id, updated);
        return Optional.of(updated);
    }

    public boolean deleteEmployee(int id) {
        return employees.remove(id) != null;
    }
}
