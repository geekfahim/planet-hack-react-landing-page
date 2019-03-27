import React from "react";

const MinServices = (props) => {
  return (
      <div className="container-fluid">
    <div className='services bg-item'>
      <div className="main-title">
      <h1>{props.title}</h1>
      </div>
      {/* <p className="sub-title">{props.subtitle}</p> */}
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
                <h5 className="card-title">Security & Bug Testing</h5>
                <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>              
                <h5 className="card-title">Software Solution</h5>
                <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div> 
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>              
                <h5 className="card-title">Software Solution</h5>
                <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div> 
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
              <div className="card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>              
                <h5 className="card-title">Software Solution</h5>
                <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>                             
        </div>
      </div>
    </div>
  );
};

export default MinServices;
