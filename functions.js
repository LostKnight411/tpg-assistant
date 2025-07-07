var fs = require("fs");

var locations = [];

function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the Earth in km
    var dLat = degreeToRadian(lat2-lat1);
    var dLon = degreeToRadian(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(degreeToRadian(lat1)) * Math.cos(degreeToRadian(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return (d * 0.621371);
}

function degreeToRadian(deg) {
    return deg * (Math.PI/180)
}

function readLocations(){
    fs.readFile("locations.csv", function(err, data){
        console.log(data);
        var lines = String(data).split(/\r?\n|\r|\n/g);
        lines.forEach(line => {
            var items = line.split(",");
            console.log(items);
            if(items[0] != "WKT"){
                var rawcoords = items[0].replace(/"POINT \(/g, "").replace(/\)"/g, "");
                var coords = rawcoords.split(" ");
                console.log(`Coordinates: ${coords}`);
                if(coords.length > 1){
                    locations.push({
                        lat: coords[1],
                        lon: coords[0],
                        name: items[1]
                    });
                }
            }
        });
        console.log("All Locations:", locations);
    });
}

function writeLocation(lat, lon, name){
    var shortestDistance = 0;
    locations.forEach(loc => {
        var d = getDistance(lat, lon, loc.lat, loc.lon);
        if(shortestDistance == 0 || d < shortestDistance){
            shortestDistance = Math.round(d * 100) / 100;
        }
    });
    var subLine = `\n"POINT (${lon} ${lat})",${name},${shortestDistance}`;
    fs.appendFile("submissions.csv", subLine, function(err) {
        if (err) throw err;
        console.log(`Added ${subLine} `);
    });
}

module.exports = { locations, readLocations, getDistance, writeLocation };