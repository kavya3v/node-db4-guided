
exports.up = async function(knex) {
  await knex.schema.createTable("zoos",(table)=>{
    table.increments("id")
    table.text("name").notNullable()
    table.text("address").notNullable().unique();
  })

  await knex.schema.createTable("species",(table)=>{
    table.increments("id")
    table.text("name").notNull().unique()
   })

  await knex.schema.createTable("animals",(table)=>{
      table.increments("id")
      table.text("name").notNull()
      //creates a foreign key
      table.integer("species_id")
      .references("id").inTable("species")
      //when the primary key is deleted set this column to NULL
      .onDelete("SET NULL")
      .onUpdate("CASCADE")

  }) 
  
  await knex.schema.createTable("zoos_animals",(table)=>{
      table.integer("zoo_id").notNull()
      .references("id").inTable("zoos")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      table.integer("animal_id").notNull()
      .references("id").inTable("animals")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      //knex.raw  will pass current timestamp without quotes - its internal sql variable
      table.date("arrival").notNull().defaultTo(knex.raw("current_timestamp"))
      table.date("departure")
      //primary key being combination of two column. note this table doesnt need a separate ID column as primary key.
      table.primary(['zoo_id','animal_id'])
  })
}

exports.down = async function(knex) {
    //table are dropped in reverse order that they are created
    //this is to prevent dropping table that has foreign key reference
  await knex.schema.dropTableIfExists("zoos_animals");
  await knex.schema.dropTableIfExists("animals");
  await knex.schema.dropTableIfExists("species");
  await knex.schema.dropTableIfExists("zoos");
 
}
