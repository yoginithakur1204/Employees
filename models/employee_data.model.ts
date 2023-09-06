'use strict';

import Sequelize from 'sequelize';

module.exports=(sequelize:any)=>{
   const Employee=sequelize.define (
  'employee',{

    ID: {
            type:Sequelize.STRING,
            defaultValue:Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,       
          },
          FirstName: {
            type: Sequelize.STRING,
            allowNull: true
          },
          LastName: {
            type: Sequelize.STRING,
            allowNull: true
          },
          City: {
            type: Sequelize.STRING,
            allowNull: true
          },
          State: {
            type: Sequelize.STRING,
            allowNull: true
          },  
          Country: {
            type: Sequelize.STRING,
            allowNull: true
          },
          IsActive: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue : 1
          }

  }
   )
   return Employee;
}

// module.exports = (sequelize: any) => {
//   class Employee_Data extends Model<EmployeeAttributes> 
//   implements EmployeeAttributes{  
//     ID!: string;
//     City!: string;
//     FirstName!:string;
//     LastName!:string;
//     State!: string;
//     Country!: string;
//     IsActive!: boolean;
    
//     static associate(models : any) {
//       // define association here    
//     }
//   };
//   Employee_Data.init({ 
//     ID: {
//       type:Sequelize.INTEGER,
//       defaultValue:Sequelize.UUIDV4,
//       allowNull: false,
//       primaryKey: true,       
//     },
//     FirstName: {
//       type: Sequelize.STRING(20),
//       allowNull: true
//     },
//     LastName: {
//       type: Sequelize.STRING(20),
//       allowNull: true
//     },
//     City: {
//       type: Sequelize.STRING(150),
//       allowNull: true
//     },
//     State: {
//       type: Sequelize.STRING(100),
//       allowNull: true
//     },  
//     Country: {
//       type: Sequelize.STRING(100),
//       allowNull: true
//     },
//     IsActive: {
//       type: Sequelize.BOOLEAN,
//       allowNull: false,
//       defaultValue : 1
//     }
//   }, {
//     sequelize,
//     modelName: 'Employee_Data',
//     freezeTableName:true
//   });
//   return Employee_Data;
// };