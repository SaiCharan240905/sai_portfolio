import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
  FaJava,
  FaPython,
  FaDatabase,
  FaRobot,
  FaGlobe,
  FaChartBar,
  FaTools,
  FaBrain
} from 'react-icons/fa';

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiFlask,
  SiJupyter,
  SiPlotly,
  SiGit,
  SiGithub
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCodeIcon />,
      skills: ['Java', 'Python', 'MySQL']
    },
    {
      title: 'AI, ML & GenAI Tools',
      icon: <FaRobot />,
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Prompt Engineering']
    },
    {
      title: 'Web Technologies',
      icon: <FaGlobe />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Flask']
    },
    {
      title: 'Data Science',
      icon: <FaChartBar />,
      skills: ['Jupyter', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    {
      title: 'Developer Tools',
      icon: <FaTools />,
      skills: ['Git', 'GitHub']
    },
    {
      title: 'Soft Skills',
      icon: <FaBrain />,
      skills: [
        'Team Collaboration',
        'Communication',
        'Adaptability',
        'Problem Solving',
        'Analytical Thinking'
      ]
    }
  ];

  // small helper icon for programming section
  function FaCodeIcon() {
    return <FaDatabase className="text-4xl" />;
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="hover-lift shadow-soft card-gradient border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2 flex justify-center">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Skills Section */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaRobot />
                </div>
                <h4 className="font-medium mb-2">AI & Machine Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Machine Learning, Predictive Analytics, Intelligent Automation, Prompt Engineering
                </p>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaGlobe />
                </div>
                <h4 className="font-medium mb-2">Web Development</h4>
                <p className="text-sm text-muted-foreground">
                  React.js, JavaScript, Flask, Responsive UI Development
                </p>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaChartBar />
                </div>
                <h4 className="font-medium mb-2">Data & Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Data Analysis, Visualization, Model Evaluation, Statistical Insights
                </p>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3 flex justify-center">
                  <FaBrain />
                </div>
                <h4 className="font-medium mb-2">Research & Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  Research Publications, Technical Documentation, Mentoring, Team Collaboration
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;