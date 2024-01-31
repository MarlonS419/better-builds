const Model = require("./Model.js")

class Build extends Model {
    static get tableName() {
        return "builds"
    }
    
    static get jsonSchema() {
        return {
            type: "object",
            properties: {
                processor: { type: "string" },
                graphics_card: { type: "string" },
                ram: { type: ["string", "integer"] },
                motherboard: { type: "string" },
                case: { type: "string" },
                cooling_system: { type: "string" },
                storage_type: { type: "string" },
                cooling_system_type: { type: "string" },
                storage_amount: { type: ["string", "integer"] }
            }
        }
    }
}
module.exports = Build