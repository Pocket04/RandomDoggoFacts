const BASE_URL= "https://dogapi.dog/api/v2/facts"

async function fetchRandomFact(){
    const response = await fetch(`${BASE_URL}`, {
        headers:{
            'Content-type': 'application/json'

        }
    })
    const data = await response.json();
    console.log("data: ", data)
    return (data.data);
}
export default fetchRandomFact;
