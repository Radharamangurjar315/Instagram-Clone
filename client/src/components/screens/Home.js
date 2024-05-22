import React from "react"

const Home = () => {

    return (
        <div className="home">
            <div className="card home-card">
                <h5>Raman</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
                        alt="" />

                </div>
                <div className="card-content">
                    <i className="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an awesome post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Raman</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
                        alt="" />

                </div>
                <div className="card-content">
                    <i className="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Title</h6>
                    <p>This is an awesome post</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Home