import React, { useState, useEffect }from  "react"
import getCurrentUser from "../../services/getCurrentUser"
import ErrorList from "./ErrorList"
import translateServerErrors from "../../services/translateServerErrors"

const BuildForm = (props) => {
    const [newBuild, setNewBuild] = useState({
        title: "",
        processor:"",
        graphicsCard:"",
        ram:"",
        motherboard:"",
        storageAmount:"",
        storageType:"",
        coolingSystem:"",
        coolingSystemType:"",
        case:"",
    })
 const [errors, setErrors] = useState([])
    const handleFormData = (event) =>{
        setNewBuild(
            {...newBuild,
            [event.currentTarget.name]: event.currentTarget.value}
        )
    }

    const submitBuild = async (event) =>{
        event.preventDefault()
        try {
        const postBuild = await fetch ("/api/v1/builds/new", {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(newBuild)
        })
        if (!response.ok) {
          if(response.status === 422) {
            const errorBody = await response.json()
            const newErrors = translateServerErrors(errorBody.errors)
            return setErrors(newErrors)
          } else {
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw(error)
          }
        } else {
          const newBuildData = await response.json()
          const submittedBuild = newBuild.builds.concat(body)
          setNewBuild({...newBuild, builds: submittedBuild})
        }
      } catch(error) {
        console.error(`Error in fetch: ${error.message}`)
      }
    }
    
    return(
        <>
            <h1>Submit your Build!</h1>
            <ErrorList errors={errors} />
            <form onSubmit={submitBuild}>
                <label htmlFor="title">Title:
                    <input name="title" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="processor">Processor:
                    <input name="processor" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="graphicsCard">Graphics Card:
                    <input name="graphicsCard" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="ram">Ram:
                    <input name="ram" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="motherboard">Motherboard:
                    <input name="motherboard" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="storageAmount">Storage Amount:
                    <input name="storageAmount" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="storageType">Storage Type:
                <label htmlFor="ssd">
                        SSD: <input name="storageType" type="radio" value="SSD" onChange={handleFormData}/>
                    </label>
                    <label htmlFor="HDD">
                        HDD: <input name="storageType" type="radio" value="HDD" onChange={handleFormData}/>
                    </label>
                </label>
                <label htmlFor="coolingSystem">Cooling System:
                    <input name="coolingSystem" type="text" onChange={handleFormData}/>
                </label>
                <label htmlFor="coolingSystemType">Cooling System Type:
                    <label htmlFor="fan">
                        Fan: <input name="coolingSystemType" type="radio" value="Fan" onChange={handleFormData}/>
                    </label>
                    <label htmlFor="water">
                        Water: <input name="coolingSystemType" type="radio" value="Water" onChange={handleFormData}/>
                    </label>
                </label>
                <label htmlFor="case">Case:
                    <input name="case" type="text" onChange={handleFormData}/>
                </label>
                <input type="submit" value="Submit Build!"/>
            </form>
        </>
    )
} 

export default BuildForm