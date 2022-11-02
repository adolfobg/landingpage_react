import React from "react"
import MyCard from "./card.jsx"
import Welcome from "./divWelcome.jsx"

const DivBody = () => {
    return (
        <>
        <Welcome />
        <div class="container">
            
                <div class="row">
                    <div class="col-3">
                        <MyCard />
                    </div>
                    <div class="col-3">
                    <MyCard />
                    </div>
                    <div class="col-3">
                    <MyCard />
                    </div>
                    <div class="col-3">
                    <MyCard />
                    </div>
                </div>
        </div>
        </>
    )
} 

export default DivBody