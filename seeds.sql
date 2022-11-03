INSERT INTO employees (
    id,
    First_name,
    Last_name,
    role_id,
    manager_id
    )
VALUES
    (1,"Ndubuisi","Azi",100,1001),
    (2,"Sandile","Efe",100,1001),
    (3,"Tochukwu","Simiyu",100,1002),
    (4,"Sandile"," Efe",200,1003),
    (5,"Ayuba","Yewande",200,1003),
    (6,"Fatuma","Lanre",200,1003),
    (7,"Kunto","Kadiatou",300,1004),
    (8,"Chidubem","Faɗimatu",300,1004),
    (9,"Mumbi","Yewubdar",400,1004),
    (10,"Kagiso","Yaw",400,1005);


INSERT INTO department (
    id,
    department_name
    )
VALUES
    (2001,"Engineering"),
    (2002,"Design"),
    (2003,"Project Management"),
    (2004,"Software Dev");

INSERT INTO roles (
    id,
    job_title,
    salary,
    department_id
    )
VALUES
    (100,"Software Engineer",115000,2001),
    (200,"Product Designer",110000,2002),
    (300,"Scrum Master",100000,2003),
    (400,"Tech Lead",160000,2004);