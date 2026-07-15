package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Department;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Repository
public class DepartmentDao {

    private final Map<Integer, Department> departments = new ConcurrentHashMap<>();
    private final AtomicInteger idCounter = new AtomicInteger(1);

    public DepartmentDao() {
        addDepartment(new Department(0, "Engineering", "Hyderabad"));
        addDepartment(new Department(0, "Human Resources", "Bengaluru"));
    }

    public Department addDepartment(Department department) {
        int id = idCounter.getAndIncrement();
        department.setId(id);
        departments.put(id, department);
        return department;
    }

    public List<Department> getAllDepartments() {
        return List.copyOf(departments.values());
    }

    public Optional<Department> getDepartmentById(int id) {
        return Optional.ofNullable(departments.get(id));
    }

    public Optional<Department> updateDepartment(int id, Department updated) {
        if (!departments.containsKey(id)) {
            return Optional.empty();
        }
        updated.setId(id);
        departments.put(id, updated);
        return Optional.of(updated);
    }

    public boolean deleteDepartment(int id) {
        return departments.remove(id) != null;
    }
}
