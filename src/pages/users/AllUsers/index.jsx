import "../AllUsers/index.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SearchIcon from "@mui/icons-material/Search";
import addUserPic from "../AllUsers/Group.png";
import GeneralInfo from "./middleSection/generalInformation";
import UserProducts from "./middleSection/products";
import SupportTable from "./middleSection/table";

const Users = () => {

    return (
        <div style={{ width: "87%" }}>
            {/* Title */}
            <div
                style={{
                    display: "flex",
                    margin: "20px",
                    alignItems: "center",
                    width: "fit-content",
                    marginBottom: "30px",
                }}
            >
                <div
                    type="button"
                    className="buttonReturn"
                    style={{
                        width: "30px",
                        height: "30px",
                        background: "#030303",
                        borderRadius: 9999,
                    }}
                ></div>
                <div
                    style={{
                        color: "white",
                        fontSize: 26,
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        letterSpacing: "1.5px",
                        display: "inline",
                        marginLeft: "10px",
                    }}
                >
                    All Users
                </div>
            </div>

            <hr style={{ color: "GrayText", width: "100%", marginBottom: "0px" }} />

            <div style={{ height: "100%", display: "flex", borderRightColor:"GrayText", borderTop:"1px solid" }}>
                {/* First Section */}
                <div style={{height:"100%", borderRightColor:"GrayText", borderRight:"1px solid", width:"18%"}}>
                    <div
                        style={{
                            height: "50px",
                            borderBottom: "2px solid",
                            display: "flex",
                            alignItems: "center",
                        }} >
                        <div
                            style={{ marginLeft: "0px", width: "20px", alignItems: "center" }}
                        >
                            <SearchIcon style={{ color: "#9A9A9A", marginLeft: "5px" }} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Users"
                            style={{
                                height: "20px",
                                backgroundColor: "#121212",
                                marginLeft: "10px",
                                border: "none",
                                width: "60%",
                            }}
                        />
                        <div
                            type="button"
                            className="addUser"
                            style={{ background: "#0168FA", marginLeft: "12px" }}
                        >
                            <img
                                src={addUserPic}
                                alt="addUser"
                                style={{ width: "11px", height: "11px", marginLeft: "7px" }}
                            />
                        </div>
                    </div>
                </div>

                {/* middle Section */}

                <div style={{width:"80%", backgroundColor:"black"}}> 
                    <Tabs
                        defaultActiveKey="generalInformation"
                        className="mb-3 mainTabs">
                            
                        <Tab eventKey="generalInformation" title="General Information">
                             <GeneralInfo />
                        </Tab>    
                        <Tab eventKey="products" title="Products">
                             <UserProducts />
                        </Tab>

                        <Tab eventKey="support" title="Support">
                            <SupportTable />
                        </Tab>
                    </Tabs>
                </div>


                {/* Third Section */}

                <div style={{ width: "25%", height: "100%", borderRightColor:"GrayText", borderLeft:"1px solid" }}>
                    <div className="circleProfileLarge"> A </div>
                    <div className="customerName">Ahmad Sobhy Khairallah</div>
                    <div style={{ display: "flex" }}>
                        <div className="customerId">User Name:</div>
                        <div className="customerNumber" style={{ display: "inline" }}>
                            291000193
                        </div>
                    </div>
                    <div className="accountStatusActive">Active</div>
                    <div style={{ display: "flex" }}>
                        <div style={{color: '#A0A0A0', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', marginLeft:"15px", width:"fit-content"}}>Created:</div>
                        <div style={{color: '#A0A0A0', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', marginLeft:"5px", width:"fit-content"}}> Oct 31, 2021</div>    
                    </div>        
                    <hr
                        style={{
                            color: "#252525",
                            width: "100%",
                            marginBottom: "0px",
                            border: "2px solid",
                        }}
                    />

                    <div type="button" style={{width: '100%', height: 'fit-content', color: 'white', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', margin:"15px 0 15px 15px"}}>Suspend User</div>
                    <div type="button" style={{width: '100%', height: 'fit-content', color: 'white', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', marginLeft:"15px"}}>Delete User</div>
                </div>
            </div>
        </div>
    );
};

export default Users;
