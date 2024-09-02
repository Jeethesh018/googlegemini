import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css"
import { context } from "../../context/context";


const Main = () =>{


    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(context)



    return (
        <div className="main">
           <div className="nav">
         <p>Gemini</p>
         <img src={assets.user_icon} />
           </div>
           <div className="maincontainer">
            {!showResult ? 
            <>
             <div className="great">
                <p>
                    <span>Hello,dev</span>
                    <p>How can i help you today</p>
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>suggest beautifyl places urban planning</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>urban planning urban planningurban planning</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Cricket news urban planningurban planning</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>movie code urban planning urban planning</p>
                    <img src={assets.code_icon}/>
                </div>
              
            </div>
            </>
          : <div className="result">
            <div className="result-title">
                <img src={assets.user_icon}/>
           <p> {recentPrompt}</p>
            </div>
              <div className="result-data">
                <img src={assets.gemini_icon}/>
                {
                    loading ? <div className="loader">
                       <hr />
                       <hr />
                       <hr />
                    </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
              </div>
            </div>
             }
           
            <div className="mainbottom">
                    <div className="searchbox">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Enter a prompt" />
                        <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                      {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : ""}  
                        </div>
                    </div>
                    <p className="bottom-info">
                    Gemini may display inaccurate info,including about people,so double-check it responses,Your privacy and Gemini Apps
                </p>
                </div>
           </div>
        </div>
    )
}
export default Main;