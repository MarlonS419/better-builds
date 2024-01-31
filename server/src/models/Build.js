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
                ram: { type: ["string", "integer"] },
                motherboard: { type: "string" },
                storageAmount: { type: ["string", "integer"] },
                storageType: { type: "string" },
                coolingSystem: { type: "string" },
                coolingSystemType: { type: "string" },
                case: { type: "string" }
            }
        }
    }
}
module.exports = Build