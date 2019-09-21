import * as geolib from "geolib";
import { GeolibInputCoordinates } from "geolib/es/types";
import { Activity, Location } from "../models/models";
import { Z_FILTERED } from "zlib";

class LocationService {

  async getMostRelevantLocations(
    locations: Location[],
    activities: Activity[]
  ) {
    const radius = 5000;
    // console.log("yo");
    // console.log(activities)

    if (!locations) return activities

    //TODO: Change to Activity[]
    switch (locations.length) {
      case 0: {
        return activities; //Send all of np locations provided
      }
      case 1: {

        console.log(locations)
        const point: GeolibInputCoordinates = {
          lng: locations[0].longitude,
          lat: locations[0].latitude
        };

        //TODO: Will calcualte everytime - could be cached or sth.
        //TODO: A lot of mapping an remapping
        const orderedActivities = geolib.orderByDistance(
          point,
          activities.map(a => {
            return {
              name: a.spot.name || "",
              lng: a.spot.longitude || "",
              lat: a.spot.latitude || "",
              activity: a
            };
          })
        );

        return orderedActivities.map((a: any) => {
          return a.activity
        });
      }
      case 2: {
        const firstLocationPoint: GeolibInputCoordinates = {
          lng: locations[0].longitude,
          lat: locations[0].latitude
        };

        const secondLocationPoint: GeolibInputCoordinates = {
          lng: locations[0].longitude,
          lat: locations[0].latitude
        };
        //return the ones inside the circle between the two
        const filteredActivities = activities.filter((activity) => {
          const inRadiusOfFirstLocation = geolib.isPointWithinRadius(
            { lng: activity.spot.longitude, lat: activity.spot.latitude },
            firstLocationPoint,
            radius
          )

          const intRadiusOfSecondLocation = geolib.isPointWithinRadius(
            { lng: activity.spot.longitude, lat: activity.spot.latitude },
            secondLocationPoint,
            radius
          )

          // TODO: move out of filter
          const center: GeolibInputCoordinates = geolib.getCenter([
            firstLocationPoint,
            secondLocationPoint
          ]) as GeolibInputCoordinates

          const inRadiusOfTwoPoints = geolib.isPointWithinRadius(
            { lng: activity.spot.longitude, lat: activity.spot.latitude },
            center,
            radius
          )

          return inRadiusOfFirstLocation || intRadiusOfSecondLocation || inRadiusOfTwoPoints
        })

        return filteredActivities
      }
      default: {
        //if more than two - return the ones inside the circle between n+
        const firstLocationPoint: GeolibInputCoordinates = {
          lng: locations[0].longitude,
          lat: locations[0].latitude
        };

        const points = locations.map((location) => {
          return {
            lng: location.longitude,
            lat: location.latitude
          }
        })
        //return the ones inside the circle between the two
        const filteredActivities = activities.filter((activity) => {
          for (let point of points) {
            if (geolib.isPointWithinRadius(
              { lng: activity.spot.longitude, lat: activity.spot.latitude },
              point,
              radius
            )) {
              return true
            }
          }

          return geolib.isPointInPolygon(
            { lng: activity.spot.longitude, lat: activity.spot.latitude },
            points
          )
        })

        return filteredActivities
      }
    }
  }
}

export default new LocationService();
