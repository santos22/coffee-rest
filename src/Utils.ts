import { Coordinate } from "../src/Coordinate";
import * as geolib from 'geolib';

export function getLineDistance(src: Coordinate, dest: Coordinate) {
    return geolib.getDistance(
        {latitude: src.latitude, longitude: src.longitude},
        {latitude: dest.latitude, longitude: dest.longitude}
    );
}