require("dotenv").config();
import body_parser from "body-parser";
import express, { Request, Response } from "express";
import { Activity } from "./models/models";
import activitiesService from "./services/activitiesService";
import locationService from "./services/locationService";
const app = express().use(body_parser.json());
const port = process.env.PORT || 4000;

//Routes
app.get("/", (req, res) => res.send([]));

app.post("/activities", async (req: Request, res: Response) => {
  try {
    const activities = await activitiesService.getActivities();
    const spots = await activitiesService.getSpots();

    const categories = await activitiesService.getCategories();
    const activitiesRes = activities.map((activity: Activity) => {
      return {
        ...activity,
        spot: spots.filter(spot => spot.id === activity.spot)[0],
        category: categories.filter(
          category => category.id === activity.category
        )[0]
      };
    });

    if (req.body.locations) {
      const recommendations = await locationService.getMostRelevantLocations(
        req.body.locations,
        activitiesRes
      );
      res.send(recommendations);
    } else {
      res.send(activitiesRes);
    }
  } catch (err) {
    res.send({ err: err.toString() });
  }
});

app.get("/categories", async (_, res) => {
  const categories = await activitiesService.getCategories();
  res.send(categories);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
