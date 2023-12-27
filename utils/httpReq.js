const BASE_URL = "https://fakestoreapi.com"

const postData = async (path, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers:{ "content-Type": "application/json" }
        })
        const json = await response.json();
        return json;
    } catch (error) {
        alert('error occurred')
    }
}

const getData = async (path) => {
    try{
        const response = await fetch(`${BASE_URL}/${path}`)
        const result =  await response.json()
        return result
    } catch (error) {
        alert('error occurred')
    }
}

export { postData, getData }