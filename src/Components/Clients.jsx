import React from "react";
import Fancy from "../Assets/images/client3.png";
// import Jh from "../Assets/images/client4.jpg";

const Client = () => {
    return (  
<div>
  <div className="container-fluid">
      <div className="client bg-item">
      <div className="main-title">
        <h1 className="">Our Client</h1>
      </div>
      <div className="row">
      <div className="col-md-2">
            <img src={Fancy} className='img-client' alt=""/>
          </div>
          <div className="col-md-2">
            <img src={Fancy} className='img-client' alt=""/>
          </div>
          <div className="col-md-2">
            <img src={Fancy} className='img-client' alt=""/>
          </div>
          <div className="col-md-2">
            <img src={Fancy} className='img-client' alt=""/>
          </div>
          <div className="col-md-2">
            <img src={Fancy} className='img-client' alt=""/>
          </div>  
          <div className="col-md-2">
            <img src={Fancy} className='img-client' alt=""/>
          </div>                                                           
      </div>
      </div>
  </div>
</div>       
    );
}
 
export default Client;
