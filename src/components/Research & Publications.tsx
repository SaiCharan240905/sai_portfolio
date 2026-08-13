import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  FaGraduationCap,
  FaBrain,
  FaBookOpen,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaFileAlt,
  FaRobot,
  FaRocket
} from "react-icons/fa";

const Research = () => {
  const publications = [
    {
      title:
        "A Hybrid Rule-Based and Ensemble Machine Learning Framework for Transparent College Admission and Branch Prediction",

      status: "Presented at ICT4SD 2026",

      year: "2026",

      description:
        "Proposed a hybrid rule-based and ensemble machine learning framework for transparent engineering branch prediction and admission decision support. Developed a web-based platform for accurate and policy-aware admission recommendations.",

      technologies: [
        "Machine Learning",
        "Random Forest",
        "Rule-Based Systems",
        "Flask",
        "React.js",
      ],

      type: "Conference Paper",

      paperUrl: "https://ict4sd.org/",

      icon: <FaGraduationCap className="w-5 h-5" />,
    },

    {
      title: "An Intelligent Multi-Agent Framework for Attendance Monitoring and Notification Using Adaptive Dynamic Templates",

      status: "Presented at ICCET 2026",

      year: "2026",

      description:
        "Designed a multi-agent framework for automated attendance monitoring, shortage detection, and personalized notification management. Developed adaptive dynamic templates and multi-channel communication workflows for automated attendance-related processes",

      technologies: [
        "RelayOS",
        "Workflow Automation",
        "Multi-Agent Systems",
        "AI Automation",
        "Flask",
      ],

      type: "Conference Paper",

      paperUrl: "https://iccet2026.in/",

      icon: <FaBrain className="w-5 h-5" />,
    },

    {
      title:
        "CareerSense AI: A Hybrid Intelligence Engine for Smart Career Path Discovery",

      status: "Under Review for IEEE Conference Publication",

      year: "2026",

      description:
        "Proposed a hybrid intelligence framework for personalized career path discovery using user skills, interests, and academic performance. Applied machine learning and recommendation mechanisms to generate data-driven career path suggestions.",

      technologies: [
        "Machine Learning",
        "Predictive Analytics",
        "Scikit-learn",
        "Recommendation Systems",
      ],

      type: "Conference Paper",

      paperUrl: "https://www.ieee.org/publications-research",

      icon: <FaBookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="research"
      className="py-20 px-6 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FaBookOpen className="w-4 h-4" />
            Research & Publications
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research Contributions
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring Artificial Intelligence, predictive analytics, workflow
            automation, and intelligent recommendation systems through
            research-driven development and publication-oriented projects.
          </p>
        </div>

        {/* Publications */}
        <div className="grid gap-8">
          {publications.map((paper, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up"
            >
              {/* Top */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-5">

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {paper.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-snug">
                      {paper.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <FaCheckCircle className="w-4 h-4 text-primary" />

                      <span className="text-sm text-muted-foreground">
                        {paper.status}
                      </span>

                      <span className="text-sm text-muted-foreground">
                        • {paper.year}
                      </span>
                    </div>
                  </div>
                </div>

                <Badge className="w-fit">{paper.type}</Badge>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {paper.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-6">
                {paper.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Publication Link */}
              <div className="flex flex-wrap gap-4">
                <Button asChild size="sm">
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    View Publication
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 animate-fade-in">

          <div className="p-6 rounded-2xl bg-primary/5 hover-lift transition-smooth text-center">
            <div className="text-3xl mb-3">📄</div>
            <h4 className="font-semibold mb-2">Conference Publications</h4>
            <p className="text-sm text-muted-foreground">
              Research contributions in AI-driven recommendation systems,
              workflow automation, and intelligent decision-support systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 hover-lift transition-smooth text-center">
            <div className="text-3xl mb-3">
              <FaRobot className="mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">AI & Automation Research</h4>
            <p className="text-sm text-muted-foreground">
              Focused on predictive analytics, multi-agent systems, and
              intelligent automation frameworks for real-world applications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-primary/5 hover-lift transition-smooth text-center">
            <div className="text-3xl mb-3">
              <FaRocket className="mx-auto" />
            </div>
            <h4 className="font-semibold mb-2">
              Research-Oriented Development
            </h4>
            <p className="text-sm text-muted-foreground">
              Combining practical implementation with publication-oriented
              research to build scalable and impactful AI solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;