/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("reviews", table => {
        table.bigIncrements("id")
        table.bigInteger("userId").notNullable().index().unsigned().references("users.id")
        table.bigInteger("buildId").notNullable().index().unsigned().references("builds.id")
        table.integer("rating").notNullable()
        table.text("comment")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
       })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("reviews")
}
