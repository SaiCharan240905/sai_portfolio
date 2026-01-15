import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Artificial Intelligence', 'Machine Learning Basics', 'AI Concepts', 'Ethical AI'],
      credentialUrl: 'https://www.credly.com/badges/4569c638-8ad9-4322-89e1-42d9abb68d7c/public_url',
      description: 'Completed foundational training in artificial intelligence concepts, including machine learning fundamentals, real-world AI applications, and ethical considerations in AI systems.'
    },
    {
      title: 'Certificate on Building LLMs using Prompt Engineering',
      issuer: 'NVIDIA',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Large Language Models', 'Prompt Engineering', 'Generative AI', 'AI Model Interaction'],
      credentialUrl: 'https://learn.nvidia.com/certificates?id=feGNFSHwTSi7L7_i8O2N3Q',
      description: 'Completed hands-on training focused on designing and optimizing prompts for large language models, understanding LLM behavior, and building practical generative AI solutions using prompt engineering techniques.'
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Databricks',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Generative AI', 'Generative AI Tools', 'Artificial Intelligence'],
      credentialUrl: 'https://credentials.databricks.com/64643019-d73c-4c49-97ab-0d2f95598de4#acc.Uea9VfH5',
      description: 'Completed foundational training in large language models (LLMs), prompt engineering, and practical generative AI applications.'
    },
    {
      title: 'Prompt Engineering for Everyone',
      issuer: 'IBM Skills Network',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Generative AI', 'Artificial Intelligence'],
      credentialUrl: 'https://courses.cognitiveclass.ai/certificates/6b4bc9ec86b6449ab5ec039ad99e25db',
      description: 'Explored the fundamentals of prompt engineering and learned how to design effective prompts for generative AI models to solve real-world tasks.'
    },
    {
      title: 'Reinforcement Learning and Deep Learning Essentials',
      issuer: 'IBM Skills Network',
      date: '2025',
      category: 'Reinforcement Learning',
      skills: ['Python', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning'],
      credentialUrl: 'https://courses.cognitiveclass.ai/certificates/1d21437cd36b4a32bf10c6b5fc34fd10',
      description: 'Completed hands-on training in deep learning fundamentals and reinforcement learning concepts.'
    },
    {
      title: 'Microsoft Learn: Technical Training in Artificial Intelligence & Generative AI Learning Path',
      issuer: 'Microsoft Learn',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Artificial Intelligence','Machine Learning Fundamentals','Prompt Engineering','Generative AI','AI Principles','AI Applications','Responsible AI','AI Tools & Technologies'],
      credentialUrl: 'https://learn.microsoft.com/en-us/users/madkisaicharan-2409/training',
      description: 'Completed in-depth learning on the principles and applications of Artificial Intelligence, Machine Learning, and Generative AI through Microsoft Learn. Gained practical understanding of AI concepts, real-world use cases, responsible AI practices, and modern AI tools and technologies. Earned 64 badges and 16 trophies, reflecting strong engagement and consistent skill development across AI-focused learning paths.'
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft and LinkedIn',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Generative AI', 'AI Applications', 'Prompt Engineering'],
      credentialUrl: 'https://www.linkedin.com/learning/certificates/64a691736b848339a584a985b25b5411fbc34ab9fb9f821e15d888edb469e448?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bd%2FYd9Ml8Tc2n5s0OY210fA%3D%3D',
      description: 'Completed a foundational course covering generative AI concepts, prompt engineering, and ethical use of AI in professional environments.'
    },
    {
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy',
      date: '2025',
      category: 'Cloud Computing',
      skills: ['Cloud Computing', 'AWS Fundamentals', 'EC2', 'S3', 'IAM', 'Cloud Architecture'],
      credentialUrl: 'https://www.credly.com/badges/d285b055-365a-4675-a980-023581dc4c3a/public_url',
      description: 'Completed foundational training in cloud computing concepts, core AWS services, security, architecture, and best practices through the AWS Academy Cloud Foundations program.'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Amazon Web Services',
      date: '2025',
      category: 'Artificial Intelligence',
      skills: ['Generative AI', 'Generative AI Tools'],
      credentialUrl: '#',
      description: 'Gained foundational knowledge of generative AI concepts, tools, and use cases, with a focus on AWS services and responsible AI practices.'
    },
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional certifications and achievements
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up">
            <Badge variant="default" className="px-4 py-2 text-sm">
              All ({certifications.length})
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover-lift shadow-soft hover:shadow-medium transition-smooth group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-8 h-8 text-primary flex-shrink-0" />
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-primary mb-1">{cert.issuer}</p>
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Skills Covered
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {certifications.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Certifications
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {categories.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  6+
                </div>
                <div className="text-sm text-muted-foreground">
                  Platforms
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
