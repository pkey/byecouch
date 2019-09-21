import * as geolib from "geolib";
import { GeolibInputCoordinates } from "geolib/es/types";
import { Activity, Location } from "../models/models";

class LocationService {
  getMostRelevantLocations(
    locations: Location[],
    activities: Activity[]
  ): any[] {
    console.log("yo");
    console.log(activities)

    //TODO: Change to Activity[]
    switch (locations.length) {
      case 0: {
        return activities; //Send all of np locations provided
      }
      case 1: {
        const point: GeolibInputCoordinates = {
          lng: locations[0].longitude,
          lat: locations[0].latitude
        };
        //TODO: Will calcualte everytime - could be cached or sth.
        //TODO: A lot of mapping an remapping
        const orderedSpots = geolib.orderByDistance(
          point,
          activities.map(a => {
            return {
              name: a.spot.name,
              lng: a.spot.longitude,
              lat: a.spot.latitude
            };
          })
        );

        return activities;
      }
      case 2: {
        //return the ones inside the circle between the two
        return activities
      }
      default: {
        //if more than two - return the ones inside the circle between n+
      }
    }
  }
}

export default new LocationService();
