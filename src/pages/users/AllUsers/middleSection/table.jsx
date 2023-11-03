

const SupportTable = () => {
    return (

<div style={{ width: "96%"}}>
<table className="table align-middle">
    <thead className="tableHeading" style={{height:"50px"}}>
        <tr>
            <th className="column" style={{backgroundColor:"#121212",color:"#FFFFFF",paddingBottom:"18px", paddingLeft:"20px"}} >ID</th>
            <th className="column" style={{backgroundColor:"#121212",color:"#FFFFFF", paddingBottom:"18px"}} >Activity</th>
            <th className="column" style={{backgroundColor:"#121212",color:"#FFFFFF", paddingBottom:"18px"}} >Type</th>
            <th className="column" style={{backgroundColor:"#121212",color:"#FFFFFF", paddingBottom:"18px"}} >Date Added</th>
            <th className="column" style={{backgroundColor:"#121212",color:"#FFFFFF", paddingBottom:"18px"}} >Time</th>
            <th className="column" style={{backgroundColor:"#121212",color:"#FFFFFF", paddingBottom:"18px"}} ></th>
        </tr>
    </thead>
    <tbody>
            <tr>
            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",paddingLeft:"20px",fontSize:"12px"}}> 382999 </td>
            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none", paddingTop:"0px", paddingLeft:"0px"}}></td>
            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Technical</td>
            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>12/10/2023</td>
            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>03:12 PM</td>
            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",display:"flex", alignItems:"center"}}>
            <svg type="button" className="viewButton" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="none">
                <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" fill="#0047FF" stroke="#2962F4"/>
                <path d="M8 17C8 13.134 11.134 10 15 10C18.866 10 22 13.134 22 17M18.8889 17C18.8889 19.1478 17.1478 20.8889 15 20.8889C12.8522 20.8889 11.1111 19.1478 11.1111 17C11.1111 14.8522 12.8522 13.1111 15 13.1111C17.1478 13.1111 18.8889 14.8522 18.8889 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
             </td>
                </tr>
    </tbody>                    
</table>    
</div>

);
};

export default SupportTable;