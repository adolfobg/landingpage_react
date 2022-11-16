import React from "react"

const Welcome = () => {
    return (
        <>
            <div className="col-12">
                <div className="card bg-dark bg-opacity-10 border-0 mb-4 mt-4">
                    <div className="card-body">
                        <h1 className="card-title">A Warm Welcome!</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        <button type="button" className="btn btn-primary">Call to action!</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome