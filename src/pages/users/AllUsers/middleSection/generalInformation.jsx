import "../middleSection/generalInformation.css";

const GeneralInfo = () => {
    return (
        <div className="main">
            {/* Personal Information */}
            <div className="generalTitle">Personal Information</div>

            <div style={{display:"flex", width:"100%", height:"fit-content"}}>
                <div className="generalSubtitle">Name</div>
                <div className="generalSubtitle">Gender</div>
                <div className="generalSubtitle">Date of Birth</div>
            </div>

            <div style={{display:"flex", width:"100%", height:"fit-content", marginTop:"5px"}}>
                <div className="generalContent">Ahmed Sobhy</div>
                <div className="generalContent">Male</div>
                <div className="generalContent">June 3rd, 1983</div>
            </div>

            <div style={{display:"flex", width:"100%", height:"fit-content", marginTop:"18px"}}>
                <div className="generalSubtitle">Registered by</div>
                <div className="generalSubtitle">Joined at</div>
            </div>

            <div style={{display:"flex", width:"100%", height:"fit-content", marginTop:"5px"}}>
                <div className="generalContent">Facebook</div>
                <div className="generalContent">Aug. 5, 2023</div>
            </div>

            {/* Contact Information */}
            <div className="generalTitle" style={{marginTop:"30px"}}>Contact Information</div>

            <div style={{display:"flex", width:"100%", height:"fit-content"}}>
                <div className="generalSubtitle">Mobile Number</div>
                <div className="generalSubtitle">Email</div>
            </div>

            <div style={{display:"flex", width:"100%", height:"fit-content", marginTop:"5px"}}>
                <div className="generalContent">+20 100 3888 222</div>
                <div className="generalContent">ismail.m.abdeltawab@msn.com</div>
            </div>

            {/* Location Information */}
            <div className="generalTitle" style={{marginTop:"30px"}}>Meet-Up Location</div>

            <div style={{display:"flex", width:"100%", height:"fit-content"}}>
                <div className="generalSubtitle">Address</div>
                <div className="generalSubtitle">City</div>
                <div className="generalSubtitle">Country</div>
            </div>

            <div style={{display:"flex", width:"100%", height:"fit-content", marginTop:"5px"}}>
                <div className="generalContent">5 Mostafa El-Nahas</div>
                <div className="generalContent">Cairo</div>
                <div className="generalContent">Egypt</div>
            </div>
            {/* Account Notes */}
            <div className="generalTitle" style={{marginTop:"30px"}}>Account Notes</div>
            <div className="generalContent" style={{width:"100%"}}>Vestibulum vel viverra erat, vitae eleifend augue. Mauris felis metus, consectetur sit amet libero eget, feugiat sollicitudin erat. Phasellus a metus tortor. Vestibulum in neque ex. Nulla ligula erat, volutpat et urna sit amet, cursus pretium elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Pellentesque mattis dignissim ex vitae suscipit. Praesent at odio id orci condimentum semper sit amet vel sem. Sed aliquet ullamcorper fringilla. Vestibulum ut odio sit amet urna finibus pulvinar mollis vitae nunc. Nunc efficitur consequat gravida. Sed cursus imperdiet nisi, vel consequat tortor iaculis quis. Phasellus vel blandit magna.</div>
        </div>
);
};

export default GeneralInfo;