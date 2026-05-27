import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  FaBrain,
  FaGlobe,
  FaBriefcase,
  FaRobot,
  FaCode,
  FaGraduationCap,
  FaBook,
  FaSchool,
  FaTrophy,
  FaFileAlt,
  FaUserTie
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      title: 'Summer Research Intern (SRI 2026)',
      organization: 'Institute of Aeronautical Engineering',
      duration: 'Apr 2026 – Present',
      location: 'Hyderabad, India',
      description: [
        'Developed the IntelliAttend multi-agent attendance automation framework using RelayOS for intelligent workflow orchestration and adaptive notification management.',
        'Worked on AI-driven workflow automation, attendance monitoring, and multi-agent system coordination for educational institutions.',
        'Contributed to research-oriented development, technical documentation, and publication-focused implementation activities.'
      ],
      icon: <FaBrain />
    },
    {
      type: 'experience',
      title: 'AI Engineer Intern',
      organization: 'Cubixso Solutions Pvt Ltd',
      duration: 'Jan 2026 – Present',
      location: 'Hyderabad, India',
      description: [
        'Developed AI-assisted responsive web applications for client projects using React.js with modern AI development tools.',
        'Improved frontend performance, user experience, and workflow efficiency through optimized UI implementation strategies.',
        'Researched and evaluated AI productivity tools to support faster development workflows and intelligent solution development.'
      ],
      icon: <FaGlobe />
    },
    {
      type: 'experience',
      title: 'Frontend Developer Intern',
      organization: 'Diamond Association Bangalore',
      duration: 'May 2025 – Jun 2025',
      location: 'Bengaluru, India',
      description: [
        'Redesigned and developed responsive business website interfaces using React.js, HTML, and CSS for improved user experience and frontend performance.',
        'Optimized page responsiveness and frontend structure through efficient UI implementation and scalable component design.',
        'Collaborated with industry professionals to build business-focused web solutions aligned with real-world organizational requirements.'
      ],
      icon: <FaBriefcase />
    },
    {
      type: 'experience',
      title: 'AI & ML Intern',
      organization: 'AICTE & Microsoft',
      duration: 'Apr 2025 – May 2025',
      location: 'Virtual',
      description: [
        'Developed an employee performance prediction model using Python and machine learning techniques, achieving 85% prediction accuracy.',
        'Applied data preprocessing, model training, and predictive analytics concepts to solve real-world HR analytics problems.',
        'Gained hands-on experience with AI workflows, machine learning models, and practical business-oriented AI applications.'
      ],
      icon: <FaRobot />
    },
    {
      type: 'experience',
      title: 'Java Development Intern',
      organization: 'Cognifyz Technologies',
      duration: 'Feb 2025 – Mar 2025',
      location: 'Virtual',
      description: [
        'Applied core Java programming concepts to solve real-world coding tasks and hands-on development challenges.',
        'Strengthened problem-solving and logical reasoning skills through object-oriented programming and technical assignments.',
        'Worked on practical Java-based implementations focused on application development and data handling concepts.'
      ],
      icon: <FaCode />
    },
    {
      type: 'education',
      title: 'Bachelor of Technology (B. Tech)',
      organization: 'Institute of Aeronautical Engineering',
      duration: '2023 - 2027',
      location: 'Dundigal, Hyderabad, India',
      description: [
        'Stream: B.Tech in CSE - (Artificial Intelligence & Machine Learning)',
        'CGPA: 9.05/10',
        'Relevant Coursework: AI & ML, Data Structures and Algorithms, Database Systems and Computer Science related courses'
      ],
      icon: <FaGraduationCap />
    },
    {
      type: 'education',
      title: 'Intermediate',
      organization: 'Gauthami Junior College',
      duration: '2021 - 2023',
      location: 'Kukatpally, Hyderabad, India',
      description: [
        'Stream: Mathematics, Physics, Chemistry',
        'Percentage: 98%',
        '82 Percentile in JEE Mains'
      ],
      icon: <FaBook />
    },
    {
      type: 'education',
      title: 'School',
      organization: 'Bhashyam High School',
      duration: '2012 - 2021',
      location: 'Kukatpally, Hyderabad, India',
      description: [
        'CGPA: 10/10',
        'Srinivasa Ramanujan Award - Mathematics Olympiad',
        'Gold medal - NASO Exam'
      ],
      icon: <FaSchool />
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground">
              My journey through academics and professional experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center animate-slide-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl z-10">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <Card className="hover-lift shadow-soft card-gradient border-0">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">
                            {item.title}
                          </CardTitle>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.type === 'experience'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}
                          >
                            {item.type === 'experience' ? 'Work' : 'Education'}
                          </span>
                        </div>
                        <div className="text-primary font-medium">
                          {item.organization}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {item.duration} • {item.location}
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-2">
                          {item.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-primary mr-2 mt-1">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-20 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaTrophy />
                </div>
                <h4 className="font-medium mb-2">Academic Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Maintained a 9.05 CGPA with Academic Excellence recognition and consistent academic performance.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaFileAlt />
                </div>
                <h4 className="font-medium mb-2">Research & Publications</h4>
                <p className="text-sm text-muted-foreground">
                  Published and submitted AI & ML research works focused on predictive analytics, intelligent automation, and recommendation systems.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaUserTie />
                </div>
                <h4 className="font-medium mb-2">Leadership & Mentoring</h4>
                <p className="text-sm text-muted-foreground">
                  Led student communities, mentored peers, and organized technical initiatives through multiple leadership roles.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;