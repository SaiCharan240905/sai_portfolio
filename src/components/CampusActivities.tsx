import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
  FaUsers,
  FaNewspaper,
  FaHandsHelping,
  FaMicrophone,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaAward,
  FaTrophy,
  FaStar,
  FaBook,
  FaRupeeSign,
  FaMedal,
  FaCalculator
} from "react-icons/fa";

import Compendium from '@/assets/Compendium.png';
import edam from '@/assets/e-dam.png'; 
import Streetcause from '@/assets/Streetcause.png';
import Freshers from '@/assets/Freshers.png';

const CampusActivities = () => {
  const activities = [
    {
      role: 'Head of Reporters domain',
      club: 'The Compendium',
      duration: '2023 - 2025',
      image: Compendium,
      responsibilities: [
        'Led a team of 15+ student reporters covering tech and non-tech events',
        'Published daily campus news and updates across social media platforms',
        'Boosted club engagement by 150% through consistent and compelling content'
      ],
      icon: <FaNewspaper />
    },
    {
      role: 'Student Academic Mentor',
      club: 'e-DAM, IARE',
      duration: '2024 - 2025',
      image: edam,
      responsibilities: [
        'Mentored students in core subjects, simplifying complex technical concepts',
        'Provided academic guidance and project support during workshops and bootcamps',
        'Encouraged peer learning and collaboration through structured mentoring sessions'
      ],
      icon: <FaChalkboardTeacher />
    },
    {
      role: 'Head of Content Writer Department',
      club: 'e-DAM, IARE',
      duration: '2024 - 2025',
      image: edam,
      responsibilities: [
        'Created engaging tech content for social media platforms',
        'Grew social media following by 300% across all platforms',
        'Prepared official documentation for college events and technical workshops'
      ],
      icon: <FaBook />
    },
    {
      role: 'Anchor & Event Organizer',
      club: 'e-DAM, IARE',
      duration: 'Jan 2025',
      image: edam,
      responsibilities: [
        'Anchored Evolve 2025 at Microsoft Office, Hyderabad, engaging speakers and audience throughout the event',
        'Coordinated with industry experts to ensure smooth flow of key sessions and panel discussions',
        'Assisted in organizing awards ceremony and recognition activities for outstanding contributors to the e-DAM community'
      ],
      icon: <FaMicrophone />
    },
    {
      role: 'Event Coordinator & Anchor',
      club: 'Department of CSE - (AI&ML), IARE',
      duration: 'Nov 2024',
      image: Freshers,
      responsibilities: [
        'Coordinated and hosted "EUPHORIA 2024", the official Freshers’ event for the CSE (AI & ML) department',
        'Managed stage flow, performances, and audience engagement as the event anchor',
        'Collaborated with student council and department heads to plan and execute the event successfully'
      ],
      icon: <FaCalendarAlt />
    },
    {
      role: 'Volunteer and Coordinator',
      club: 'Street Cause IARE',
      duration: '2023 - 2024',
      image: Streetcause,
      responsibilities: [
        'led community outreach projects impacting schools and orphanages',
        'Organized social drives and fundraising initiatives across campus',
        'Promoted student leadership through sustainable development efforts'
      ],
      icon: <FaHandsHelping />
    }
  ];

  return (
    <section id="campus" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Campus Activities
            </h2>
            <p className="text-lg text-muted-foreground">
              My leadership journey and contributions to the campus communities
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="hover-lift shadow-medium card-gradient border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.club}
                    className="w-full h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {activity.duration}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg leading-tight flex items-center gap-2">
                    <span className="text-primary">{activity.icon}</span>
                    {activity.role}
                  </CardTitle>
                  <p className="text-primary font-medium">{activity.club}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {activity.responsibilities.map((responsibility, respIndex) => (
                      <li
                        key={respIndex}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1 text-xs">✓</span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Leadership Impact
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Events Organized</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Leadership Roles</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-primary/5 hover-lift transition-smooth">
                <div className="text-3xl font-bold text-primary mb-2 flex justify-center items-center gap-1">
                  <FaRupeeSign /> 3L+
                </div>
                <div className="text-sm text-muted-foreground">Funding Secured</div>
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="mt-12 text-center animate-slide-up">
            <h4 className="text-xl font-semibold mb-6">
              Recognition & Awards
            </h4>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <FaTrophy className="mr-2" /> Best Paper Presentation – ICCET 2026
              </Badge>
              
              <Badge variant="outline" className="px-4 py-2">
                <FaTrophy className="mr-2" /> Academic Excellence Award 2026 – IARE
              </Badge>

              <Badge variant="outline" className="px-4 py-2">
                <FaStar className="mr-2" /> Top Contribution Award 2025 – e-DAM
              </Badge>

              <Badge variant="outline" className="px-4 py-2">
                <FaBook className="mr-2" /> IELTS – Band 7.0
              </Badge>

              <Badge variant="outline" className="px-4 py-2">
                <FaMedal className="mr-2" /> Gold Medal – Level-1 NASO Examination
              </Badge>

              <Badge variant="outline" className="px-4 py-2">
                <FaCalculator className="mr-2" /> Srinivasa Ramanujan Award – Mathematics Olympiad 
              </Badge>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CampusActivities;