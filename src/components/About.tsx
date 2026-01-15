import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    { number: '4+', label: 'Projects Completed' },
    { number: '6+', label: 'Certifications' },
    { number: '10+', label: 'Events Organized' },
    { number: '3+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m an AI & ML enthusiast currently pursuing my degree with a focus on emerging technologies. 
                What began as a curiosity about how machines learn and make decisions has grown into a strong, 
                focused passion for artificial intelligence and machine learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond technical skills, I’m committed to mentoring peers and organizing tech events that foster 
                community and collaboration. I believe in learning through experience and value the impact 
                of sharing knowledge with others.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of coding and academics, I enjoy exploring emerging technologies, contributing to 
                open-source projects, and organizing campus tech initiatives.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover-lift shadow-soft">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What I Do Section */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl">🤖</span>
                </div>
                <h4 className="text-lg font-medium mb-2"> Artificial Intelligence & Machine Learning</h4>
                <p className="text-muted-foreground text-sm">
                  Actively exploring the field of Artificial Intelligence and Machine Learning with a 
                  strong enthusiasm for solving real-world problems through intelligent systems.
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl">💻</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Frontend Web Development</h4>
                <p className="text-muted-foreground text-sm">
                  Focused on building end-to-end solutions using modern web technologies and frameworks, 
                  delivering seamless and efficient user experiences.
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl">👥</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Mentoring & Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Passionate about mentoring peers and guiding collaborative growth through 
                  leadership roles in technical communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;