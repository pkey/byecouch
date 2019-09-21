import express, { Request, Response } from "express";
import * as geolib from "geolib";
import { GeolibInputCoordinates } from "geolib/es/types";
require("dotenv").config();
const app = express();
const port = 4000;

//Mock Data
const activities: Activity[] = require("./data/activities.json");
const locationsMock: Location[] = [
  { name: "Work", latitude: 54.6974182, longitude: 25.2786977 }
  //   {
  //     name: "Antakalnio gimnazija",
  //     latitude: 54.7008955,
  //     longitude: 25.3105727
  //   }
];

//Interfaces
interface Spot {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}
interface Activity {
  name: string;
  spot: Spot;
  description: string;
}

interface Location {
  name: string;
  latitude: number;
  longitude: number;
}
interface closestActivitiesReq extends Request {
  body: {
    locations: Location[];
  };
}

//Routes
app.get("/", (req, res) => res.send(activities));

//TODO: Change to post?
app.get("/activities", (req: closestActivitiesReq, res: Response) => {
  //   const locations = req.body.locations;
  const locations = locationsMock; //TODO: Using Mock
  switch (locations.length) {
    case 0: {
      res.send(activities); //Send all of np locations provided
      break;
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
      res.send(orderedSpots); //TODO: Not correct format is returnd
      break;
    }
    case 2: {
      //return the ones inside the circle between the two
    }
    default: {
      //if more than two - return the ones inside the circle between n+
    }
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
