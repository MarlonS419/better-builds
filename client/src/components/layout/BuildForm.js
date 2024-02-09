import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import ErrorList from "./ErrorList"
import translateServerErrors from "../../services/translateServerErrors"
import _ from "lodash"

const BuildForm = (props) => {

    const [newBuild, setNewBuild] = useState({
        title: "",
        processor: "",
        graphicsCard: "",
        ram: "",
        motherboard: "",
        storageAmount: "",
        storageType: "",
        coolingSystem: "",
        coolingSystemType: "",
        case: "",
    })

    const [buildFormErrors, setBuildFormErrors] = useState({})

    const [redirect, setRedirect] = useState({
        redirectState: false,
        newBuildID: undefined
    })

    const handleFormData = (event) => {
        setNewBuild({
            ...newBuild,
            [event.currentTarget.name]: event.currentTarget.value
        }
        )
    }

    const validateFormOnFrontEnd = () => {
        const requiredField = [
            { title: "Title" },
            { processor: "CPU" },
            { graphicsCard: "GPU" },
            { ram: "RAM" },
            { motherboard: "Motherboard" },
            { storageAmount: "Storage Amount" },
            { storageType: "Storage Type" },
            { coolingSystem: "Cooling System" },
            { coolingSystemType: "Cooling System Type" },
            { case: "Case" }
        ]

        const numberFields = [
            { ram: "RAM" },
            { storageAmount: "Storage Amount" }
        ]

        let errors = {}
        for (const fieldObject of requiredField) {
            for (const key in fieldObject) {
                if (newBuild[key].trim() === "") {
                    errors = { ...errors, [fieldObject[key]]: "is required!" }
                }
            }
        }

        for (const fieldObject of numberFields) {
            for (const key in fieldObject) {
                if (!parseInt(newBuild[key])) {
                    errors = { ...errors, [fieldObject[key]]: "is required to be a number!" }
                }
            }
        }

        if (!_.isEmpty(errors)) {
            setBuildFormErrors(errors)
            return false
        } else {
            return true
        }
    }

    const submitBuild = async (event) => {
        event.preventDefault()
        if (validateFormOnFrontEnd()) {
            if (props.editingBuild) {
                try {
                    const newBuildFormResponse = await fetch("/api/v1/builds", {
                        method: "PATCH",
                        headers: new Headers({ "Content-Type": "application/json" }),
                        body: JSON.stringify(newBuild)
                    })
                    const parsedEditedBuild = newBuildFormResponse.editedBuild
                    console.log(parsedEditedBuild)
                } catch ( error ) {
                    console.error("Error in Patch Request: ", error)
                }
            } else {
                try {
                    const newBuildFormResponse = await fetch("/api/v1/builds", {
                        method: "POST",
                        headers: new Headers({ "Content-Type": "application/json" }),
                        body: JSON.stringify(newBuild)
                    })
                    if (!newBuildFormResponse.ok) {
                        if (newBuildFormResponse.status === 422) {
                            const serverData = await newBuildFormResponse.json()
                            const serverErrors = translateServerErrors(serverData.errors)
                            return setBuildFormErrors(serverErrors)
                        } else {
                            const errorMessage = `${newBuildFormResponse.status} - ${newBuildFormResponse.statusText}`
                            const error = new Error(errorMessage)
                            throw (error)
                        }
                    } else {
                        const parsedResponse = await newBuildFormResponse.json()
                        const newBuildID = parsedResponse.newBuild.id
                        const newRedirectState = {
                            redirectState: true,
                            newBuildID: newBuildID
                        }
                        setRedirect(newRedirectState)
                    }
                } catch (error) {
                    console.error(`Error in POST: ${error}`)
                }
            }
        }
    }

    if (redirect.redirectState) {
        const buildPage = `/builds/${redirect.newBuildID}`
        return <Redirect push to={buildPage} />
    }


    const getFormData = async () => {
        const buildID = props.computedMatch.params.id
        // console.log("Form ID:", props.computedMatch.params.id)
        try {
            const fetchedBuildData = await fetch(`/api/v1/builds/${buildID}`)
            const parsedBuildData = await fetchedBuildData.json()
            const buildData = parsedBuildData.build
            console.log(buildData)
            setNewBuild(buildData)
        } catch (error) {
            console.error("Error in the fetch: ", error)
        }
    }

    let buildFormButton
    if (props.editingBuild) {
        buildFormButton = <input type="submit" value="Edit Build!" id="submit-build" />
    } else {
        buildFormButton = <input type="submit" value="Submit Build!" id="submit-build" />
    }
    useEffect(() => {
        getFormData()
    }, [])

    console.log("newBuild", newBuild)
    return (
        <>
            <h1>Submit your Build!</h1>
            <form onSubmit={submitBuild}>
                <div className="new-build-form">
                    <label htmlFor="title" className="form-input-label">Title:
                        <input name="title" type="text" onChange={handleFormData} value={newBuild.title} />
                    </label>
                    <label htmlFor="processor" className="form-input-label">Processor:
                        <input name="processor" type="text" onChange={handleFormData} value={newBuild.processor} />
                    </label>
                    <label htmlFor="graphicsCard" className="form-input-label">Graphics Card:
                        <input name="graphicsCard" type="text" onChange={handleFormData} value={newBuild.graphicsCard} />
                    </label>
                    <label htmlFor="ram" className="form-input-label">Ram:
                        <input name="ram" type="text" onChange={handleFormData} value={newBuild.ram} />
                    </label>
                    <label htmlFor="motherboard" className="form-input-label">Motherboard:
                        <input name="motherboard" type="text" onChange={handleFormData} value={newBuild.motherboard} />
                    </label>
                    <label htmlFor="storageAmount" className="form-input-label">Storage Amount:
                        <input name="storageAmount" type="text" onChange={handleFormData} value={newBuild.storageAmount} />
                    </label>
                    <label htmlFor="storageType" className="form-input-label">Storage Type:
                        <label htmlFor="ssd">
                            SSD: <input name="storageType" type="radio" value="SSD" onChange={handleFormData} />
                        </label>
                        <label htmlFor="HDD">
                            HDD: <input name="storageType" type="radio" value="HDD" onChange={handleFormData} />
                        </label>
                    </label>
                    <label htmlFor="coolingSystem" className="form-input-label">Cooling System:
                        <input name="coolingSystem" type="text" onChange={handleFormData} value={newBuild.coolingSystem} />
                    </label>
                    <label htmlFor="coolingSystemType" className="form-input-label">Cooling System Type:
                        <label htmlFor="fan">
                            Fan: <input name="coolingSystemType" type="radio" value="Fan" onChange={handleFormData} />
                        </label>
                        <label htmlFor="water">
                            Water: <input name="coolingSystemType" type="radio" value="Water" onChange={handleFormData} />
                        </label>
                    </label>
                    <label htmlFor="case" className="form-input-label">Case:
                        <input name="case" type="text" onChange={handleFormData} value={newBuild.case} />
                    </label>
                    {buildFormButton}
                </div>
            </form>
            <ErrorList errors={buildFormErrors} />
        </>
    )
}

export default BuildForm