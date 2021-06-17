import {useState} from 'react'
import axios from "axios";
import uuid from "uuid";


const useFlip = ()=>{
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp,flipCard]
}

const useAxios = (url)=>{

    const [cards, setCards] = useState([]);

    let addCard = async (e) => {
        if(e.target){
            const response = await axios.get(url);
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        }else{
            const response = await axios.get(`${url}/${e}`);
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        }
    };
    
    return [cards,addCard]
}



// const [pokemon, setPokemon] = useState([]);
// const addPokemon = async name => {
//   const response = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${name}/`
//   );
//   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
// };


export {useFlip,useAxios} 

