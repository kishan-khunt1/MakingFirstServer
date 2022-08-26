const http = require("http");

function ABC(req, res) {
  const movies = [
    "RRR",
    "Shamshera",
    "Jug Jug Jeeyo",
    "Samrat Prithviraj",
    "Bhool Bhulaiyaa 2",
    "Tadap",
    "Antim",
    "Bachchhan Paandey",
    "Heropanti 2",
    "Atrangi Re",
    "Runway 34",
    "Shiddat",
    "Jersey",
    "Krrish 3",
    "Shershaah",
    "Sooryavanshi",
  ];

  res.end("Movies Names:" + JSON.stringify(movies));
}

const server = http.createServer(ABC);
server.listen(5000);
