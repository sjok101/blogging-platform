import '../css/Footer.css'

export default function Footer(){
    return(
        <div>
            <table id="footer-links-table">
                <tr>
                    <th>Features</th>
                    <th>Resources</th>
                    <th>Company</th>
                </tr>
                <tr>
                    <td><a>Overview</a></td>
                    <td><a>Search Blog</a></td>
                    <td><a>About</a></td>
                </tr>
                <tr>
                    <td><a>Themes</a></td>
                    <td><a>New Posts</a></td>
                    <td><a>Terms of Service</a></td>
                </tr>
                <tr>
                    <td><a></a></td>
                    <td><a>Popular Tags</a></td>
                    <td><a>Privacy Policy</a></td>
                </tr>
            </table>

            <img id="logo" src="https://placehold.co/100x100"></img>
            <table id="social-links-table">
                <tr>
                    <td><a><img class="social-links" src="/img/facebook-small.png" ></img></a></td>
                    <td><a><img class="social-links" src="/img/twitter-small.png"></img></a></td>
                    <td><a><img class="social-links" src="/img/youtube-small.png"></img></a></td>
                    <td><a><img class="social-links" src="/img/instagram-small.png"></img></a></td>
                </tr>
            </table>
        </div>
    )
}