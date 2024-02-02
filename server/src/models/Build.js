const Model = require("./Model.js")

class Build extends Model {
    static get tableName() {
        return "builds"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [
                "title",
                "processor",
                "graphicsCard",
                "ram",
                "motherboard",
                "case",
                "coolingSystem",
                "storageType",
                "coolingSystemType",
                "storageAmount"
            ],
            properties: {
                title: { type: "string" },
                processor: { type: "string" },
                graphicsCard: { type: "string" },
                ram: { type: ["integer", "string"] },
                motherboard: { type: "string" },
                storageAmount: { type: ["integer", "string"] },
                storageType: { type: "string" },
                coolingSystem: { type: "string" },
                coolingSystemType: { type: "string" },
                case: { type: "string" }
            }
        }
    }

    static get relationMappings(){
        const { User } = require("./index")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join:{
                    from: "builds.userId",
                    to: "users.id"
                }
            }
        }
    }
}
module.exports = Build