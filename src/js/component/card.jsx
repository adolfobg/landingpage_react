import React from "react"

const MyCard = () => {
    return (
        <div className="card" style={{width: "auto"}}>
          <img className="card-img-top" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
          </div>
        </div>
    );
}

export default MyCard