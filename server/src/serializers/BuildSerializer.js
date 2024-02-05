import ReviewSerializer from "./ReviewSerializer.js"

class BuildSerializer {
    static async getBuildDetails(buildObject) {
        const allowedAttributes = ["case", "processor", "coolingSystem", "coolingSystemType", "graphicsCard", "motherboard", "ram", "storageType", "storageAmount", "title"]
        let serializedBuildObject = {}
        const relatedReviews = await buildObject.$relatedQuery("reviews")
        
        for (const attribute of allowedAttributes) {
            serializedBuildObject[attribute] = buildObject[attribute]
        }
        serializedBuildObject.reviews = ReviewSerializer.getReviewDetails(relatedReviews)
        return serializedBuildObject
    }
}

export default BuildSerializer