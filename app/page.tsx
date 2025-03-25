import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about" className="relative py-24 bg-gradient-to-b from-black via-dark-900 to-dark-800 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"></div>
          
          {/* Glow effects */}
          <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-purple-500/10 blur-[100px] rounded-full"></div>
          
          <div className="container mx-auto px-4 md:px-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="relative">
                About Me
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-lg mb-6 leading-relaxed">
                I'm a Software Engineer with a Master's degree in Computer Science from the Massachusetts Institute of Technology (MIT).
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                With deep expertise in software architecture, algorithms, and systems design, I excel at solving complex technical challenges and building scalable, high-performance applications.
              </p>
              <p className="text-lg leading-relaxed">
                Despite my achievements, I'm continuously learning and expanding my skillset. I firmly believe that growth in software engineering is a lifelong journey, and I remain dedicated to staying at the cutting edge of technology.
              </p>
              
              <div className="mt-8 p-4 border-l-4 border-gradient-to-b from-blue-400 to-purple-500 bg-white/5 rounded-r-lg">
                <p className="italic text-gray-300">"The best code is no code at all. Every new line of code you willingly bring into the world is code that has to be debugged, code that has to be read and understood, code that has to be supported."</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative py-24 bg-dark-800 overflow-hidden">
          {/* Accent lighting */}
          <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute right-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="relative">
                My Skills
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Algorithms & Data Structures', level: 95 },
                { name: 'Machine Learning', level: 90 },
                { name: 'C/C++', level: 92 },
                { name: 'Python', level: 95 },
                { name: 'System Architecture', level: 88 },
                { name: 'Application Development', level: 90 },
                { name: 'DevOps & CI/CD', level: 85 },
                { name: 'Distributed Systems', level: 83 },
                { name: 'Operating Systems', level: 87 },
                { name: 'Database Systems', level: 85 },
                { name: 'Computer Networks', level: 82 },
                { name: 'Software Testing', level: 88 }
              ].map((skill) => (
                <div key={skill.name} className="group backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="mb-3 flex justify-between items-center">
                    <h3 className="font-medium group-hover:text-gradient transition-all duration-300">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-400"
                      style={{ width: `${skill.level}%`, boxShadow: '0 0 20px rgba(165, 82, 255, 0.4)' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative py-24 bg-gradient-to-b from-dark-800 via-dark-900 to-black overflow-hidden">
          {/* Ambient particles effect (subtle dots) */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animation: `pulse ${Math.random() * 5 + 3}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 md:px-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="relative">
                Featured Projects
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: 'GeoAI Engine', desc: 'Advanced AI system for the game GeoGuessr that analyzes geographical imagery to determine locations with high accuracy.', private: true },
                { title: 'Expo Tools for VSCode', desc: 'Open-source VSCode extension that streamlines React Native and Expo development workflow with powerful productivity features.', private: false, github: 'https://github.com/dunningkrueg/expo-tools' },
                { title: 'ML Research Project', desc: 'Proprietary machine learning framework implementing cutting-edge algorithms for complex pattern recognition and predictive modeling.', private: true }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="group backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
                >
                  <div className="h-60 bg-gradient-to-br from-dark-500 to-dark-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {project.private ? (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-gradient">{project.title}</h3>
                      {project.private ? (
                        <span className="px-2 py-1 text-xs bg-purple-500/20 rounded-full border border-purple-500/30">Private</span>
                      ) : (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{project.desc}</p>
                    <div className="flex space-x-2 flex-wrap gap-2">
                      {index === 0 && (
                        <>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">AI</span>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">C++</span>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">TensorFlow</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">TypeScript</span>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">VSCode</span>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">Extension</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">ML</span>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">C++</span>
                          <span className="px-3 py-1 rounded-full text-xs bg-dark-600 border border-white/5">TensorFlow</span>
                        </>
                      )}
                    </div>
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact" className="relative py-24 bg-dark-800">
          {/* Decorative elements */}
          <div className="absolute right-0 bottom-0 h-80 w-80 bg-purple-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute left-0 top-0 h-80 w-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
          
          <div className="container mx-auto px-4 md:px-10 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="relative">
                Get In Touch
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </span>
            </h2>
            
            <div className="max-w-xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <div className="mb-8">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              dunningkrueg
            </span>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com/dunningkrueg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 flex items-center gap-2 group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="https://x.com/dunningkrueg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 flex items-center gap-2 group">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </a>
          </div>
          
          <p className="text-gray-500">© {new Date().getFullYear()} dunningkrueg. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
