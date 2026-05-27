import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import PraveshPath from '@/assets/PraveshPath.png';
import CareerSenseAI from '@/assets/CareerSenseAI.png';
import IntelliAttend from '@/assets/IntelliAttend.png';
import dab from '@/assets/dab.png';
import Employeeperformance from '@/assets/Employeeperformance.png';
import portfolio from '@/assets/portfolio.png';

const Projects = () => {
  const projects = [
    {
      title:
        'PraveshPath: Hybrid AI System for Smart Admission Eligibility and Branch Prediction',
      description:
        'Developed an AI-powered admission and branch prediction platform using machine learning and rule-based decision logic to provide transparent, policy-aware, and accurate engineering admission recommendations with 95% prediction accuracy.',
      technologies: [
        'Python',
        'Machine Learning',
        'Random Forest',
        'Scikit-learn',
        'Flask',
        'React',
        'HTML',
        'CSS',
        'JavaScript'
      ],
      githubUrl: 'https://github.com/SaiCharan240905/PraveshPath',
      liveUrl: 'https://praveshpath-iare.vercel.app/',
      image: PraveshPath
    },
    {
      title: 'CareerSense AI: Intelligent Career Recommendation System',
      description:
        'Built an AI-driven career recommendation platform using machine learning and predictive analytics to analyze skills, interests, and academic performance for personalized career path suggestions with 92% prediction accuracy.',
      technologies: [
        'Python',
        'Machine Learning',
        'Scikit-learn',
        'Decision Trees',
        'Random Forest',
        'K-Means',
        'HTML',
        'CSS',
        'JavaScript'
      ],
      githubUrl: 'https://github.com/SaiCharan240905/CareerSense-AI',
      liveUrl: 'https://career-compass-ai-018.vercel.app/',
      image: CareerSenseAI
    },
    {
      title: 'IntelliAttend: Multi-Agent Attendance Automation System',
      description:
        'Developed a multi-agent attendance automation framework using RelayOS for intelligent workflow orchestration, adaptive notifications, attendance monitoring, and automated communication workflows, achieving 88.9% automated workflow completion.',
      technologies: [
        'RelayOS',
        'Python',
        'Workflow Automation',
        'Multi-Agent Systems',
        'AI Automation',
        'WhatsApp API',
        'Email Integration',
        'Flask',
        'React',
        'JavaScript'
      ],
      githubUrl:
        'https://github.com/SaiCharan240905/Multi-Agent-Attendance-Monitoring-and-Notification-System-Using-Adaptive-Dynamic-Templates',
      liveUrl: 'https://relayos.vercel.app/',
      image: IntelliAttend
    },
    {
      title: 'Diamond Association Bangalore – Website Clone',
      description:
        'Designed and developed a responsive business website clone using React.js with improved frontend structure, user experience, and scalable architecture for future backend integration.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/SaiCharan240905/dab-website-replica',
      liveUrl: 'https://dab-clone-2409.netlify.app/',
      image: dab
    },
    {
      title: 'Employee Performance & Attrition Prediction',
      description:
        'Developed a machine learning-based HR analytics system to predict employee performance and attrition using real-world datasets, achieving 85% prediction accuracy through predictive modeling techniques.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'React', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/SaiCharan240905/employee_prediction_ai',
      liveUrl: '',
      image: Employeeperformance
    },
    {
      title: 'Madki Sai Charan Portfolio Website',
      description:
        'Designed and developed a responsive portfolio website to showcase projects, research, certifications, internships, and technical skills with a modern UI and seamless navigation experience.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Vite'],
      githubUrl: 'https://github.com/SaiCharan240905/sai_portfolio',
      liveUrl: 'https://madkisaicharan-portfolio.vercel.app/',
      image: portfolio
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-lift shadow-medium card-gradient border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
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

                  {/* Tech stack */}
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

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>

            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  'https://github.com/SaiCharan240905?tab=repositories',
                  '_blank'
                )
              }
              className="hover-lift"
            >
              <FaGithub className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;