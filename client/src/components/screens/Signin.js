import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import M from "materialize-css";

const Signin = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        fetch("/Signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error })
                }
                else {
                    M.toast({ html: "signed in successfully" })
                    navigate('/');
                }
            })
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => PostData()}>
                    Login
                </button>
                <h6>
                    <Link to="/Signup">Don't have an account ?</Link>
                </h6>


            </div>
        </div>
    )
}

export default Signin