import "../css/Header.css"

export default function Header() {
    return (
        <div id="headerContainer">

            <a id="example-link" className="leftside-links" href="/">example.com</a>
            <a id="features-link" className="leftside-links" href="/">Features</a>
            <a id="resources-link" className="leftside-links" href="/">Resources</a>

            
            <a id="login-link" className="rightside-links" href="/login">Login</a>
            <a id="signup-link" className="rightside-links" href="/signup">Sign-up</a>

        </div>
    )
}