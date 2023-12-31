USE employee_db;
INSERT INTO department (name)
VALUES ('Sales'),
    ('Engineering'),
    ('HR'),
    ('Finance');
    
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 150000, 1),
    ('Sales Person', 100000, 1),
    ('Lead Engineer', 120000, 2),
    ('Software Engineer', 100000, 2),
    ('HR Manager', 70000, 3),
    ('HR Assistant', 50000, 3),
    ('Finance Manager', 250000, 4),
    ('Accountant', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
    ('Jane', 'Doe', 2, 1),
    ('Mary', 'Johnson', 3, 1),
    ('James', 'Johnson', 4, 3),
    ('Emily', 'Clark', 5, NULL),
    ('Michael', 'Clark', 6, 5),
    ('Linda', 'Davis', 7, NULL),
    ('Richard', 'Davis', 8, 7);