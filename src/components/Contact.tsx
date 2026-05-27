import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Madki Sai Charan,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/918660536409?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    toast({
      title: 'Opening WhatsApp',
      description: 'Review your message and click Send in WhatsApp.'
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'saicharanaiml.edam@gmail.com',
    action: 'https://mail.google.com/mail/?view=cm&fs=1&to=saicharanaiml.edam@gmail.com&su=Portfolio%20Inquiry'
  },
  {
    icon: <FaLinkedinIn />,
    title: 'LinkedIn',
    value: 'madki-sai-charan',
    action: 'https://www.linkedin.com/in/madki-sai-charan/'
  },
  {
    icon: <FaGithub />,
    title: 'GitHub',
    value: 'SaiCharan240905',
    action: 'https://github.com/SaiCharan240905'
  },
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    value: 'Chat on WhatsApp',
    action: 'https://wa.me/918660536409'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Hyderabad, India',
    action: 'https://www.google.com/maps/place/Hyderabad'
  }
];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Get In Touch
            </h2>

            <p className="text-lg text-muted-foreground">
              Let’s discuss opportunities, projects, or innovative tech ideas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Let’s Connect
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I’m always open to discussing internship opportunities,
                  AI/ML research, web development projects, and collaborative
                  ideas. Whether you want to connect professionally, discuss
                  technology, or collaborate on innovative solutions, feel free
                  to reach out.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover-lift transition-smooth ${
                      contact.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={
                      contact.action
                        ? () =>
                            window.open(
                              contact.action,
                              '_blank',
                              'noopener,noreferrer'
                            )
                        : undefined
                    }
                  >
                    <div className="text-2xl text-primary">
                      {contact.icon}
                    </div>

                    <div>
                      <div className="font-medium">{contact.title}</div>

                      <div className="text-sm text-muted-foreground">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <Card className="card-gradient border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">🟢</span>
                    Currently Available
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Open to AI/ML internships, frontend development roles,
                    collaborative research, and innovative technology projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-gradient border-0 shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>

                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="transition-smooth focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>

                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What’s this about?"
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>

                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell me more about your project or inquiry..."
                      className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hover-lift bg-green-600 hover:bg-green-700"
                  >
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Connect */}
          <div className="mt-16 text-center animate-fade-in">
            <h4 className="text-xl font-semibold mb-4">Quick Connect</h4>

            <p className="text-muted-foreground mb-6">
              Prefer a direct approach? Connect with me through these platforms.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/madki-sai-charan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-2xl text-primary"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/SaiCharan240905"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-2xl text-primary"
              >
                <FaGithub />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saicharanaiml.edam@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-2xl text-primary"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/918660536409"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-2xl text-primary"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;