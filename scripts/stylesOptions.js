

export const styleOptions = async() => {
    const getData = await fetch("http://localhost:8088/styles")
    const styles= await getData.json()

    let styleOptionsHTML = "<h2> style Options:</h2>"
    for (const style of styles) {
        styleOptionsHTML += `<input type='radio' name='style' value='${style.id}'/>${style.style}`
    }
    return styleOptionsHTML
}