import {useEffect, useState} from "react";
import fetchRandomFact from "../fetching/api.js";
import '../styles/breedsList.css'


function RandomFactDisplay(){
    const [dogFact, setDogFact] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                const loadBreedData = await fetchRandomFact();
                setDogFact(loadBreedData[0]);
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
            const loadNewFact = await fetchRandomFact();
            setDogFact(loadNewFact[0]);
        }catch (err){
            console.log(err)
            setError(err)
        }finally {
            setLoading(false)
        }
    }

    console.log("dog", dogFact)

    if (error){
        return <div>{error}</div>
    }
    if (loading){
        return <div>Loading...</div>
    }

    return(
        <div className="dog-fact-container">
            <div >{dogFact.attributes.body}</div>
            <button onClick={onButtonClick}>Generate new doggo fact.</button>
        </div>
    )

}
export default RandomFactDisplay;
