const { initializeDatabase } = require("./db/db.connect");
const Department = require("./models/department.model");
const Employee = require("./models/employee.model");

const departmentData = {
    name: "IT Department", 
    location: "Block - B"
}

initializeDatabase();

const addDepartment = async () => {
    try{
      const newDepartment = new Department(departmentData)
      await newDepartment.save();  
      console.log("Department added successfully.");
    } catch(error){
       console.log("Error", error);
    }
}

// addDepartment();

const employeeData = {
    name: "Lana Rhodes",
    email: "lana@gmail.com",
    department: "67a18aa8f6cdab4bff1e4514"
}

const addEmployee = async () => {
    try{
      const newEmployee = new Employee(employeeData);  
      await newEmployee.save();
      console.log("Employee added successfully.");
    } catch(error){
        console.log("Error", error);
    }
}

// addEmployee();

const getAllEmployees = async () => {
    try{
      const allEmployees = await Employee.find().populate("department");
      console.log("All Employees", allEmployees);
    } catch(error){
        console.log("Error", error);
    }
}

 getAllEmployees();