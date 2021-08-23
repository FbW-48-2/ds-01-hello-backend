const getData = async () => {
    try {
        const resp = await fetch('/json')
        const myData = await resp.json()
        return myData
    }
    catch (err) {
        return err;
    }
}

export { getData }