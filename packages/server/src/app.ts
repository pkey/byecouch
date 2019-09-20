import express from "express";
require("dotenv").config();
const app = express();
const port = 4000;

interface School {
  name: string;
  address: string;
  lattitude: number;
  longtitude: number;
}
interface Activity {
  name: string;
  school: School;
  description: string;
}

const list: Activity[] = [
  {
    name: "Swimming",
    description: "Swimming this is",
    school: {
      name: "LVJC",
      address: "Konstiticujos pr. 25",
      lattitude: 54.6995102,
      longtitude: 25.2671074
    }
  },
  {
    name: "Dancing",
    description: "Dancing this is",
    school: {
      name: "Sokiu akademija",
      address: "Konstitucijos pr. 11",
      lattitude: 54.69673470000001,
      longtitude: 25.2752488
    }
  }
];

app.get("/", (req, res) => res.send(list));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
