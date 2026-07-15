package com.cognizant.springlearn.service;

import com.cognizant.springlearn.dao.DepartmentDao;
import com.cognizant.springlearn.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentDao departmentDao;

    public Department addDepartment(Department department) {
        return departmentDao.addDepartment(department);
    }

    public List<Department> getAllDepartments() {
        return departmentDao.getAllDepartments();
    }

    public Optional<Department> getDepartmentById(int id) {
        return departmentDao.getDepartmentById(id);
    }

    public Optional<Department> updateDepartment(int id, Department department) {
        return departmentDao.updateDepartment(id, department);
    }

    public boolean deleteDepartment(int id) {
        return departmentDao.deleteDepartment(id);
    }
}
