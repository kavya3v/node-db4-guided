exports.up = async function(knex) {
	await knex.schema.createTable("zoos", (table) => {
		table.increments("id")
		table.text("name").notNull()
		table.text("address").notNull().unique()
	})

	await knex.schema.createTable("species", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
	})

	await knex.schema.createTable("animals", (table) => {
		table.increments("id")
		table.text("name").notNull()
		// define this column as a foreign key
		table.integer("species_id")
			// .notNull()
			.references("id")
			.inTable("species")
			.onDelete("SET NULL") 
	})

	await knex.schema.createTable("zoos_animals", (table) => {
		table.integer("zoo_id")
			.notNull()
			.references("id")
			.inTable("zoos")
			.onDelete("CASCADE") // what happens when the row we're pointing at gets deleted?
			.onUpdate("CASCADE") // what happens when the PK changes?
		table.integer("animal_id")
			.notNull()
			.references("id")
			.inTable("animals")
			.onDelete("CASCADE")
		table.date("arrival").notNull().defaultTo(knex.raw("current_timestamp"))
		table.date("departure")
		// since this table doesn't need an ID column, we can make the primary key
		// a combination of two columsn rather than a single column.
		table.primary(["zoo_id", "animal_id"])
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("zoos_animals")
	await knex.schema.dropTableIfExists("animals")
	await knex.schema.dropTableIfExists("species")
	await knex.schema.dropTableIfExists("zoos")
}
