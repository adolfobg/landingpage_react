import React from "react"
import MyCard from "./card.jsx"
import Welcome from "./divWelcome.jsx"

const DivBody = () => {
    return (
            <>
                <div className="container">
                    <Welcome />
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4">
                            <div>
                                <MyCard />
                            </div>
                            <div>
                                <MyCard />
                            </div>
                            <div>
                                <MyCard />
                            </div>
                            <div>
                                <MyCard />
                            </div>
                        </div>
                    </div>
            </>
            )
}

export default DivBody