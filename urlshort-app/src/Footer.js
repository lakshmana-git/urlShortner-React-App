import './App.css';

export const Footer =()=>{
    return(
        <div className="footer-section">
            <ul className="footer-list">
                <li className='footer-list-head'>Features</li>
                <li>Link shortning</li>
                <li>Branding Links</li>
                <li>Analytics</li>
            </ul>
            <ul className="footer-list">
                <li className='footer-list-head'>Resources</li>
                <li>Blog</li>
                <li>Developer</li>
                <li>Support</li>
            </ul>
            <ul className="footer-list">
                <li className='footer-list-head'>Company</li>
                <li>About</li>
                <li>Our Team</li>
                <li>Career</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}