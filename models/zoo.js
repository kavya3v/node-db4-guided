const db = require("../data/config")

function find() {
	return db("zoos")
}

function findById(id) {
	return db("zoos")
		.where("id", id)
		.first()
}

async function findAnimals(zooID){
	// const animals= await db("animals as a")
	// 					.join("zoos_animals as za", 'za.animal_id', 'a.id')
	// 					.where("za.zoo_id",zooID)
	// 					.select("a.*")
		const animals = await db("zoos_animals as za")
						.join("zoos as z","z.id","za.zoo_id")
						.join("animals as a","a.id","za.animal_id")
						.join("species as s", "s.id","a.species_id")
						.where("za.zoo_id",zooID)
						.select("a.id","a.name as Animal Name",
								"s.name as Species Name",
								"za.arrival",
								"za.departure")
		return animals;
}

module.exports = {
	find,
	findById,
	findAnimals,
}