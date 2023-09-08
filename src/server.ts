import express, { json } from 'express';

import logger from "../logger_file/logger";

// import getAllEmployees from '../routers/employee_data'
// import getEmployeeById from '../routers/employee_data'
// import createEmployee from '../routers/employee_data'

const db = require('../models/index');


import EmployeeData from '../routers/employee_data'
 const app = express();



//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use("/api",EmployeeData);

// app.use("/api",getAllEmployees);
// app.use("/api",getEmployeeById);
// app.use("/api",createEmployee);


app.get("/", (_req, res) => {              //adding underscore won't execute 
    res.send("Hello from Employee Table");
})
const port = process.env.PORT || 4000;

db.sequelize

.sync()

.then(() => {

// console.log("DB Connection Established Successfully!");
logger.info("DB Connection Established Successfully!")

})

.catch((err:any) => {

console.log("Failed to sync DB: " + err.message);

});
app.listen(port, () => {

    console.log("Listening to port 4000");
    
    });

// sequelizeConnect().then((db: any) => { 
//     db.sequelize.sync().then(() => {
//         app.listen(port, () => {
//             console.log("Server Started");
//             console.log("server running on port :",port)
//         })
//     });
// })

 
