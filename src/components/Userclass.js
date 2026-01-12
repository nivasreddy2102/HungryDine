import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiDjango,
  SiMysql,
} from "react-icons/si";

const AboutMe = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Nivas Reddy",
    location: "India",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://api.github.com/users/nivasreddy9");
      const data = await res.json();
      setUserInfo(data);
    };
    fetchUser();
  }, []);

  const { name, location, avatar_url } = userInfo;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={avatar_url}
            alt={name}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-md object-cover"
          />

          <div className="text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-500 font-medium">{location}</p>

            <p className="text-gray-700 max-w-xl">
              I am a passionate Full Stack Developer with strong experience in
              building responsive, scalable web applications using the MERN
              stack. I enjoy solving real-world problems and writing clean,
              efficient code.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              <a
                href="mailto:nivas@example.com"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <FaEnvelope /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/nivas-reddy-0084ba258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzXdl48PXQeeRmzx6xOaBBA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/nivasreddy2102"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1fAqw9BHNF-SNFNzRRwBOmaDz9ONF9Z6D/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t" />

        {/* Capabilities */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What I Can Do
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li>✔ Build responsive web applications</li>
            <li>✔ Develop REST APIs & authentication</li>
            <li>✔ State management with Redux & Context</li>
            <li>✔ Backend validation & database design</li>
            <li>✔ MERN stack & Django backend development</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            <Skill icon={<FaReact />} label="React" />
            <Skill icon={<FaNodeJs />} label="Node.js" />
            <Skill icon={<SiExpress />} label="Express" />
            <Skill icon={<FaDatabase />} label="MongoDB" />
            <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
            <Skill icon={<FaPython />} label="Python" />
            <Skill icon={<SiDjango />} label="Django" />
            <Skill icon={<SiMysql />} label="SQL" />
          </div>
        </div>

        {/* Career Goal */}
        <div className="mt-10 bg-gray-50 p-5 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-2">Career Goal</h3>
          <p className="text-gray-700">
            Actively seeking an entry-level / junior full-stack developer role
            where I can contribute, learn, and grow as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-gray-200 transition">
    <span className="text-lg">{icon}</span>
    {label}
  </div>
);

export default AboutMe;
