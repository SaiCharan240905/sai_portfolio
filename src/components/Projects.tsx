import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PraveshPath from '@/assets/PraveshPath.png';
import CareerSenseAI from '@/assets/CareerSenseAI.png';
import dab from '@/assets/dab.png';
import Employeeperformance from '@/assets/Employeeperformance.png';
import portfolio from '@/assets/portfolio.png';
const Projects = () => {
  const projects = [
    {
      title: 'PraveshPath: Hybrid AI System for Smart Admission Eligibility and Branch Prediction',
      description: 'Developed a smart admission and branch prediction web application that combines machine learning with rule-based decision logic to assist students and institutions in admission decision-making. The system uses a Random Forest classifier trained on simulated admission data to model complex, non-linear relationships among academic performance, entrance rank, category, and seat type. Machine learning predictions are integrated with a transparent rule-based engine that enforces institutional admission policies such as minimum eligibility criteria, rank cut-offs, and seat constraints. The application also incorporates fairness and bias assessment mechanisms to ensure ethical and consistent predictions across categories and branches, delivering accurate, interpretable, and policy-compliant recommendations through a full-stack React and Flask web interface.',
      technologies: ['Python', 'Machine Learning', 'Random Forest', 'Rule-Based Systems', 'Scikit-learn', 'Flask', 'React', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/SaiCharan240905/PraveshPath',
      liveUrl: 'https://praveshpath-iare.vercel.app/',
      image: PraveshPath
    },
    {
      title: 'CareerSense AI: Intelligent Career Recommendation System Using Machine Learning',
      description: 'Built an AI-based career recommendation system that leverages machine learning and psychometric analysis to guide students and professionals toward suitable career paths. The system collects survey responses, skill assessments, and academic data to generate comprehensive user profiles and applies algorithms such as Decision Trees, Random Forests, K-Means clustering, and collaborative filtering to deliver personalized, evidence-based career recommendations. It features aptitude and personality tests, career information modules, and an interactive dashboard displaying career fit scores, strengths, salary insights, qualifications, and market demand.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Decision Trees', 'Random Forests', 'K-Means', 'Psychometric Analysis', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/SaiCharan240905/CareerSense-AI',
      liveUrl: 'https://career-compass-ai-018.vercel.app/',
      image: CareerSenseAI
    },
    {
      title: 'Diamond Association Bangalore – Website Clone',
      description: 'Cloned and enhanced the official Diamond Association Bangalore website with a clean, responsive frontend. Designed with scalability in mind and structured for future backend integration using Java.',
      technologies: ['React', 'HTML', 'CSS', 'Java (Planned)', 'Spring Boot (Planned)'],
      githubUrl: 'https://github.com/SaiCharan240905/dab-website-replica',
      liveUrl: 'https://dab-clone-2409.netlify.app/',
      image: dab
    },
    {
      title: 'Employee Performance & Attrition Prediction',
      description: 'Developed a machine learning web app to predict employee performance and attrition using real-world HR datasets. Integrated models into a dynamic frontend to deliver real-time predictions based on user input.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'React', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/SaiCharan240905/employee_prediction_ai',
      liveUrl: '',
      image : Employeeperformance
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a personal portfolio website to showcase projects, certifications, and experiences. Focused on clean UI, responsive design, and seamless navigation across sections.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Vite'],
      githubUrl: '',
      liveUrl: '',
      image: portfolio
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="hover-lift shadow-medium card-gradient border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      GitHub
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('https://github.com/SaiCharan240905?tab=repositories', '_blank')}
              className="hover-lift"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;