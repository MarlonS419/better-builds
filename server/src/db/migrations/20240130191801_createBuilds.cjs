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
    table.string("processor")
    table.string("graphics_card")
    table.string("ram")
    table.string("motherboard")
    table.string("case")
    table.string("cooling_system")
    table.string("storage_type")
    table.string("cooling_system_type")
    table.integer("storage_amount")
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
