const db = require("../data/config")

function find() {
	return db("zoos")
}

function findById(id) {
	return db("zoos")
		.where("id", id)
		.first()
}

function findAnimals(zooID) {
	return db("zoos_animals as za")
		.innerJoin("zoos as z", "za.zoo_id", "z.id")
		.innerJoin("animals as a", "za.animal_id", "a.id")
		.leftJoin("species as s", "a.species_id", "s.id")
		.where("z.id", zooID)
		.select(
			"a.id",
			"a.name",
			"s.name as species_name",
			"za.arrival",
			"za.departure",
		)
}

module.exports = {
	find,
	findById,
	findAnimals,
}