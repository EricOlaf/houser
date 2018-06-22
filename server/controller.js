const getHouses = (req, res, next) => {
  const db = req.app.get("db");
  db.getHouses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send({ getHousesError: err }));
};

const addHouse = (req, res, next) => {
  const { name, address, city, state, zip } = req.body;
  const db = req.app.get("db");

  db.addHouse([name, address, city, state, zip])
    .then(house => res.status(200).send(house))
    .catch(err => res.status(500).send({ addHouseError: "Bad Request" }));
};

module.exports = {
  getHouses,
  addHouse
};
