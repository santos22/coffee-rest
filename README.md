# coffee-rest

## Installation
This project was developed using the following versions:
* Node v9.6.1
* npm 5.6.0
* TypeScript 2.8.1

## Running the program
Run the following commands to start the server:

```
npm install

npm start
```

## Example call
Using the Postman app: **http://localhost:3000/locations/45**:

Result
```json
{
    "message": "Success",
    "coffeeShop": {
        "id": 45,
        "name": "Pinhole Coffee",
        "address": "231 Cortland Ave",
        "latitude": "37.73955564148793",
        "longitude": "-122.41907167072054"
    }
}
```