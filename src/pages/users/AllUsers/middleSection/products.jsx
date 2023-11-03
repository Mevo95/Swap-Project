import "../middleSection/products.css";
import productPic from "../middleSection/product.png"

const UserProducts = () => {
    return (
        <div style={{display:"flex", width:"100%"}}>
            <div class="card" style={{ width: "200px", backgroundColor: "#252525", margin: "40px" }}>
                <img style={{ width: "80%", margin: "20px 0 0 20px" }} src={productPic} alt="..." />
                <div class="card-img-overlay">
                <div style={{width: 'fit-content', height: 'fit-content', background: '#3CCC65', borderRadius: 4, border: '1px #8EDBA4 solid', color:"white", fontSize:"10px", padding:"2px 5px 2px 5px",fontFamily: 'Montserrat', fontWeight: '500', margin: "6px"}}> Active </div>
                </div>
                <div>
                    <p className="card-text" style={{ color: "white", marginLeft:"20px", width:"fit-content", marginTop:"15px", marginBottom: "20px" }}>382001999 <p className="card-text" style={{color: '#A0A0A0', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', display:"block"}}> 22/08/2023 </p></p>
                    
                    <div style={{display:"flex", width:"10px"}}>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>27</div>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>1,494</div>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>12,988</div>
                    </div>
        
                </div>
            </div>

            <div class="card" style={{ width: "200px", backgroundColor: "#252525", margin: "40px" }}>
                <img style={{ width: "80%", margin: "20px 0 0 20px" }} src={productPic} alt="..." />
                <div class="card-img-overlay">
                <div style={{width: 'fit-content', height: 'fit-content', background: '#3CCC65', borderRadius: 4, border: '1px #8EDBA4 solid', color:"white", fontSize:"10px", padding:"2px 5px 2px 5px",fontFamily: 'Montserrat', fontWeight: '500', margin: "6px"}}> Active </div>
                </div>
                <div>
                    <p className="card-text" style={{ color: "white", marginLeft:"20px", width:"fit-content", marginTop:"15px", marginBottom: "20px" }}>382001999 <p className="card-text" style={{color: '#A0A0A0', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', display:"block"}}> 22/08/2023 </p></p>
                    {/*
                    <div style={{display:"flex", width:"10px"}}>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>27</div>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>1,494</div>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>12,988</div>
                    </div>
                    */}
                </div>
            </div>

            <div class="card" style={{ width: "200px", backgroundColor: "#252525", margin: "40px" }}>
                <img style={{ width: "80%", margin: "20px 0 0 20px" }} src={productPic} alt="..." />
                <div class="card-img-overlay">
                <div style={{width: 'fit-content', height: 'fit-content', background: '#3CCC65', borderRadius: 4, border: '1px #8EDBA4 solid', color:"white", fontSize:"10px", padding:"2px 5px 2px 5px",fontFamily: 'Montserrat', fontWeight: '500', margin: "6px"}}> Active </div>
                </div>
                <div>
                    <p className="card-text" style={{ color: "white", marginLeft:"20px", width:"fit-content", marginTop:"15px", marginBottom: "20px" }}>382001999 <p className="card-text" style={{color: '#A0A0A0', fontSize: 12, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word', display:"block"}}> 22/08/2023 </p></p>
                    {/*
                    <div style={{display:"flex", width:"10px"}}>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>27</div>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>1,494</div>
                    <div style={{color: '#A0A0A0', fontSize: 10, fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>12,988</div>
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
};

export default UserProducts;