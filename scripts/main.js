import { Orders } from "./generatedList.js"
import { metalOptions } from "./metalOptions.js"
import { saveOrders } from "./savedOrders.js"
import { sizeOptions } from "./sizeOptions.js"
import { styleOptions } from "./stylesOptions.js"



const container = document.querySelector("#container")

const render = async() => {
    const metalHTML = await metalOptions()
    const sizeHTML = await  sizeOptions()
    const styleHTML = await styleOptions()
    const buttonHTML = saveOrders()
    const generatedList =await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleHTML}
            </section>
        </article>

        <article class="order">
        ${buttonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${generatedList}

        </article>
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})


// const putItOnDOM = async() => {
    

//     container.innerHTML= `${metalHTML}
//                           ${sizeHTML}
//                           ${styleHTML}
//                           ${buttonHTML}
//                           `



// }

// putItOnDOM()