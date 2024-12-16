import { saveOrderEntry } from "./transientState.js"



export const saveOrders = () => {
    document.addEventListener("click",handleOrderClick)

    return "<button id='savedOrder'>Place Order</button>"
}

const handleOrderClick = (clickEvent) =>{
    if (clickEvent.target.id === "savedOrder"){
        saveOrderEntry()
    }
}