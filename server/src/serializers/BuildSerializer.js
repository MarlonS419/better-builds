class BuildSerializer {
    static getBuildDetails(buildObject) {
        const allowedAttributes = ["case", "processor", "coolingSystem", "coolingSystemType", "graphicsCard", "motherboard", "ram", "storageType", "storageAmount", "title"]
        let serializedBuildObject = {}

        for (const attribute of allowedAttributes) {
            serializedBuildObject[attribute] = buildObject[attribute]
        }
        return serializedBuildObject
    }
}

export default BuildSerializer