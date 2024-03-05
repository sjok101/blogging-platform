import "../css/Header.css"

export default function Header() {
    return (
        <div id="headerContainer">

            <a id="example-link" class="leftside-links" href="/">example.com</a>
            <a id="features-link" class="leftside-links" href="/">Features</a>
            <a id="resources-link" class="leftside-links" href="/">Resources</a>

            
            <a id="login-link" class="rightside-links" href="/login">Login</a>
            <a id="signup-link" class="rightside-links" href="/signup">Sign-up</a>

        </div>
    )
}