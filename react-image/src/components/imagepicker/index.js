import React, { useState, useEffect, Fragment } from "react";
import './style.scss';
import iconoLoading from '../../assets/Rolling-1s-200px.svg';

const ImagePicker = () => {
  const [imageurl,    setImage] = useState("");
  const [firstTime,    setFirstTime] = useState(true);
  const [classNameImage,   setClassNameImage]   = useState("container__bottom-loading-hide");
  const [classNameLoading, setClassNameLoading] = useState("container__bottom-loading-hide");
  
  
  const domainpath  = (process.env.DOMAIN_SERVER)?(process.env.DOMAIN_SERVER):"http://localhost:3000";
  
  const buttonClick = () => {
    setImage(domainpath + "/api/v1/images/randomimage?r=" + Math.random());
  }
  const setErrorImg = () => {
    setClassNameImage("container__bottom-loading-hide");
    if (firstTime){
      setFirstTime(false);
    } else {
      setClassNameLoading("container__bottom-loading-show");
    }
  };
  const setLoadImg = () => {
    setClassNameLoading("container__bottom-loading-hide");
    setClassNameImage("container__bottom-thumb");
  };

  //Simulacion Constructor o ComponentDidMount
  useEffect(
    () => {

        //Efecto ComponentDidMount
        console.log("ComponentDidMount/Constructor Disparado 1 SOLA VEZ");
        buttonClick(); //Descomentado!.

    },
    
    //Corchete vacio simula un constructor, indico que este useEffect lo quiero usar/disparar sólo 1 vez.
    []

  );
  
  //Simulacion ComponentDidUpdate y ComponentWillUmount
  useEffect(
    () => {

        
        //Efecto ComponentDidUpdate
        console.log("ComponentDidUpdate? Nueva URL: " + imageurl);
        

        //El return es el paralelo a ComponentWillUmount, siempre que cambia un state, este component se destruye.
        return () => {
          
          console.log("ComponentWillUmount/Destructor - Unmounted!!!");
        
        }

    },
    [imageurl] //state necesario para disparar ComponentDidUpdate
  );  

  return (
    <Fragment>
      <div className="container" >
        <div className="container__top" >
          <button className="container__top-button" onClick={buttonClick} >
          Try me ;)
          </button>
        </div>
        <div className="container__middle-sep" ></div>
        <div className="container__bottom" >		  
          <div className={classNameLoading} >
            <img src={iconoLoading} alt="Loading..." />
          </div>
          <div className="container__bottom-image">
            <img className={classNameImage} 
              src={imageurl} 
              onError={setErrorImg} 
              onLoad={setLoadImg} 
              alt="Random pic!!!" />
          </div>				
        </div>
      </div>	
    </Fragment>
  );
};

export default ImagePicker;