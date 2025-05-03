"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Briefcase, GraduationCap, Code, Award } from "lucide-react"

export default function Resume() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setVisible(true)
    }
  }, [inView])

  return (
    <section id="resume-section" ref={ref} className="py-20 md:py-32 px-4 bg-dark">
      <div className="container-custom">
        <div
          className={`transition-all duration-1000 transform ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm uppercase tracking-widest mb-2">Experience</span>
            <h2 className="heading-lg text-white">My Resume</h2>
            <div className="gradient-line mx-auto" style={{ maxWidth: "200px" }}></div>
          </div>

          <div className="grid gap-10">
            {/* Education Section */}
            <div className="card hover-lift">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold uppercase text-white accent-line inline-block">Education</h3>
              </div>

              <div className="ml-2 pl-6 border-l border-primary">
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">Atlas Schools</h4>
                    <span className="text-primary text-sm font-medium">April 2023 - April 2025</span>
                  </div>
                  <p className="text-light/80 mb-2">Diploma in Computer Science and Full-Stack Web Development</p>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>Completed coursework in JavaScript, React, Node.js, and RESTful API development</li>
                    <li>Specialized in building scalable applications and agile methodologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="card hover-lift">
              <div className="flex items-center mb-6">
                <Briefcase className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold uppercase text-white accent-line inline-block">Experience</h3>
              </div>

              <div className="ml-2 pl-6 border-l border-primary">
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">Builders and Backers Idea Accelerator</h4>
                    <span className="text-primary text-sm font-medium">Oct 2024 - Present</span>
                  </div>
                  <p className="text-light/80 mb-2 font-medium">Builder</p>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>Secured Pebble Fund funding to test and refine an entrepreneurial concept</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">The Vanguard</h4>
                    <span className="text-primary text-sm font-medium">August 2018 - Present</span>
                  </div>
                  <p className="text-light/80 mb-2 font-medium">Stage Tech, Security, Bartender</p>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>
                      Implemented proactive communication strategies with patrons, leading to 75% decrease in
                      confrontations during high-traffic events
                    </li>
                    <li>Assembling and disassembling stages, sets, and props</li>
                    <li>Working with production teams, musicians, and performers to meet audio needs</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">American Solera</h4>
                    <span className="text-primary text-sm font-medium">March 2023 - Oct 2024</span>
                  </div>
                  <p className="text-light/80 mb-2 font-medium">Bartender</p>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>Provided high-quality customer service in a fast-paced environment</li>
                    <li>Increased drink sales by 20% through upselling and recommending seasonal menu items</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">Brewtru</h4>
                    <span className="text-primary text-sm font-medium">May 2022 - April 2023</span>
                  </div>
                  <p className="text-light/80 mb-2 font-medium">Gas and Tap Engineer</p>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>Maintained critical equipment, ensuring 99% uptime for production operations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="card hover-lift">
              <div className="flex items-center mb-6">
                <Code className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold uppercase text-white accent-line inline-block">Projects</h3>
              </div>

              <div className="ml-2 pl-6 border-l border-primary">
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">Rippl</h4>
                    <span className="text-primary text-sm font-medium">March 2024 - April 2024</span>
                  </div>
                  <p className="text-light/80 mb-2 font-medium">Capstone Project</p>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>
                      Led project management for a team of developers, completing the entire application in just 3 weeks
                    </li>
                    <li>
                      Developed a mobile application that reconnects people through shared interests using digital
                      spaces
                    </li>
                    <li>Implemented Supabase for backend services, authentication, and real-time data</li>
                    <li>Coordinated daily stand-ups and sprint reviews to maintain project momentum</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">Hobby Hop</h4>
                    <span className="text-primary text-sm font-medium">Aug 2024 - October 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>
                      Developed a social media platform integrating React for UI and Firebase for backend operations
                    </li>
                    <li>Designed dynamic interfaces to enhance user interaction and engagement</li>
                    <li>Achieved a 25% reduction in database query times by optimizing Firebase structure</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-white">Rue's Run Farms</h4>
                    <span className="text-primary text-sm font-medium">April 2024 - May 2024</span>
                  </div>
                  <ul className="list-disc list-inside text-light/80 space-y-1">
                    <li>Built responsive websites with HTML, CSS, and JavaScript, enhancing customer engagement</li>
                    <li>Added interactive design elements to improve user navigation and satisfaction</li>
                    <li>Worked with client regularly to ensure the desired outcome was present</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="card hover-lift">
              <div className="flex items-center mb-6">
                <Award className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold uppercase text-white accent-line inline-block">Skills</h3>
              </div>

              <div className="ml-2 pl-6 border-l border-primary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-primary">Programming Languages</h4>
                    <p className="text-light/80">JavaScript, React, Typescript, React Native, Expo, Tailwind HTML, CSS, Express, Firebase, Node.js</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-primary">Software</h4>
                    <p className="text-light/80">Photoshop, Illustrator, Figma, VS Code, Docker, Git, Wix</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-primary">Technical</h4>
                    <p className="text-light/80">UI/UX Design, RESTful APIs, Agile, Scrum</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-primary">Certification & Training</h4>
                    <p className="text-light/80">Diploma in Computer Science and Full-Stack Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
