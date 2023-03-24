# Welcome to your Flight service

## Project Setup
- Clone the project on your local 
- Execite `npm install` on the same patha as of your root directory of the download project
- Create a `.env` file in the root dirctory and add the following environment variables 
  - `PORT = 3000`
- Inside the `src/config ` folder create a new file `config.json` and add tha following peice of json
```
 {
  "development": {
    "username": "`Your DB Login Name`",
    "password": "`Your DB Password`",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  } 
 }
```

- Once you've added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`

## DB Design

  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flight but a flight belongs to an airport