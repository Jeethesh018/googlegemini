import { createContext, useState } from "react";
import run from "../config/gemini";


export const context = createContext();

const ContextProvider = (props) =>{

 const [input,setInput]= useState("")
 const [recentPrompt,setRecentprompt]= useState("")
 const [previousPrompt,setPreviousPrompt] = useState([])
 const [showResult,setShowResult] = useState(false)
 const [loading,setLoading]= useState(false)
 const [resultData,setResultData] = useState("")

 const delayPara = (index,newWord) =>{
    setTimeout(()=>{
       setResultData(prev=>prev+newWord)
    },75*index)

    
}
const newChat = () =>{
    setLoading(false)
    setShowResult(false)
}
    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response = await run(prompt)
              setRecentprompt(prompt)
        }
        else{
            setPreviousPrompt(prev=>[...prev,input])
            setRecentprompt(input)
            response = await run(input)
        }
      
       
      let responseArray = response.split("**")
      let newResponse="";
      for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2 !==1){
            newResponse = newResponse + responseArray[i]
        }
        else{
            newResponse += "<b>"+responseArray[i]+"</b>"
        }
      }
      let newResponse2=newResponse.split("*").join("</br>s")
    let newRespnseAray = newResponse2.split(" ")
    for(let i=0;i<newRespnseAray.length;i++){
        const newWord = newRespnseAray[i]
        delayPara(i,newWord + " ")
    }
      setLoading(false)
      setInput("")
    }
   
    const contextValue = {
              previousPrompt,
              setPreviousPrompt,
              onSent,
              setRecentprompt,
              recentPrompt,
              showResult,
              loading,
              resultData,
              setInput,
              input,
              newChat
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )

}

export default ContextProvider;