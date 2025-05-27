import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const ContactSection = () => {  
    return (
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
                <a href="mailto:jabirshikur@email.com">
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
    );
    }
    export default ContactSection;