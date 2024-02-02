const cleanBuildForm = (buildFormData) => {
    Object.keys(buildFormData).forEach((formSection) => {
        if (formSection === "ram" || formSection === "storageAmount") {
            console.log(`found ${formSection} - ${buildFormData[formSection]}`)
        } else {
            if (buildFormData[formSection].trim() === "") {
                delete buildFormData[formSection]
            }
        }
    })
    return buildFormData
}

export default cleanBuildForm