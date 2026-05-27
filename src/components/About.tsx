import { Card, CardContent } from '@/components/ui/card';
import { FaRobot, FaCode, FaBook, FaUsers } from 'react-icons/fa';

const About = () => {
  const achievements = [
    { number: '5+', label: 'Projects Completed' },
    { number: '8+', label: 'Certifications' },
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
                I’m an Artificial Intelligence & Machine Learning student passionate about building intelligent systems that solve real-world problems through technology, research, and innovation. 
                My interests span machine learning, predictive analytics, intelligent automation, and AI-driven web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through internships, research work, and hands-on projects, I have developed AI-powered recommendation systems, workflow automation frameworks, and data-driven applications using Python, React.js, Flask, and machine learning technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond technical development, I enjoy mentoring peers, contributing to collaborative communities, and organizing technical initiatives that encourage learning and innovation. 
                I’m continuously exploring emerging technologies and research opportunities in Artificial Intelligence and Software Engineering.
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
                  <FaRobot className="text-primary text-2xl" />
                </div>
                <h4 className="text-lg font-medium mb-2">
                  Artificial Intelligence & Machine Learning
                </h4>
                <p className="text-muted-foreground text-sm">
                  Building intelligent systems using machine learning, predictive analytics, and AI-driven automation to solve real-world problems through research and practical development.
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-primary text-2xl" />
                </div>
                <h4 className="text-lg font-medium mb-2">AI-Driven Web Development</h4>
                <p className="text-muted-foreground text-sm">
                  Developing responsive and scalable web applications using React.js, Flask, and modern development technologies with a focus on performance, usability, and intelligent workflows.
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBook className="text-primary text-2xl" />
                </div>
                <h4 className="text-lg font-medium mb-2">Research & Publications</h4>
                <p className="text-muted-foreground text-sm">
                  Actively engaged in AI research focused on intelligent recommendation systems, workflow automation, and decision-support frameworks with conference publication contributions.
                </p>
              </div>

              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-primary text-2xl" />
                </div>
                <h4 className="text-lg font-medium mb-2">Mentoring & Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Passionate about mentoring peers, leading technical communities, and organizing collaborative initiatives that encourage learning, innovation, and professional growth.
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