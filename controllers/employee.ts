import { Request,Response } from "express";
import {EmployeeData} from '../interface/employee_interface'
import {Employee_Error} from '../error/error'
 
const db=require('../models/index');
const Employee=db.employee

const getDemo =(req:any,res:any)=>{
    console.log("get Demo")
    res.send('API started')
}
const createEmployee = (req: Request, res: Response) => {
    const employee = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        City: req.body.City,
        Country: req.body.Country,
        IsActive: req.body.IsActive , 
    };

    console.log('Creating Employee started');

    Employee.create(employee)
        .then((createdEmployee: EmployeeData) => {
            res.json({
                employee: createdEmployee,
            });
            console.log('Creating Employee completed');
        })
        .catch((err: Error) => {
            if (err instanceof Employee_Error) {
              console.log(err);
                return res.status(err.status).json({
                    message: err.message,
                });
            } else {
                const customErrorMessage = 'Error Creating Employee, method- createEmployee, message-' + err.message;
                console.error(customErrorMessage);
                return res.status(500).json({
                    message: customErrorMessage,
                });
            }
        });
};

//get all Employees by ID

const getEmployeeById =(req:Request , res:Response) =>{
    const employeeId =req.params.id;

    Employee.findByPk(employeeId)

    .then((employee:EmployeeData[])=>{
        if(!employee) {
            return res.status(404).json({
                message : 'Employee not found'
            });
        }
        res.json({
            employee:employee
        });
    })
    .catch((err: Error) => {
        if (err instanceof Employee_Error) {
          console.log(err);
            return res.status(err.status).json({
                message: err.message,
            });
        } else {
            const customErrorMessage = "Error while getting all the records -getEmployeeById"+err.message;
            console.error(customErrorMessage);
            return res.status(500).json({
                message: customErrorMessage,
            });
        }
    });
}

//get All Employees

const getAllEmployees =(req:Request,res:Response) =>{
    Employee.findAll()

    .then((employees:EmployeeData[])=>{
        res.json({
            employees:employees
        });

    })
    .catch((err: Error) => {
        if (err instanceof Employee_Error) {
          console.log(err);
            return res.status(err.status).json({
                message: err.message,
            });
        } else {
            const customErrorMessage = 'Error while getting all data -getAllemployees'+err.message;
            console.error(customErrorMessage);
            return res.status(500).json({
                message: customErrorMessage,
            });
        }
    });
};



export { createEmployee ,getEmployeeById,getAllEmployees,getDemo};
