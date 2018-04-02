# coffee-rest

## About
The goal of coffee-rest was to build an API server that can create a new coffee shop, return the details of an existing coffee shop, and update/delete a coffee shop. Node.js was used to build the API server, along with other publicly available packages such as Express and a client library for Google Maps Services.

## Endpoints implemented
- [x] POST `/locations` - Adds a new coffee shop to the list
- [x] GET `/locations` - Finds all coffee shops
- [x] GET `/locations/{id}` - Finds coffee shop by id
- [x] DELETE `/locations/{id}` Deletes a coffee shop
- [x] PUT `/locations/{id}` - Updates an existing coffee shop
- [x] GET `/locations/address/{address}` - Finds the nearest coffee shop based on entered address

## Installation
This project was developed using the following versions:
* Node v9.6.1
* npm 5.6.0
* TypeScript 2.8.1

## API Keys
The endpoint for finding the nearest coffee shop based on the address entered uses the Google Maps Geocoding API. You can get your API key here: https://developers.google.com/maps/documentation/geocoding/start#get-a-key 

After you receive an API key, replace the placeholder in the code with your new key: https://github.com/santos22/coffee-rest/blob/master/src/routes/CoffeeShopRouter.ts#L15

## Running the program
Run the following commands to start the server:

```
npm install

npm start
```

The server is now running at **http://localhost:3000**

## Testing
Run the following command to run tests:
```
npm test
```

## Example call
Sending a GET on the Postman app: **http://localhost:3000/locations/45**

Result:
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

## Improvements
The following is a list of improvements that could be implemented to enhance the application (e.g. performance, usability, code readability, etc):
- [ ] Simple UI for users to use instead of using something like Postman
- [ ] Adding validation when creating coffee shops (e.g. checking for actual addresses, valid latitude and longitude coordinates, etc.)
- [ ] Caching results for finding nearest coffee shop in order to limit calls made to Google API
- [ ] More tests to handle cases for invalid request parameters, server going down when client sends a request, etc.
- [ ] Refactor Google Maps Client used in getNearestCoffeeShop into it's own class and handle async results to provide to the user