import React from 'react';

const PageSlider =(props)=>{
        return ( 
            <div className="banner-bg">
              <div className="overlay-img">
                <h1 className="banner-title m-t-100">{props.bannertitle}</h1>
              </div>
            </div>
         );
    
}
 
export default PageSlider;