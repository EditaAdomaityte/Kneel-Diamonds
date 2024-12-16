import { setStyleId } from "./transientState.js"


export const styleOptions = async() => {
    document.addEventListener("change",handleStyleChange)
    const getData = await fetch("http://localhost:8088/styles")
    const styles= await getData.json()

    let styleOptionsHTML = ""
    for (const style of styles) {
        styleOptionsHTML += `<div><input type='radio' name='style' value='${style.id}'/>${style.style}</div>`
    }
    return styleOptionsHTML
}

const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style"){
        const convertToNumber = parseInt(changeEvent.target.value)
        setStyleId(convertToNumber)
    }
}