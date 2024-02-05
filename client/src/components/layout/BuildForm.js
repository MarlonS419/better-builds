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
        newBuildID: 0
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
            { "title": "Title" },
            { "processor": "CPU" },
            { "graphicsCard": "GPU" },
            { "ram": "RAM" },
            { "motherboard": "Motherboard" },
            { "storageAmount": "Storage Amount" },
            { "storageType": "Storage Type" },
            { "coolingSystem": "Cooling System" },
            { "coolingSystemType": "Cooling System Type" },
            { "case": "Case" }
        ]

        const numberFields = [
            { "ram": "RAM" },
            { "storageAmount": "Storage Amount" }
        ]

        let errors = {}
        for (const fieldObject of requiredField) {
            for(const key in fieldObject){
                if(newBuild[key].trim() === ""){
                    errors = { ...errors, [fieldObject[key]]: "is required!"}
                }
            }
        }

        for (const fieldObject of numberFields) {
            for(const key in fieldObject){
                if(!parseInt(newBuild[key])){
                    errors = { ...errors, [fieldObject[key]]: "is required to be a number!"}
                }
            }
        }
        
        if(!_.isEmpty(errors)){
            setBuildFormErrors(errors)
            return false
        } else {
            return true
        }
    }

    const submitBuild = async (event) => {
        event.preventDefault()
        if (validateFormOnFrontEnd()) {
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
                }
                else {
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

    if (redirect.redirectState) {
        const buildPage = `/builds/${redirect.newBuildID}`
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