import { GoogleMapsClient } from '@google/maps';

import { Coordinate } from "../src/models/Coordinate";

export class GeocodeService {
    googleMapsClient: GoogleMapsClient
    coffeeShop: Coordinate

    // Initialize the Google Maps Client
    constructor(address: string) {
        this.googleMapsClient = GoogleMapsClient.createClient({
            key: 'API-KEY-HERE'
        });
        this.coffeeShop = new Coordinate();
    }

    // Geocode an address
    public geocode(address, callback): void {
        this.googleMapsClient.geocode({
            address: address
        }, function (err, response) {
            if (!err) {
                console.log(response.json.results[0].geometry.location.lat);
                console.log(response.json.results[0].geometry.location.lng);
                callback( {
                    Latitude: response.json.results[0].geometry.location.lat,
                    Longitude: response.json.results[0].geometry.location.lng}
                );
            }
        });
    }
}