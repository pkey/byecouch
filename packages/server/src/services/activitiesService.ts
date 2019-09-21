import Airtable from "airtable";
import { Activity, Spot, ActivityEvent, ActivityType } from "../models/models";


class ActivitiesService {
  private airtable: Airtable;
  private activitiesBase: Airtable.Base;
  constructor() {
    this.airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
    this.activitiesBase = this.airtable.base("app0v46hnuh0dHIob");
  }
  getActivities(callback): Promise<void> {
    let activities: Activity[] = [];

    return this.activitiesBase("Activities")
      .select({
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
      })
      .eachPage((records, fetchNextPage) => {
        // This function (`page`) will get called for each page of records.
        
        records.forEach((record) => {
          // console.log("Retrieved", record.fields);
  
          let fields: any = record.fields

          let events: ActivityEvent[] = []
          let activity_type: ActivityType = null;
          let activity: Activity = {
            link: fields.Link,
            phoneNumber: fields.PhoneNumber,
            email: fields.Email,
            type: activity_type,
            events: events,
            name: fields.Name,
            spot: fields.Spot
          };

          activities.push(activity)
        });        

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      }).finally(()=> {
        callback(activities)
      });
  }

  // TODO: filter by activities and move to SpotsService
  getSpots(callback): Promise<void> {
    let spots: Spot[] = [];

    return this.activitiesBase("Spots")
      .select({
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
      })
      .eachPage((records, fetchNextPage) => {
        // This function (`page`) will get called for each page of records.
        
        records.forEach((record) => {
          // console.log("Retrieved", record.fields);
  
          let fields: any = record.fields
          let spot: Spot = {
            id: record.id,
            name: fields.Name,
            address: fields.Address,
            latitude: fields.Latitude,
            longitude: fields.Longitude,
            link: fields.Link
          };

          spots.push(spot)
        });        

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      }).finally(()=> {
        callback(spots)
      });
  }
}

export default new ActivitiesService();
