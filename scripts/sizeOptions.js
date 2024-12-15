
export const sizeOptions = async() => {
    const getData = await fetch("http://localhost:8088/sizes")
    const sizes = await getData.json()

    let sizeOptionsHTML = "<h2>  Caret Size Options:</h2>"
    for (const size of sizes) {
        sizeOptionsHTML += `<input type='radio' name='size' value='${size.id}'/>${size.carets}`
    }
    return sizeOptionsHTML
}