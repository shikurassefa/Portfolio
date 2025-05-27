
import Navbar from './Components/Navbar';
import WelcomeSection from './Components/WelcomeSection';
import ProjectSection from './Components/ProjectSection';
import ContactSection from './Components/ContactSection';
const Portfolio = () => {
return (
    <div>
    
       <Navbar></Navbar>
       
       <WelcomeSection></WelcomeSection>
       
        {/* projects */}
      <ProjectSection></ProjectSection>
        {/* projects end */}
    <ContactSection></ContactSection>
    </div>
);
}   
export default Portfolio;