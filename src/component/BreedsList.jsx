import {useEffect, useState} from "react";
import fetchBreedData from "../fetching/api.js";
import '../styles/breedsList.css'


function BreedsList(){
    const [dogBreeds, setDogBreeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                const loadBreedData = await fetchBreedData();
                console.log("loadbreeddata", loadBreedData);
                setDogBreeds(loadBreedData);
            }catch (err){
                console.log(err)
                setError(err)
            }finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    async function onButtonClick(){
        try{
            const loadBreedData = await fetchBreedData();
            console.log("loadbreeddata", loadBreedData);
            setDogBreeds(loadBreedData);
        }catch (err){
            console.log(err)
            setError(err)
        }finally {
            setLoading(false)
        }
    }

    console.log("dogbreed: ", dogBreeds)

    if (error){
        return <div>{error}</div>
    }
    if (loading){
        return <div>Loading...</div>
    }

    return(
        <div className="dog-fact-container">
            {dogBreeds.map((breed, index) =>
            <div key={index}>{breed.attributes.body}</div>
            )}
            <button onClick={onButtonClick}>Generate new doggo fact.</button>
        </div>
    )

}
export default BreedsList;
