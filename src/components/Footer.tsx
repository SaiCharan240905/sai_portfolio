import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Activities', href: '#campus' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'www.linkedin.com/in/madki-sai-charan/' },
    { label: 'GitHub', href: 'https://github.com/SaiCharan240905' },
    { label: 'Email', href: 'mailto:saicharanaiml.edam@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-gradient mb-4">
                MADKI SAI CHARAN
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AI & ML Enthusiast passionate about creating innovative solutions 
                that bridge the gap between technology and real-world problems. 
                Always learning, always building.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-primary text-sm"
                  >
                    {link.label === 'LinkedIn' ? 'in' : 
                     link.label === 'GitHub' ? 'gh' : '@'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm nav-link"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>saicharanaiml.edam@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💼</span>
                  <span>Open for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Madki Sai Charan. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover-lift flex items-center space-x-2"
              >
                <span>Back to Top</span>
                <span className="text-primary">↑</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button for Mobile */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:hidden w-12 h-12 rounded-full shadow-large hover-lift z-40"
        size="sm"
      >
        ↑
      </Button>
    </footer>
  );
};

export default Footer;