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

    const [redirect, setRedirect] = useState(false)

    const [newBuildID, setBuildID] = useState(0)

    const handleFormData = (event) => {
        setNewBuild(
            {
                ...newBuild,
                [event.currentTarget.name]: event.currentTarget.value
            }
        )
    }

    const validateFormOnFrontEnd = () => {
        let errors = {}
        if (newBuild.title.trim() === "") {
            errors = { ...errors, "Title": "is required!" }
        }
        if (newBuild.processor.trim() === "") {
            errors = { ...errors, "CPU": "is required!" }
        }
        if (newBuild.graphicsCard.trim() === "") {
            errors = { ...errors, "GPU": "is required!" }
        }
        if (newBuild.ram.trim() === "") {
            errors = { ...errors, "RAM": "is required!" }
        } else if (!parseInt(newBuild.ram)) {
            errors = { ...errors, "RAM": "needs to be a number!" }
        }
        if (newBuild.motherboard.trim() === "") {
            errors = { ...errors, "Motherboard": "is required!" }
        }
        if (newBuild.storageAmount.trim() === "") {
            errors = { ...errors, "Storage Amount": "is required!" }
        } else if (!parseInt(newBuild.storageAmount)) {
            errors = { ...errors, "Storage Amount": "needs to be a number!" }
        }
        if (newBuild.storageType.trim() === "") {
            errors = { ...errors, "Storage Type": "is required!" }
        }
        if (newBuild.coolingSystem.trim() === "") {
            errors = { ...errors, "Cooling System": "is required!" }
        }
        if (newBuild.coolingSystemType.trim() === "") {
            errors = { ...errors, "Cooling System Type": "is required!" }
        }
        if (newBuild.case.trim() === "") {
            errors = { ...errors, "Case": "is required!" }
        }
        if(!_.isEmpty(errors)){
            setBuildFormErrors(errors)
            return false
        }
        else{
            return true
        }
    }

    const submitBuild = async (event) => {
        event.preventDefault()
        if(validateFormOnFrontEnd()){
            try {
                const newBuildFormResponse = await fetch("/api/v1/builds/new", {
                    method: "POST",
                    headers: new Headers({ "Content-Type": "application/json" }),
                    body: JSON.stringify(newBuild)
                })
                if (!newBuildFormResponse.ok) {
                    if (newBuildFormResponse.status === 422) {
                        const serverData = await newBuildFormResponse.json()
                        const serverErrors = translateServerErrors(serverData.errors)
                        return setBuildFormErrors(serverErrors)
                    }
                    else {
                        const errorMessage = `${newBuildFormResponse.status} - ${newBuildFormResponse.statusText}`
                        const error = new Error(errorMessage)
                        throw (error)
                    }
                }
                else {
                    const parsedResponse = await newBuildFormResponse.json()
                    setBuildID(parseInt(parsedResponse.newBuild.id))
                    setRedirect(true)
                }
            } catch (error) {
                console.error(`Error in POST: ${error}`)
            }
        }
    }

    if (redirect) {
        const buildPage = `/builds/${newBuildID}`
        return <Redirect push to={buildPage} />
    }

    return (
        <>
            <h1>Submit your Build!</h1>
            <form onSubmit={submitBuild}>
                <label htmlFor="title">Title:
                    <input name="title" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="processor">Processor:
                    <input name="processor" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="graphicsCard">Graphics Card:
                    <input name="graphicsCard" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="ram">Ram:
                    <input name="ram" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="motherboard">Motherboard:
                    <input name="motherboard" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="storageAmount">Storage Amount:
                    <input name="storageAmount" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="storageType">Storage Type:
                    <label htmlFor="ssd">
                        SSD: <input name="storageType" type="radio" value="SSD" onChange={handleFormData} />
                    </label>
                    <label htmlFor="HDD">
                        HDD: <input name="storageType" type="radio" value="HDD" onChange={handleFormData} />
                    </label>
                </label>
                <label htmlFor="coolingSystem">Cooling System:
                    <input name="coolingSystem" type="text" onChange={handleFormData} />
                </label>
                <label htmlFor="coolingSystemType">Cooling System Type:
                    <label htmlFor="fan">
                        Fan: <input name="coolingSystemType" type="radio" value="Fan" onChange={handleFormData} />
                    </label>
                    <label htmlFor="water">
                        Water: <input name="coolingSystemType" type="radio" value="Water" onChange={handleFormData} />
                    </label>
                </label>
                <label htmlFor="case">Case:
                    <input name="case" type="text" onChange={handleFormData} />
                </label>
                <input type="submit" value="Submit Build!" />
            </form>
            <ErrorList errors={buildFormErrors} />
        </>
    )
}

export default BuildForm