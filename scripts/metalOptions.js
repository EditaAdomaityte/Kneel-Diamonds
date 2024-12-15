

export const metalOptions = async() => {
    const getData = await fetch("http://localhost:8088/metals")
    const metals= await getData.json()

    let metalOptionsHTML = "<h2> Metal Options:</h2>"
    for (const metal of metals) {
        metalOptionsHTML += `<input type='radio' name='metal' value='${metal.id}'/>${metal.metal}`
    }
    return metalOptionsHTML
}

export