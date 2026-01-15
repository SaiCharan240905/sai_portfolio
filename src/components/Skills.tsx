import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        'Java', 'Python', 'MySQL'
      ]
    },
    {
      title: 'AI & ML Frameworks',
      icon: '🤖',
      skills: [
         'Pandas', 'NumPy', 'Scikit-learn', 'Keras'
      ]
    },
    {
      title: 'Web Technologies',
      icon: '🌐',
      skills: [
        'HTML5', 'CSS3', 'React.js'
      ]
    },
    {
      title: 'Data Science',
      icon: '📊',
      skills: [
        'Jupyter', 'Matplotlib', 'Seaborn', 'Plotly',
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        'VS Code','Windows',
      ]
    }
  ];

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
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
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
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="font-medium mb-2"> AI & ML </h4>
                <p className="text-sm text-muted-foreground">Artificial Intelligence, Machine Learning </p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-medium mb-2">Front-end Dev</h4>
                <p className="text-sm text-muted-foreground">React.js, HTML, CSS</p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-medium mb-2">Data Analysis</h4>
                <p className="text-sm text-muted-foreground">Statistical Analysis, Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;