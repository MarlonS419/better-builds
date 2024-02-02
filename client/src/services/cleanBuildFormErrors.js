const cleanBuildFormErrors = (formErrors) => {
    console.log("Form Errors:", formErrors)
    const cleanedServerErrors = {}
    Object.keys(formErrors).forEach((fieldError) => {
        cleanedServerErrors[fieldError] = "is required!"
    })
    return cleanedServerErrors
}

export default cleanBuildFormErrors