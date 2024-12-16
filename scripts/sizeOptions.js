import { setCaretId } from "./transientState.js"

export const sizeOptions = async() => {
    document.addEventListener("change", handleSizeChange)
    const getData = await fetch("http://localhost:8088/sizes")
    const sizes = await getData.json()

    let sizeOptionsHTML = ""
    for (const size of sizes) {
        sizeOptionsHTML += `<div><input type='radio' name='size' value='${size.id}'/>${size.carets}</div>`
    }
    return sizeOptionsHTML
}

const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size"){
        const convertToNumber = parseInt(changeEvent.target.value)
        setCaretId(convertToNumber)
    }
}