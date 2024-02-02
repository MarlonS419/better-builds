const Model = require("./Model")

class Review extends Model {
    static get tableName() {
        return "reviews"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["rating"],
            properties: {
                rating: { type: ["string", "integer"] },
                comment: { type: "string" }
            }
        }
    }
    static get relationMappings() {
        const { User, Build } = require("./index")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "reviews.userId",
                    to: "users.id"
                }
            },
            build: {
                relation: Model.BelongsToOneRelation,
                modelClass: Build,
                join: {
                    from: "reviews.buildId",
                    to: "builds.id"
                }
            }
        }
    }
}
module.exports = Review