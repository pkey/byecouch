import NodeGeocoder, { Options } from "node-geocoder";

let options: Options = {
  provider: "google",

  // Optional depending on the providers
  httpAdapter: "https", // Default
  apiKey: process.env.GOOGLE_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

let geocoder = NodeGeocoder(options);

// // Using callback
// geocoder.geocode("29 champs elysée paris", function(err, res) {
//   console.log(res);
// });

// // Or using Promise
// geocoder
//   .geocode("29 champs elysée paris")
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

export default geocoder;
