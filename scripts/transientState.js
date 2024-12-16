//setting transient state initial values:

const transientState = {
    "metalId": 0,
    "caretId": 0,
    "styleId": 0
}

export const setMetalId = (chosenMetal) =>{
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setCaretId = (chosenCaret) =>{
    transientState.caretId = chosenCaret
    console.log(transientState)
}

export const setStyleId = (chosenStyle) =>{
    transientState.styleId = chosenStyle
    console.log(transientState)
}


//transient state to permanent state
export const saveOrderEntry =  async () =>{
    const postOptions = {
        method: "POST",
        header: {
            "Content-Type": "application.json"},
        body: JSON.stringify (transientState) //<- converting js to a string 
        }
    const response = await fetch ("http://localhost:8088/orders", postOptions)
    //building custom event where we create new entry to JSON:
    const customEvent = new CustomEvent ("newOrderCreated")
    document.dispatchEvent(customEvent)

    }

