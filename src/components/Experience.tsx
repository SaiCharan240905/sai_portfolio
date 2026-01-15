import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      title: 'Website Clone',
      organization: 'Diamond Association Bangalore',
      duration: '2025',
      location: 'Bengaluru, India',
      description: [
        'Cloned and enhanced the Diamond Association Bengaluru website with a clean, responsive frontend using React, HTML, and CSS.',
        'Planned backend development using Java and Spring Boot for dynamic content and member/contact management.',
        'Focused on building a scalable, structured web solution closely aligned with real-world business needs.'
      ],
      icon: '🌐'
    },
    {
      type: 'experience',
      title: 'Foundations of AI Internship',
      organization: 'AICTE and Microsoft',
      duration: '2025',
      location: 'Virtual',
      description: [
        'Completed a certified internship covering foundational AI concepts, hands-on projects, and real-world applications using Microsoft tools and platforms.'
      ],
      icon: '💼'
    },
    {
     type: 'experience',
      title: 'Java Intern',
      organization: 'Cognifyz Technologies',
      duration: '2025',
      location: 'Virtual',
      description: ['Completed an internship focused on core Java programming and applied problem-solving techniques through hands-on tasks and challenges.'
      ],
      icon: '💻'
    },
    {
      type: 'education',
      title: 'Bachelor of Technology (B.Tech)',
      organization: 'Institute of Aeronautical Engineering',
      duration: '2023 - 2027',
      location: 'Dundigal, Hyderabad, India',
      description: [
        'Stream: B.Tech in CSE - (Artificial Intelligence & Machine Learning)',
        'CGPA: 9.0/10',
        'Relevant Coursework: AI & ML, Data Structures and Algorithms, Database Systems and Computer Science related courses'
      ],
      icon: '🎓'
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
      icon: '📚'
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
      icon: '🏫'
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
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Timeline Items */}
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

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <Card className="hover-lift shadow-soft card-gradient border-0">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.type === 'experience' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }`}>
                            {item.type === 'experience' ? 'Work' : 'Education'}
                          </span>
                        </div>
                        <div className="text-primary font-medium">{item.organization}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.duration} • {item.location}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-sm text-muted-foreground flex items-start">
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

          {/* Achievements Section */}
          <div className="mt-20 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-medium mb-2">Academic Excellence</h4>
                <p className="text-sm text-muted-foreground">Consistently maintained high GPA throughout academic journey</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-medium mb-2">Research Publications</h4>
                <p className="text-sm text-muted-foreground">Published multiple papers in AI/ML conferences and journals</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3">👨‍💼</div>
                <h4 className="font-medium mb-2">Leadership Roles</h4>
                <p className="text-sm text-muted-foreground">Led multiple student organizations and tech initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;