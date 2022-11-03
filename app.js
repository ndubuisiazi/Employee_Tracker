const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const { printTable } = require('console-table-printer');
let department_id =['2001','2002','2003','2004']

// connect to database
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'team'});  

// Create questions for updating employees
UpdateEmployeeQuestions = 
[
  {  type: 'input',name: 'id',message: 'Please enter employee ID.'},
  { type: 'list',name: 'role_id',message: 'Please select role ID',choices:['100','200','300','400']}
]

// Create questions for adding employees
addEmployeeQuestions = 
[
  {  type: 'input',name: 'id',message: 'Please enter employee ID.'},
  { type: 'input',name: 'first_name',message: 'Please enter first name.'},
  { type: 'input',name: 'last_name',message: 'Please enter last name'},
  { type: 'list',name: 'role_id',message: 'Please select role ID',choices:['100','200','300','400']},
  { type: 'list',name: 'manager_id',message: 'Please select manager id',choices:department_id}
]

// Create questions for adding department
addDepartmentQuestions = 
[
  {  type: 'input',name: 'id',message: 'Please enter department id.'},
  { type: 'input',name: 'Department Name',message: 'Please enter department name.'}
]

// Create questions for adding role
addRoleQuestions = 
[
  { type: 'input',name: 'id',message: 'Please enter ID.'},
  { type: 'input',name: 'job_title',message: 'Please enter job title.'},
  { type: 'input',name: ', salary',message: 'Please enter salary'},
  { type: 'list',name: 'department_id',message: 'Please select department ID',choices:['2001','2002','2003','2004']}
]

// Create begining questions 
question = 
[
  { type: 'list',name: 'Next',message: 'Please choose from below',
  choices: 
  ['View all departments',
  'View all roles',
  'View all employees', 
  'Add Department', 
  'Add Role', 
  'Add Employee', 
  'Update employee role',
  'Finished'
]}]

class ViewAllDepartments 
  {log(){connection.query(
  'SELECT * FROM `department`',
  (err, results)=> {
  {const testCases =results; printTable(testCases)}
  {err ="View all department" ; console.log(err)};
  new questionStart().kickOff()
})}}

class ViewAllEmployees {
  log(){connection.query(
  'SELECT * FROM `employees`',
  (err, results)=>{
  {const testCases =results;printTable(testCases)};
  {err ="View all employees Error" ; console.log(err)};
  new questionStart().kickOff()
})}}

class ViewAllRoles{
log(){
connection.query(
  'SELECT * FROM `roles`',
  (err, results)=>{
  {const testCases =results; printTable(testCases)};
  {err ="View all roles Error" ; console.log(err)};
  new questionStart().kickOff()
})}}

class AddDepartment{
  constructor( id,department_name){
  this.id= id,
  this.department_name = department_name
  }

  log(){
    connection.query(`INSERT INTO department (id,department_name)VALUES(`+this.id+`,"`+this.department_name+`")`,
    function(err, results) {{const testCases =results};
    {err ="Add department Error" ; console.log(err)};
    new ViewAllDepartments().log()}
)}}

class AddRole {
  constructor(id,job_title, salary,department_id){
  this.id= id,
  this.job_title = job_title,
  this.salary= salary,
  this.department_id =department_id}

  log()
    {connection.query(`INSERT INTO roles (id,job_title,salary,department_id)VALUES
    (`+this.id+`,"`+this.job_title+`",`+this.salary+`,`+this.department_id+`)`,
    function(err, results) 
    {{const testCases =results};
    {err ="Add role Error" ; console.log(err)};
    new ViewAllRoles().log()}
)}}


class AddEmployee {
  constructor(id, First_name,Last_name,role_id,manager_id){
  this.id= id,
  this.First_name = First_name,
  this.Last_name= Last_name,
  this.role_id =role_id,
  this.manager_id = manager_id}

  log()
    { connection.query(`INSERT INTO employees (id,First_name,Last_name,role_id,manager_id)
      VALUES(`+this.id+`,"`+this.First_name+`","`+this.Last_name+`",`+this.role_id+`,`+this.manager_id+`);`,);
      new ViewAllEmployees().log();
    }}

class UpdateEmployeeRole{
  constructor(id, role_id){this.id= id,this.role_id = role_id}
  log(){connection.query(`UPDATE employees SET role_id = `+this.role_id+` WHERE id = `+this.id);
  new ViewAllEmployees().log()
}}

class questionFilter{
  constructor(functype){
  this.functype = functype}
  filter(){
  if(this.functype == 'View all departments')
    {new ViewAllDepartments().log()}
  else if(this.functype == 'View all employees')
    {new ViewAllEmployees().log()}
  else if(this.functype == 'View all roles')
    {new ViewAllRoles().log()}
  else if(this.functype == 'Add Department')
    {new addDepartmentQuestionsStart().kickOff()}
  else if(this.functype == 'Add Role')
    {new addRoleQuestionsStart().kickOff()}
  else if(this.functype == 'Add Employee')
    {new addEmployeeQuestionsStart().kickOff()}
  else if(this.functype == 'Update employee role')
    {new UpdateEmployeeQuestionsStart().kickOff()}
  else (console.log("Done"))
}}

class questionStart{
  kickOff(){inquirer.prompt(question).then((a)=>{{
  new questionFilter(Object.values(a)[0]).filter()
}})}}

class addEmployeeQuestionsStart{
  kickOff(){inquirer.prompt(addEmployeeQuestions).then((a)=>{{
  new AddEmployee(...Object.values(a)).log()
}})}}

class UpdateEmployeeQuestionsStart{
  kickOff(){inquirer.prompt(UpdateEmployeeQuestions).then((a)=>{{
  new UpdateEmployeeRole(...Object.values(a)).log()
}})}}

class addRoleQuestionsStart{
  kickOff(){inquirer.prompt(addRoleQuestions).then((a)=>{{
  new AddRole(...Object.values(a)).log()
}})}}

class addDepartmentQuestionsStart{
  kickOff(){inquirer.prompt(addDepartmentQuestions).then((a)=>{{
  new AddDepartment(...Object.values(a)).log()
}})}}

new questionStart().kickOff()

