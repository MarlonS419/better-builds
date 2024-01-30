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
    table.string("graphics-card")
    table.string("ram")
    table.string("motherboard")
    table.string("case")
    table.string("cooling-system")
    table.string("storage-type")
    table.string("cooling-system-type")
    table.integer("storage-amount")
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
