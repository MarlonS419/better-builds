/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
   return knex.schema.createTable("builds", table => {
    table.bigIncrements("id")
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id")
    table.string("title").notNullable()
    table.string("processor")
    table.string("graphicsCard")
    table.integer("ram")
    table.string("motherboard")
    table.integer("storageAmount")
    table.string("storageType")
    table.string("coolingSystem")
    table.string("coolingSystemType")
    table.string("case")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
   })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("builds")
}
