import * as geolib from 'geolib';

import { Coordinate } from "../models/Coordinate";

/**
 * getLineDistance() returns the distance
 * (in meters) between two geo coordinates
 */
export function getLineDistance(start: Coordinate, end: Coordinate) {
    return geolib.getDistance(
        {latitude: start.latitude, longitude: start.longitude},
        {latitude: end.latitude, longitude: end.longitude}
    );
}