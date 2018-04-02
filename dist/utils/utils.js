"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geolib = require("geolib");
/**
 * getLineDistance() returns the distance
 * (in meters) between two geo coordinates
 */
function getLineDistance(start, end) {
    return geolib.getDistance({ latitude: start.latitude, longitude: start.longitude }, { latitude: end.latitude, longitude: end.longitude });
}
exports.getLineDistance = getLineDistance;
