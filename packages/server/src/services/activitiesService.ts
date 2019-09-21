import Airtable from "airtable";
import { Activity, Spot } from "../models/models";

class ActivitiesService {
  private airtable: Airtable;
  private activitiesBase: Airtable.Base;
  constructor() {
    this.airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
    this.activitiesBase = this.airtable.base("app0v46hnuh0dHIob");
  }

  async getActivities() {
    try {
      const activities: Activity[] = [];

      await this.activitiesBase("Activities")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
          records.forEach(({ fields }: any) => {
            activities.push({
              id: fields.Id,
              photo: fields.Photo,
              rating: fields.Rating,
              ratingCount: fields.RatingCount,
              price: fields.Price,
              maxPeople: fields.MaxPeople,
              link: fields.Link,
              phoneNumber: fields.PhoneNumber,
              email: fields.Email,
              type: fields.Type,
              events: [],
              name: fields.Name,
              spot: fields.Spot
            });
          });

          fetchNextPage();
        });

      return activities;
    } catch (err) {
      return err;
    }
  }

  async getSpots() {
    try {
      const spots: Spot[] = [];

      await this.activitiesBase("Spots")
        .select({ view: "Grid view" })
        .eachPage((records, fetchNextPage) => {
          records.forEach(({ id, fields }: any) => {
            spots.push({
              id,
              name: fields.Name,
              address: fields.Address,
              latitude: fields.Latitude,
              longitude: fields.Longitude,
              link: fields.Link
            });
          });
          fetchNextPage();
        });

      return spots;
    } catch (err) {
      return err;
    }
  }
}

export default new ActivitiesService();
