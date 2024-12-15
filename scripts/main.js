import { metalOptions } from "./metalOptions.js"
import { sizeOptions } from "./sizeOptions.js"
import { styleOptions } from "./stylesOptions.js"



const container = document.querySelector("#container")

const putItOnDOM = async() => {
    const metalHTML = await metalOptions()
    const sizeHTML = await  sizeOptions()
    const styleHTML = await styleOptions()

    container.innerHTML= `${metalHTML},
                          ${sizeHTML},
                          ${styleHTML}`



}

putItOnDOM()