import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';
import profile3 from '@/assets/profile-3.jpg';
import profile4 from '@/assets/profile-4.jpg';
import profile5 from '@/assets/profile-5.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Madki_Sai_Charan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Madki_Sai_Charan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ---------------- A: Typing Effect ---------------- */
  const roles = [
    'AI & ML Enthusiast',
    'Frontend Developer',
    'Data Analytics Explorer',
    'Research Contributor'
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === current.length) {
          setDeleting(true);
        }
      } else {
        setText(current.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex(index + 1);
        }
      }
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-20 z-10"
      >

      {/* ---------------- B: Animated Gradient Background ---------------- */}
      <div className="absolute inset-0 animated-gradient"></div>

      {/* Floating tech chips */}
      <div className="absolute top-24 left-10 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs animate-float">
        AI / ML
      </div>

      <div className="absolute top-40 right-12 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs animate-float" style={{ animationDelay: '1s' }}>
        React.js
      </div>

      <div className="absolute bottom-24 left-16 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs animate-float" style={{ animationDelay: '2s' }}>
        Python
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ---------------- C: 3D Profile Effect ---------------- */}
            <div className="flex justify-center lg:justify-end perspective">
              <div className="w-72 sm:w-80 max-w-sm transform transition-all duration-700 hover:scale-105 hover:rotate-1">

                <Carousel className="w-full">
                  <CarouselContent>
                    {[profile1, profile2, profile3, profile4, profile5].map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-glow">
                          <img src={img} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

              </div>
            </div>

            {/* TEXT */}
            <div className="text-center lg:text-left">

              <p className="text-lg text-muted-foreground mb-4 animate-fade-in">
                Hello, I'm
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-scale-in">
                Madki Sai Charan
              </h1>

              {/* 🔥 Typing animation */}
              <p className="text-xl md:text-2xl text-primary font-medium mb-6 h-8">
                {text}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Building real-world AI systems, scalable web apps, and intelligent automation solutions
                with Machine Learning and modern frontend engineering.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">

                <button
                  onClick={downloadResume}
                  className="px-6 py-3 rounded-xl bg-primary text-white hover:scale-105 transition flex items-center gap-2"
                >
                  📄 Resume
                </button>

                <button
                  onClick={downloadCV}
                  className="px-6 py-3 rounded-xl bg-primary text-white hover:scale-105 transition flex items-center gap-2"
                >
                  📑 CV
                </button>

                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition flex items-center gap-2"
                >
                  ✉ Contact
                </button>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* floating background glow blobs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>

    </section>
  );
};
export default Hero;