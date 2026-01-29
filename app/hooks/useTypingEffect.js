import { useEffect,useState } from "react";


export default function useTypingEffect (text,speed =120){
    const words = text.split("");
    const [displayed, setDisplayed] = useState("");
    const [index,setIndex] = useState(0);

    useEffect(() =>{

        if(index<words.length){
            const timeout = setTimeout(() =>{

                setDisplayed((prev) => prev + words[index] + "");
                setIndex(index +1);

            },speed);

            return () => clearTimeout(timeout);
            
        }

    },[index,words,speed]);
    
    return displayed;
}