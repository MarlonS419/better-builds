const cleanBuildForm = (buildFormData) => {
    const cleanedUpFormInputs = {}
    Object.keys(buildFormData).forEach((formSection) => {
        if(buildFormData[formSection] === ""){
            delete buildFormData[formSection]
        }
    })
    return buildFormData
}

export default cleanBuildForm