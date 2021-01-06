exports.seed = async function(knex) {
	await knex("zoos_animals").insert([
		{ zoo_id: 1, animal_id: 1, arrival: "2018-01-05" },
		{ zoo_id: 1, animal_id: 2, arrival: "2018-01-16" },
		{ zoo_id: 1, animal_id: 3, arrival: "2018-02-01", departure: "2019-12-30" },
		{ zoo_id: 1, animal_id: 4, arrival: "2018-05-17", departure: "2020-03-04" },
		{ zoo_id: 1, animal_id: 5, arrival: "2018-06-06", departure: "2019-04-15" },
		{ zoo_id: 1, animal_id: 8, arrival: "2019-02-07", departure: "2019-02-28" },
		{ zoo_id: 2, animal_id: 3, arrival: "2019-12-31" },
		{ zoo_id: 2, animal_id: 5, arrival: "2019-04-16" },
		{ zoo_id: 2, animal_id: 6, arrival: "2019-04-16" },
		{ zoo_id: 2, animal_id: 7, arrival: "2019-05-01" },
		{ zoo_id: 2, animal_id: 8, arrival: "2019-02-28" },
		{ zoo_id: 2, animal_id: 9, arrival: "2020-01-16" },
		{ zoo_id: 2, animal_id: 10, arrival: "2020-01-16" },
		{ zoo_id: 2, animal_id: 11, arrival: "2020-01-16" },
	])
}
