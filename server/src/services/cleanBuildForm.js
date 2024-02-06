const cleanBuildForm = (buildFormData) => {
    Object.keys(buildFormData).forEach((formSection) => {
        if (buildFormData[formSection].trim() === "") {
            delete buildFormData[formSection]
        }
    })
    return buildFormData
}

export default cleanBuildForm