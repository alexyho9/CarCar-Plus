# CarCar

#### Team:

* Alexander Ho - *Car Sales feature*
* Calvin Mach - *Auto Servicing feature*

## Design

![CarCar Diagram](carcar-diagram.png)

## How to Run the Project

1. Clone the repository for Project Beta at <https://gitlab.com/alexyho9/project-beta>.
2. In your terminal, change directory `cd project-beta` into the Project Beta folder.
3. Load in a new database volume `docker volume create beta-data`.
4. Build your Docker container with the command `docker-compose build`.
5. After, run container with `docker-compose up`.
6. View the page on your browser with the directory <http://localhost:3000>.


## Service microservice

### Models

- AutomobileVO (imported from Inventory API)
- Technician
- Appointments

### API

#### Technician Model
| Action | Method | URL |
| ------ | ------ | --- |
| List technicians | GET | http://localhost:8080/api/technicians/ |
| Create technician | POST | http://localhost:8080/api/technicians/ |
| Delete technician | DELETE | http://localhost:8080/api/technicians/{employee_id}/ |

Create a **technician**:

    {
        "first_name": "Bobby",
        "last_name": "Hill",
        "employee_id": "bh32"
    }

Return value of create a **technician**:

    {
	    "first_name": "Bobby",
	    "last_name": "Hill",
	    "employee_id": "bh32"
    }

Return value of all **technician** list:

    "technicians": [
        {
            "first_name": "Bobby",
            "last_name": "Hill",
            "employee_id": "bh32"
        }
    ]

#### Appointment Model

| Action | Method | URL |
| ------ | ------ | --- |
| List appointments | GET | http://localhost:8080/api/appointments/ |
| Create appointment | POST | http://localhost:8080/api/appointments/ |
| Delete appointment | DELETE | http://localhost:8080/api/appointments/:id/ |
| Set apppointment status "canceled" | PUT | http://localhost:8080/api/appointments/:id/cancel/ |
| Set apppointment status "finished" | PUT | http://localhost:8080/api/appointments/:id/finish/ |

Create an **appointment**:

    {
        "reason": "Oil Change",
        "date_time":  "2023-11-01T11:45",
        "customer": "Bert McCracken",
        "technician_id": "bh32",
	    "vin": "5FCDU97K2LA088465"
    }

Return value of create an **appointment**:

    {
        "href": "/api/appointments/1/",
        "id": 1,
        "vin": "5FCDU97K2LA088465",
        "vip": false,
        "date_time": "2023-11-01T11:45",
        "reason": "Oil Change",
        "status": "created",
        "customer": "Bert McCracken",
        "technician": {
            "first_name": "Bobby",
            "last_name": "Hill",
            "employee_id": "bh32"
        }
    }

Return value of all **appointments**:

    {
        "appointments": [
            {
                "href": "/api/appointments/1/",
                "id": 1,
                "vin": "2BCHV81S4JB533621",
                "vip": false,
                "date_time": "2023-09-23T12:15:00+00:00",
                "reason": "oil change",
                "status": "cancelled",
                "customer": "Bobby Hill",
                "technician": {
                    "first_name": "Bobby",
                    "last_name": "Hill",
                    "employee_id": "yimp"
            }
        ]
    }

Return value of a cancel/finish **appointment**:

    {
        "customer": "Bert McCracken",
        "reason": "oil change",
        "date_time": "2023-11-01T11:45",
        "status": "cancelled"
        // OR
        "status": "finished"
    }

## Sales microservice

### Models

- AutomobileVO (imported from Inventory API)
- Salesperson
- Customer
- Sale

### API

#### Salesperson Model

| Action | Method | URL |
| ------ | ------ | --- |
| List salespeople | GET | `http://localhost:8090/api/salespeople` |
| Create a salesperson | POST | `http://localhost:8090/api/salespeople` |
| Get a specific salesperson | GET | `http://localhost:8090/api/salespeople/:empid/` |
| Update a specific salesperson | PUT | `http://localhost:8090/api/salespeople/:empid/` |
| Delete a specific salesperson | DELETE | `http://localhost:8090/api/salespeople/:empid/` |

Creating or updating a salesperson:

    {
        "employee_id": "cdeguzman",
        "first_name": "Cory",
        "last_name": "DeGuzman"
    }

The return value of creating, getting, and updating a single salesperson:

    {
        "href": "/api/salespeople/cdeguzman/",
        "employee_id": "cdeguzman",
        "first_name": "Cory",
        "last_name": "DeGuzman"
    }

The list of salespeople is a dictionary with the key "salespersons" set to a list of salespeople.

    {
        "salespersons": [
            {
                "href": "/api/salespeople/cmach/",
                "employee_id": "cmach",
                "first_name": "Calvin",
                "last_name": "Mach"
            },
        ]
    }


#### Customer Model

| Action | Method | URL |
| ------ | ------ | --- |
| List customers | GET | `http://localhost:8090/api/customers` |
| Create a customer | POST | `http://localhost:8090/api/customers` |
| Get a specific customer | GET | `http://localhost:8090/api/customers/:pk/` |
| Update a specific customer | PUT | `http://localhost:8090/api/customers/:pk/` |
| Delete a specific customer | DELETE | `http://localhost:8090/api/customers/:pk/` |

Creating or updating a customer:

    {
        "first_name": "Harry",
        "last_name": "Potter",
        "address": "456 Market St, San Francisco, CA",
        "phone_number": "4156760000"
    }

The return value of creating, getting, and updating a single salesperson:

    {
        "href": "/api/customers/2/",
        "first_name": "Harry",
        "last_name": "Potter",
        "address": "456 Market St, San Francisco, CA",
        "phone_number": "4156760000"
    }

Getting a list of vehicle models returns a list of the detail information with the key "customers".

    {
        "customers": [
            {
                "href": "/api/customers/1/",
                "id": 1,
                "first_name": "Jason",
                "last_name": "Bourne",
                "address": "555 California St, San Francisco, CA",
                "phone_number": "5553270000"
            }
        ]
    }


#### Sale Model

| Action | Method | URL |
| ------ | ------ | --- |
| List sales | GET | `http://localhost:8090/api/sales` |
| Create a sale | POST | `http://localhost:8090/api/sales` |
| Get a specific sale | GET | `http://localhost:8090/api/sales/:pk/` |
| Update a specific sale | PUT | `http://localhost:8090/api/sales/:pk/` |
| Delete a specific sale | DELETE | `http://localhost:8090/api/sales/:pk/` |

Creating or updating a sale:

    {
        "automobile_vin": "SCBCR63W55C024793",
        "salesperson_id": "cmach",
        "customer_id": 1,
        "price": 45500
    }

The return value of creating, getting, and updating a single sale:

    {
        "href": "/api/sales/3/",
        "automobile": {
            "vin": "SCBCR63W55C024793",
            "sold": false,
            "import_href": "/api/automobiles/SCBCR63W55C024793/"
        },
        "salesperson": {
            "href": "/api/salespeople/cmach/",
            "employee_id": "cmach",
            "first_name": "Calvin",
            "last_name": "Mach"
        },
        "customer": {
            "href": "/api/customers/1/",
            "first_name": "Jason",
            "last_name": "Bourne",
            "address": "555 California St, San Francisco, CA",
            "phone_number": "5553270000"
        },
        "price": 45500
    }

Getting a list of sales returns a list of the detail information with the key "sales":

    {
        "sales": [
            {
                "href": "/api/sales/3/",
                "id": 3,
                "automobile": {
                    "vin": "SCBCR63W55C024793",
                    "sold": false,
                    "import_href": "/api/automobiles/SCBCR63W55C024793/"
                },
                "salesperson": {
                    "href": "/api/salespeople/cmach/",
                    "employee_id": "cmach",
                    "first_name": "Calvin",
                    "last_name": "Mach"
                },
                "customer": {
                    "href": "/api/customers/1/",
                    "id": 1,
                    "first_name": "Jason",
                    "last_name": "Bourne",
                    "address": "555 California St, San Francisco, CA",
                    "phone_number": "5553270000"
                },
                "price": 45500
            },
        ]
    }
