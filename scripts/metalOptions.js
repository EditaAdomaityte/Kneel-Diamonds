import { setMetalId } from "./transientState.js"


export const metalOptions = async() => {
    document.addEventListener("change",handleMetalChange)
    const getData = await fetch("http://localhost:8088/metals")
    const metals= await getData.json()

    //let metalOptionsHTML = "<h2> Metal Options:</h2>"
    // for (const metal of metals) {
    //     metalOptionsHTML += `<div><input type='radio' name='metal' value='${metal.id}'/>${metal.metal}</div>`
    // }
    // return metalOptionsHTML
    let optionsHTML = ""
 // Use map() to generate new array of strings
// or using map:
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
            </div>`
    }
)

// This function needs to return a single string, not an array of strings
        optionsHTML += divStringArray.join("")

return optionsHTML
}

const handleMetalChange = (changeEvent) => {
    if (changeEvent.target.name === "metal"){
        const convertToNumber = parseInt(changeEvent.target.value)
        setMetalId(convertToNumber)
    }
}