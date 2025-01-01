import { setTypeId } from "./transientState.js"

const handleTypeChange = (changeEvent) => {
    if (changeEvent.target.name === "type"){
        const convertToNumber = parseInt(changeEvent.target.value)
        setTypeId(convertToNumber)
    }
}

export const typeOptions = async() => {
    document.addEventListener("change",handleTypeChange)
    const getData = await fetch("http://localhost:8088/types")
    const types= await getData.json()

    let TypeHTML = ""
    for (const type of types) {
        TypeHTML += `<div><input type='radio' name='type' value='${type.id}'/>${type.type}</div>`
    }
    return TypeHTML
}