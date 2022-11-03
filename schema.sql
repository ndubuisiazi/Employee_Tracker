DROP DATABASE IF EXISTS team;

CREATE DATABASE team;

USE team;

CREATE TABLE employees (
    id int not null,
    First_name varchar(20) not null,
    Last_name varchar(20) not null, 
    role_id varchar(20) not null,
    manager_id varchar(20) not null
);

CREATE TABLE department (
    id varchar(20) not null,
    department_name VARCHAR(100) not null
);

CREATE TABLE roles (
    id varchar(20) not null,
    job_title varchar(20) not null,
    salary int not null,
    department_id varchar(20) not null
);
