const BASE_URL= "https://dogapi.dog/api/v2/facts"

async function fetchBreedData(){
    const response = await fetch(`${BASE_URL}`, {
        headers:{
            'Authorization': API_KEY,
            'Content-type': 'application/json'

        }
    })
    const data = await response.json();
    console.log("data: ", data)
    return (data.data);
}
export default fetchBreedData;

