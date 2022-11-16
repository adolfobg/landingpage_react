import React from "react"
import MyCard from "./card.jsx"
import Welcome from "./divWelcome.jsx"

const DivBody = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Welcome />
                    <div className="col-3">
                        <MyCard />
                    </div>
                    <div className="col-3">
                        <MyCard />
                    </div>
                    <div className="col-3">
                        <MyCard />
                    </div>
                    <div className="col-3">
                        <MyCard />
                    </div>
                    
                   
                </div>
            </div>

        </>
    )
}

export default DivBody