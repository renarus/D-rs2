import React from 'react'

const Card = (props) => {
    return (
        <div  >
            <div className="card crd d-flex align-items-center justify-content-center p-4" >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-align-center">{props.title}</h5>
          <p className="card-text text-center ">{props.desc}</p>
          <a href="#" className={props.mycls} >{props.btn}</a>
        </div>
      </div>
        </div>
    )
}

export default Card
