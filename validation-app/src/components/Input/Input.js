import "./Input.scss";

export const Input = () => {
    return (
        <section className="validation-container">
            <h1 className="validation-heading">User name</h1>
            <div className="validation">
                <input type="text" name="name" className="validation-input" />
                <button className="validation-btn">Validate</button>
                {/* <div className="validation-error-message">Insert correct user name</div> */}
            </div>
        </section>
    )
}