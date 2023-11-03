import {React} from "react";
import profilePic from './ProfilePic.png';
const Topbar = () => {
    return (
        <div style={{maxHeight:"fit-content", maxWidth:"fit-content", position:"absolute", top:"15px", right:"15px"}}>
        <div style={{width: '100%', height: '100%', background: '#252525', borderRadius: "27px", display:"flex", alignItems:"center"}}>
        <img style={{width: '22px', height: '22px', borderRadius: 9999, margin:"4px 4px 4px 4px"}} src={profilePic} alt="ProfilePic"/>   
        <div style={{width:"fit-content",opacity: 0.5, color: 'white', fontSize: 11, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', display:"inline", marginRight:"5px"}}>Arthur Guillermin Ha...</div>
        </div>
        </div>
)}

export default Topbar;