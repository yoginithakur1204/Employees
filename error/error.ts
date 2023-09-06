
//Custom Error handling for CME 
import {Error_Response} from '../interface/employee_interface'

export class Employee_Error extends Error {
    response: Error_Response;
    status: number;

    constructor(message: string, status: number) {
        super(message);
        Object.setPrototypeOf(this, Employee_Error.prototype);
        this.name = 'CME_Error';
        this.response = {
            status,
            message,
        };
        this.status = status; 
    }
}

