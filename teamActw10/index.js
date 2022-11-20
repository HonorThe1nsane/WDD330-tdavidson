import { getJSON, getLocation } from 'utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';



function getQuakesForLocation() {
    // call the getLocation function to get the lat/long
    const location = getLocation(baseUrl);

    // call the getJSON function to get the data
    const data = getJSON(baseUrl);

    expect(data.features.length).toBeGreaterThan(0);


    // // use that information to build out the correct URL
    // const geoUrl = baseUrl + // add location information here
    // // use the url to request the correct quakes 

    // //log out the quakes for now.
}
getQuakesForLocation();
