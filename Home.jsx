import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";



function Home() {
  return (
    <>
      <div className="flex items-center space-x-2 bg-gray-100">
        <div className="w-1/2 pl-3 pt-15 space-y-2">
          <h1 className="text-2xl">Welcome In My Feed</h1>
          <h1 className="text-3xl space-x-2 flex">
           <div>Hello, I'm a </div> 
           <div className="text-red-600"><ReactTyped
              startWhenVisible
              strings={[
                " Developer",
                " Coder",
                " Learner"
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop={true}
            /></div>
            
          </h1>
          <p className="text-justify">
            Full Stack Developer proficient in Python, JavaScript, and modern
            frameworks like Django and React. Strong understanding of RESTful
            APIs, cloud services (Firebase), and database management (SQL).
            Experienced in AI-powered web applications, cybersecurity, and
            DevOps tools. Ranked top 5% in Core Java (NPTEL) and globally 2% on
            TryHackMe. Passionate about scalable, secure, and high performance
            solutions.
          </p>



          <br />
          <div className="space-y-4">
          <h2 className="text-3xl font-bold mb-4">Available At:</h2>
           <div className="text-orange-600"><ReactTyped
              startWhenVisible
              strings={[
                " Linkedin",
                " Github",
                " Youtube"
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop={true}
            /></div>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/saurabh-hardel-3bb954351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/saurabh5286">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-end ">
          <img className="w-90 h-90 pr-5 pt-3 shadow-[0_10px_30px_rgba(34,197,94,0.6)] rounded-full" src="/user.jpg" alt="" />
        </div>
      </div>

    {/* Projects Section */}
<section className="mt-10">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ul className="list-disc pl-5 space-y-3">
              {[
                { id: 1, name: "Portfolio Website", description: "A personal portfolio to showcase my work." },
                { id: 2, name: "E-commerce App", description: "An online shopping platform." },
                { id: 3, name: "Weather App", description: "A weather forecasting application." },
              ].map((project) => (
                <li key={project.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>




{/* Certificates Section */}
<section className="mt-10">
            <h2 className="text-3xl font-bold mb-4">Certificates</h2>
            <ul className="list-disc pl-5 space-y-3">
              {[
                { id: 1, title: "Core Java (NPTEL)", description: "Ranked in the top 5%." },
                { id: 2, title: "TryHackMe", description: "Ranked globally in the top 2%." },
                { id: 3, title: "Full Stack Development Bootcamp", description: "Completed with distinction." },
              ].map((certificate) => (
                <li key={certificate.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{certificate.title}</h3>
                  <p className="text-gray-700">{certificate.description}</p>
                </li>
              ))}
            </ul>
          </section>

{/* Contact Section */}
<section className="mt-10">
  <h2 className="text-3xl font-bold mb-4">Contact</h2>
  <ul className="list-disc pl-5 space-y-3">
  <p className="text-gray-700 mb-4">
    Feel free to reach out to me via the following platforms:
  </p>
  <div className="flex space-x-3 bg-gray-200 p-4 rounded-lg shadow-md">
              <a href="https://www.linkedin.com/in/saurabh-hardel-3bb954351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/saurabh5286">
                <FaGithub size={20} />
              </a>
              <a href="mailto:saurabhhardel5286@gmail.com" className="text-blue-600">
      <span>Email Me</span>
    </a>
            </div>
    
  </ul>
</section>

   </>
  );
}




export default Home;