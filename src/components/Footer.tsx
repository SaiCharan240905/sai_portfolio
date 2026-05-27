import { Button } from '@/components/ui/button';
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/madki-sai-charan/',
      icon: <FaLinkedinIn />
    },
    {
      label: 'GitHub',
      href: 'https://github.com/SaiCharan240905',
      icon: <FaGithub />
    },
    {
      label: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=saicharanaiml.edam@gmail.com&su=Portfolio%20Inquiry',
      icon: <FaEnvelope />
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/918660536409',
      icon: <FaWhatsapp />
    }
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
      window.open(href, '_blank', 'noopener,noreferrer');
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

              <p className="text-muted-foreground leading-relaxed mb-5">
                AI & ML Enthusiast focused on building intelligent systems,
                automation solutions, and impactful web applications through
                machine learning, research, and modern development technologies.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-primary text-base"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
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

              <div className="space-y-4 text-sm text-muted-foreground">

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary" />
                  <span>saicharanaiml.edam@gmail.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Hyderabad, India</span>
                </div>

                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-primary" />
                  <span>Available for collaborations</span>
                </div>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Madki Sai Charan. All rights reserved.
            </div>

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

      {/* Mobile Floating Button */}
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