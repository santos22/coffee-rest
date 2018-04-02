export class Coordinate {
  latitude: number;
  longitude: number;
  //constructor();
  // ? are optional parameters
  constructor(latitude?: number, longitude?: number) {
      this.latitude = latitude;
      this.longitude = longitude;
  }
}