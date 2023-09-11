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

Explain your models and integration with the inventory
microservice, here.

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
