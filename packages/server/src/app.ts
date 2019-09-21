require('dotenv').config();
import body_parser from 'body-parser';
import express, { Request, Response } from 'express';
import activitiesService from './services/activitiesService';
import locationService from './services/locationService';
const app = express().use(body_parser.json());
const port = process.env.PORT || 4000;

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
app.get('/', (req, res) => res.send([]));

app.post('/activities', async (req: Request, res: Response) => {

  try {
    const activities = await activitiesService.getActivities();
    const spots = await activitiesService.getSpots();

    const merged = []
    const activitiesWithSpots = activities.filter(activity => {
      if (activity && activity.spot && activity.spot.length != 0) return activity
    })

    activitiesWithSpots.forEach(activity => {
      spots.forEach(spot => {
        if ( activity.spot[0] === spot.id) {
          merged.push({
            ...activity,
            spot
          })
        }
      }) 
    })

    const recommendations = await locationService.getMostRelevantLocations(
      req.body.locations,
      merged
    );
    res.send(recommendations);
  } catch (err) {
    console.log(err);
    res.send({ err: err.toString() });
  }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
