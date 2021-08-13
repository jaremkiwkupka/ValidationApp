import { useState } from "react";
import "./Input.scss";

export const Input = () => {

    const [userName, setUserName] = useState("");

const handleChange = (e) => {
      setUserName(e.target.value);
}

 const handleValidation = (e) => {
       e.preventDefault();

        let regex = new RegExp('^[a-zA-Z]{2}\\d{2}[a-zA-Z]{2}$');

        if (regex.test(userName)) {
            console.log("ok");
            fetch('http://localhost:3000/validateUserName', {
                method: 'GET',
            })
            .then(response => response.json())
            .then(userName => {
                console.log('Success:', userName);
            })
            .catch(error => {
                console.error('Error:', error)
            });
        } else {
            console.log("wrong");
        }
    }

    return (
        <section className="validation-container">
            <h1 className="validation-heading">User name</h1>
            <form className="validation" onSubmit={handleValidation}>
                <input type="text" name="name" className="validation-input" value={userName} onChange={handleChange} />
                <button className="validation-btn">Validate</button>
                {/* <div className="validation-error-message">Insert correct user name</div> */}
            </form>
        </section>
    )
}