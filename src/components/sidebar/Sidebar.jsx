import "./sidebar.css"
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { context } from "../../context/context";


const Sidebar = () =>{

    const [extended,setExtended] = useState(false)
    const {onSent,previousPrompt,setRecentprompt,newChat} = useContext(context)

    const loadPrompt = async (prompt) =>{
        setRecentprompt(prompt)
      await onSent(prompt)
    }

    return (
        <div className="sidebar"> 

         <div className="top">
         <img className="menu" onClick={()=>setExtended(!extended)} src={assets.menu_icon} alt="menu" />
         <p></p>
         <p></p>
            <div  onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="plus" />
               {extended ? <p >New Chat</p> : null} 
            </div>
            {extended ? 
            
            <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item,index)=>{
                return (
                    <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={assets.message_icon}/>
                    <p>{item.slice(0,18)} ...</p>
                </div>
                )
            })}
             </div> : ""
        }
           
        </div>
        <div className="bottom">
      
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon}/>
                    {extended ? <p>Help</p> : null} 
                </div>
         
          
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon}/>
                    {extended ? <p>Activity</p> : null} 
                 
                </div>
          
    
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon}/>
                    {extended ? <p>settings</p> : null} 
                  
                </div>
            </div>
            
         </div>
    )
      
    
}

export default Sidebar;