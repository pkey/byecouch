import Airtable from "airtable";

class ActivitiesService {
  private airtable;
  private activitiesBase;
  constructor() {
    this.airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
    this.activitiesBase = this.airtable.base("app0v46hnuh0dHIob");
  }
  getActivities() {
    this.activitiesBase("Activities")
      .select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
      })
      .eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          console.log("Retrieved", record.fields);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      });
  }
}

export default new ActivitiesService();
