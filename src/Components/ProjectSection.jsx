import bentoGridImg from "/assets/Screenshot 2025-05-22 at 20-09-17 Bento-Grid.png";
import shoppingCartImg from "/assets/Screenshot.png";
import faqAccordionImg from "/assets/Screenshot-FAQ-Accordion.png";
import testimonialsGridImg from "/assets/Screenshot-testimonials-grid.png";



const ProjectSection = () => {
  return (
    <section className="projects-container" id="work">
      <h1>these are some of My Projects</h1>
      <div className="projects">
        <div className="project">
          <h2>Responsive-Bento-Grid Using CSS Grid</h2>
          <a href="https://bento-grid-phi-khaki.vercel.app/">
            <img
              src={bentoGridImg}
              alt="Screenshot of Bento Grid layout project"
            />
          </a>
        </div>
        <div className="project">
          <h2>Shopping Cart App using React</h2>
          <a href="https://shopping-cart-ashen-beta.vercel.app/">
            <img
              src={shoppingCartImg}
              alt="Screenshot of Shopping cart layout project"
            />
          </a>
        </div>
        <div className="project">
          <a href="https://accordion-six-weld.vercel.app/">
            <h2>Responsive FAQ Component using React and CSS Flexbox</h2>
            <img
              src={faqAccordionImg}
              alt="Screenshot of FAQ Accordion layout project"
            />
          </a>
        </div>
        <div className="project">
          <a href="https://testimonials-grid-virid.vercel.app/">
            <h2>Responsive Testimonials Using Grid and FlexBox Css</h2>
            <img
              src={testimonialsGridImg}
              alt="Screenshot of Testimonials layout  project"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
