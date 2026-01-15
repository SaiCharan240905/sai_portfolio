import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';
import profile3 from '@/assets/profile-3.jpg';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";  
    link.download = "Madki_Sai_Charan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Images Carousel */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 max-w-sm">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 hover-lift hover-glow transition-smooth">
                        <img src={profile1} alt="MADKI SAI CHARAN - Profile 1" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 hover-lift hover-glow transition-smooth">
                        <img src={profile2} alt="MADKI SAI CHARAN - Profile 2" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 hover-lift hover-glow transition-smooth">
                        <img src={profile3} alt="MADKI SAI CHARAN - Profile 3" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Greeting */}
              <p className="text-lg text-muted-foreground mb-4 animate-slide-up">
                Hello, I'm
              </p>
              
              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-scale-in">
                Madki Sai Charan
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">AI &amp; ML Enthusiast | Frontend Web Developer | Mentor</p>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in">
                Hi, I’m Sai Charan — passionate about building real-world solutions with Artificial Intelligence, Machine Learning, and 
                Frontend Web development. I turn ideas into impactful, tech-driven experiences.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-slide-up">
                <Button size="lg" onClick={downloadResume} className="px-8 py-3 text-lg hover-lift">
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToContact} className="px-8 py-3 text-lg hover-lift">
                  Get In Touch
                </Button>
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in">
                <a href="https://www.linkedin.com/in/madki-sai-charan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth">
                  <span className="text-primary text-xl">in</span>
                </a>
                <a href="https://github.com/SaiCharan240905" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth">
                  <span className="text-primary text-xl">gh</span>
                </a>
                <a href="mailto:saicharanaiml.edam@gmail.com" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover-lift hover-glow transition-smooth">
                  <span className="text-primary text-xl">@</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
    </section>;
};
export default Hero;