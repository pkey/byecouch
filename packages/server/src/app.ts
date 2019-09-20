import express, { Request, Response } from "express";
import * as geolib from "geolib";
import { GeolibInputCoordinates } from "geolib/es/types";
require("dotenv").config();
const app = express();
const port = 4000;

//Mock Data
const activities: Activity[] = require("./data/activities.json");
const locationsMock: Location[] = [
  { name: "Work", lattitude: 54.6974182, longtitude: 25.2786977 }
  //   {
  //     name: "Antakalnio gimnazija",
  //     lattitude: 54.7008955,
  //     longtitude: 25.3105727
  //   }
];

//Interfaces
interface Spot {
  name: string;
  address: string;
  lattitude: number;
  longtitude: number;
}
interface Activity {
  name: string;
  spot: Spot;
  description: string;
}

interface Location {
  name: string;
  lattitude: number;
  longtitude: number;
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
        lng: locations[0].longtitude,
        lat: locations[0].lattitude
      };
      //TODO: Will calcualte everytime - could be cached or sth.
      //TODO: A lot of mapping an remapping
      const orderedSpots = geolib.orderByDistance(
        point,
        activities.map(a => {
          return {
            name: a.spot.name,
            lng: a.spot.longtitude,
            lat: a.spot.lattitude
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
