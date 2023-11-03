import Header from "../../global/Header";
import "../UserDashboard/index.css";


const UserDashboard = () => {
    return (
        <div style={{ width: "80%" }}>
            <Header title={"Users"} />
            {/* Boxes */}
            <div className="boxes">
                <div className="box" style={{ height: '100%', background: '#B9E805', borderRadius: 4, border: '2px #A3C913 solid' }}>
                    <div className="boxTitle">22,494</div>
                    <div className="boxSubtitle">Active Users</div>
                </div>
                <div className="box" style={{ height: '100%', background: '#FFCF23', borderRadius: 4, border: '2px #E2B820 solid' }} >
                    <div className="boxTitle">6,288</div>
                    <div className="boxSubtitle">InActive Users</div>
                </div>
                <div className="box" style={{ height: '100%', background: '#D43A2F', borderRadius: 4, border: '2px #A71F1F solid' }}>
                    <div className="boxTitle" style={{ color: "white" }}>742</div>
                    <div className="boxSubtitle" style={{ color: "white" }}>Suspended Users</div>
                </div>
                <div className="box" style={{ height: '100%', background: '#9A9A9A', borderRadius: 4, border: '2px #A9A9A9 solid' }}>
                    <div className="boxTitle" style={{ color: "white" }}>12</div>
                    <div className="boxSubtitle" style={{ color: "white" }}>Deleted Users</div>
                </div>
            </div>
            {/* Title and button */}
            <div style={{ width: "100%", display: "flex", alignItems: "center", marginTop: "40px", marginBottom: "10px" }}>
                <div className="tableTitle">Recently Added Users</div>
                <button className="userButton" style={{ background: '#030303', borderRadius: 3, border: '1px #030303 solid' }}>
                    View All
                </button>
            </div>
            {/* Table */}
            <div style={{ width: "92%", display: "flex" }}>
                <table className="table align-middle" style={{borderColor:"#393939"}}>
                    <thead className="tableHeading" style={{height:"60px"}}>
                        <tr>
                            <th className="column" style={{backgroundColor:"#393939",color:"#FFFFFF",paddingBottom:"18px",paddingLeft:"22px"}} >ID</th>
                            <th className="column" style={{backgroundColor:"#393939",color:"#FFFFFF", paddingBottom:"18px"}} >Name</th>
                            <th className="column" style={{backgroundColor:"#393939",color:"#FFFFFF", paddingBottom:"18px"}} >Account Status</th>
                            <th className="column" style={{backgroundColor:"#393939",color:"#FFFFFF", paddingBottom:"18px"}} >Date Added</th>
                            <th className="column" style={{backgroundColor:"#393939",color:"#FFFFFF", paddingBottom:"18px"}} >Registration Method</th>
                            <th className="column" style={{backgroundColor:"#393939",color:"#FFFFFF", paddingBottom:"18px"}} ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",paddingLeft:"20px",fontSize:"12px"}}> 12384394 </td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Mohamed Idris</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}><div className="accountStatusInactive">Inactive</div></td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>12/10/2023</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Email</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",display:"flex", alignItems:"center"}}><div type="button" className="suspendButton">Suspend</div>
                            <svg type="button" className="viewButton" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="none">
                                <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" fill="#0047FF" stroke="#2962F4"/>
                                <path d="M8 17C8 13.134 11.134 10 15 10C18.866 10 22 13.134 22 17M18.8889 17C18.8889 19.1478 17.1478 20.8889 15 20.8889C12.8522 20.8889 11.1111 19.1478 11.1111 17C11.1111 14.8522 12.8522 13.1111 15 13.1111C17.1478 13.1111 18.8889 14.8522 18.8889 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",paddingLeft:"20px"}}>472873881</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Radwa Tanbouly</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}><div className="accountStatusSuspended">Suspended</div> </td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>12/10/2023</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Facebook</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none", display:"flex", alignItems:"center"}}><div type="button" className="activateButton">Activate</div>
                            <svg type="button" className="viewButton" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="none">
                                <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" fill="#0047FF" stroke="#2962F4"/>
                                <path d="M8 17C8 13.134 11.134 10 15 10C18.866 10 22 13.134 22 17M18.8889 17C18.8889 19.1478 17.1478 20.8889 15 20.8889C12.8522 20.8889 11.1111 19.1478 11.1111 17C11.1111 14.8522 12.8522 13.1111 15 13.1111C17.1478 13.1111 18.8889 14.8522 18.8889 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",paddingLeft:"20px"}}>32541874</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Islam Ibrahim</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}><div className="accountStatusPending">Pending</div></td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>12/10/2023</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none"}}>Phone</td>
                            <td style={{backgroundColor:"#121212",color:"#FFFFFF", border:"none",display:"flex", alignItems:"center"}}><div type="button" className="activateButton">Activate</div>
                            <svg type="button" className="viewButton" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="none">
                                <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" fill="#0047FF" stroke="#2962F4"/>
                                <path d="M8 17C8 13.134 11.134 10 15 10C18.866 10 22 13.134 22 17M18.8889 17C18.8889 19.1478 17.1478 20.8889 15 20.8889C12.8522 20.8889 11.1111 19.1478 11.1111 17C11.1111 14.8522 12.8522 13.1111 15 13.1111C17.1478 13.1111 18.8889 14.8522 18.8889 17Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="mainStatBox">
                    <div className="statBox">
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word', marginLeft: "10px", marginTop:"5px"}}>Registration Methods</div>
                    </div>
                    <div className="statBox">
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word', marginLeft: "10px", marginTop:"5px"}}>Account Statuses</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserDashboard;