import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'gmail',
      value: 'saicharanaiml.edam@gmail.com',
      action: 'mailto:saicharanaiml.edam@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'www.linkedin.com/in/madki-sai-charan/',
      action: 'https://www.linkedin.com/in/madki-sai-charan/'
    },
    {
      icon: '🐱',
      title: 'GitHub',
      value: 'github.com/SaiCharan240905',
      action: 'https://github.com/SaiCharan240905'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Hyderabad, India',
      action: null
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
              Let's discuss opportunities, projects, or just have a tech chat
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or mentor fellow students. Whether you're looking for a developer, need guidance 
                  on your tech journey, or just want to connect, feel free to reach out!
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
                    onClick={contact.action ? () => window.open(contact.action, '_blank') : undefined}
                  >
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <div className="font-medium">{contact.title}</div>
                      <div className="text-sm text-muted-foreground">{contact.value}</div>
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
                    Open to internship opportunities, freelance projects, and collaborative research in AI/ML
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
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
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
                    className="w-full hover-lift"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Connect */}
          <div className="mt-16 text-center animate-fade-in">
            <h4 className="text-xl font-semibold mb-4">Quick Connect</h4>
            <p className="text-muted-foreground mb-6">
              Prefer a direct approach? Connect with me on social media
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="www.linkedin.com/in/madki-sai-charan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-xl text-primary"
              >
                in
              </a>
              <a 
                href="https://github.com/SaiCharan240905" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-xl text-primary"
              >
                gh
              </a>
              <a 
                href="mailto:saicharanaiml.edam@gmail.com"
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth text-xl text-primary"
              >
                @
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;