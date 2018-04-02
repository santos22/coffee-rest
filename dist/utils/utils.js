"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geolib = require("geolib");
function getLineDistance(src, dest) {
    return geolib.getDistance({ latitude: src.latitude, longitude: src.longitude }, { latitude: dest.latitude, longitude: dest.longitude });
}
exports.getLineDistance = getLineDistance;
