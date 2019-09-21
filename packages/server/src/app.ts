require("dotenv").config();
import body_parser from "body-parser";
import express, { Request, Response } from "express";
import activitiesService from "./services/activitiesService";
import locationService from "./services/locationService";
const app = express().use(body_parser.json());
const port = 4000;

//Mock Data/
//TODO: Get actitivites from AirTable
// const locationsMock: Location[] = [
//   { name: "Work", latitude: 54.6974182, longitude: 25.2786977 }
//   //   {
//   //     name: "Antakalnio gimnazija",
//   //     latitude: 54.7008955,
//   //     longitude: 25.3105727
//   //   }
// ];

//Routes
app.get("/", (req, res) => res.send(activitiesService.getActivities()));

app.post("/activities", (req: Request, res: Response) => {
  res.send(
    locationService.getMostRelevantLocations(
      req.body.locations,
      activitiesService.getActivities()
    )
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
