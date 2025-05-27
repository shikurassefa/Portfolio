const Navbar=()=>
{
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav id="navbar">
            {/* logo */}
            <div className="logo">
                <h1>J-TECH</h1>
            </div>
            {/* links */}
            <div className="links">
                <a
                    href="#about"
                    onClick={e => {
                        e.preventDefault();
                       scrollToSection('about');
                    }}
                >
                    About
                </a>
                <a
                    href="#work"
                    onClick={e => {
                        e.preventDefault();
                       scrollToSection('work');
                    }}
                >
                    Work
                </a>
                <a
                    href="#contact"
                    onClick={e => {
                        e.preventDefault();
                       scrollToSection('contact');
                    }}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}
export default Navbar;