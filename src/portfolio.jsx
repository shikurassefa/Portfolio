import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// import FacebookIcon from '@mui/icons-material/Facebook';


const Portfolio = () => {
return (
    <div>
        {/* navbar */}
        <nav id="navbar">
            <div className="logo">
                <h1>J-TECH</h1>
            </div>
            <div className="links">
                <a
                    href="#about"
                    onClick={e => {
                        e.preventDefault();
                        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    About
                </a>
                <a
                    href="#work"
                    onClick={e => {
                        e.preventDefault();
                        document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Work
                </a>
                <a
                    href="#contact"
                    onClick={e => {
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Contact
                </a>
            </div>
        </nav>
        {/* navbar end */}
        <div className="welcome-section">
            <h1>
                Hey I am Shikur 
            </h1>
            <p>a web developer</p>
        </div>
       
        {/* projects */}
        <section className="projects-container" id="work">
            <h1>these are some of My Projects</h1>
            <div className="projects">
                <div className="project">
                    <h2>Responsive-Bento-Grid Using CSS Grid</h2>
                    <a href="https://bento-grid-phi-khaki.vercel.app/">
                        <img src="./assets/Screenshot 2025-05-22 at 20-09-17 Bento-Grid.png" alt="Bento-grid-image" />
                    </a>
                </div>
                <div className="project">
                    <h2>Shopping Cart App using React</h2>
                    <a href="https://shopping-cart-ashen-beta.vercel.app/">
                        <img src="./assets/Screenshot.png" alt="Shopping-cart-image" />
                    </a>
                </div>
                <div className="project">
                    <a href="https://accordion-six-weld.vercel.app/">
                        <h2>Responsive FAQ Component using React and CSS Flexbox</h2>
                        <img src="./assets/Screenshot-FAQ-Accordion.png" alt="FAQ-Accordion-image" />
                    </a>
                </div>
                <div className="project">
                    <a href="https://testimonials-grid-virid.vercel.app/">
                        <h2>Responsive Testimonials Using Grid and FlexBox Css</h2>
                        <img src="./assets/Screenshot-testimonials-grid.png" alt="Testimonials-image" />
                    </a>
                </div>
            </div>
        </section>
        {/* projects end */}
        <section className="contact" id="contact">
            <h1>Lets Work together......</h1>
            <div className="social-icon">
                <a href="https://www.facebook.com/shikur.assefa">
                    <FacebookIcon  />
                    Facebook
                </a>
                <a href="https://github.com/shikurassefa">
                    <GitHubIcon  />
                    Github
                </a>
                <a href="https://www.twitter.com/jabirshikur">
                    <TwitterIcon  />
                    Twitter
                </a>
                <a href="mailto:your-email@example.com">
                    <EmailIcon  />
                    Send a mail
                </a>
                <a href="tel:0960253139">
                    <PhoneIcon  />
                    Call me 0960253139
                </a>
            </div>
            <hr />
            <div className="footer" id="about">
                <p>visit my front-end projects on fronEnd Mentor
                </p>
                <a href="https://www.frontendmentor.io/profile/shikurassefa">
                    @Shikurassefa
                </a>
            </div>
        </section>
    </div>
);
}   
export default Portfolio;