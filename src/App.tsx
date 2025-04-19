import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import './index.css';
import Starfield from './Starfield';

interface TechStack {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

const profile = {
  name: 'Serhii Pokrova',
  title: 'Senior Software Engineer',
  location: 'Los Angeles, CA',
  email: 'spokrova@outlook.com',
  phone: '213-500-6526',
  summary: `Senior Software Engineer with over 10 years of diverse IT experience and over 6 years in cloud-based architecture. Practical DevOps experience with AWS. Passionate about solving problems with simple and scalable solutions.`,

  links: {
    github: 'https://github.com/psyx90',
    linkedin: 'https://linkedin.com/in/spokrova',
    resume: 'https://drive.google.com/file/d/1vsz6q_mZKk34tMApp4l2ewdxI9EDPrjn',
    certificates: [
      {
        title: 'Programming in HTML5 with JavaScript and CSS3',
        url: 'https://www.youracclaim.com/badges/32bf2db3-0c99-45c4-9b69-0ddaca267a72',
      },
      {
        title: 'MongoDB for Node.js Developers',
        url: 'https://university.mongodb.com/course_completion/56db83a0-ee72-45ad-bc62-84c2f088/printable',
      },
      {
        title: 'MongoDB Performance',
        url: 'https://university.mongodb.com/course_completion/ba06bafe-1871-42c0-9785-216def5f/printable',
      },
    ],
  },

  techStack: {
    languages: [
      'TypeScript',
      'JavaScript',
      'NodeJS',
      'SQL',
      'HTML',
      'CSS',
      'Java',
    ],
    frameworks: [
      'React',
      'Angular',
      'Redux',
      'RxJS',
      'AgGrid',
      'MUI',
      'Cypress',
      'Spring',
    ],
    // libraries: ['Lodash', 'async.io', 'D3', 'Plotly', 'Socket.IO'],
    databases: ['MongoDB', 'MySQL', 'MsSQL', 'MariaDB', 'Neo4j'],
    tools: ['GitHub', 'JIRA', 'Postman', 'Jenkins', 'Docker', 'AWS', 'Webpack'],
    // other: ['Agile/Scrum', 'CI/CD', 'RESTful', 'Mircoservices', 'WebSockets'],
  },

  education: {
    degree: 'MS & BS in Mechanical Engineering and Robotics',
    institution: 'Oles Honchar Dnipro National University, Ukraine',
    url: 'https://www.dnu.dp.ua/en/physical_and_technical_faculty',
  },

  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Luxoft USA',
      duration: 'Oct 2019 – Present',
      description:
        'Lead React developer and team manager for cloud-based asset management tools.',
    },
    {
      title: 'Senior Software Engineer',
      company: 'Luxoft Eastern Europe Ltd.',
      duration: 'Jan 2018 – Oct 2019',
      description:
        'Built cloud-based SaaS platforms for financial evaluations.',
    },
    {
      title: 'Software Engineer',
      company: 'SoftServe Inc.',
      duration: 'Aug 2016 – Dec 2017',
      description:
        'Developed healthcare applications for dental clinic management.',
    },
    {
      title: 'Software Engineer',
      company: 'Cleveroad Inc.',
      duration: 'Dec 2014 – Jun 2016',
      description:
        'Worked on social mobile apps, regulatory document portals, and event booking portals.',
    },
    {
      title: 'Junior Software Engineer',
      company: 'Various',
      duration: 'Jul 2013 – Dec 2014',
      description:
        'Client-side CMS-based development and custom template/plugin creation.',
    },
  ],
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`flex items-center justify-center px-4 py-12 transition-colors duration-600 font-sans relative overflow-hidden ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <Starfield darkMode={darkMode} starCount={99} nebulaCount={3} />

      <div
        className={`max-w-xl backdrop-blur-lg rounded-2xl shadow-2xl p-8  border border-gray-500`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <h2 className="text-xl mb-2 text-blue-400 font-semibold">
          {profile.title}
        </h2>
        <p
          className={`mb-4 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {profile.summary}
        </p>
        <p className="text-sm mb-1">📍 {profile.location}</p>
        <p className="text-sm mb-1">📧 {profile.email}</p>
        <p className="text-sm mb-4">📱 {profile.phone}</p>

        <div className="flex gap-4 mb-4">
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              className="hover:underline text-blue-600"
            >
              LinkedIn
            </a>
          )}
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              className="hover:underline text-blue-600"
            >
              GitHub
            </a>
          )}
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              target="_blank"
              className="hover:underline text-blue-600"
            >
              Resume
            </a>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
          {(Object.keys(profile.techStack) as (keyof TechStack)[]).map(
            (key) => (
              <>
                {profile.techStack[key].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-700 px-2 py-1 mb-2 rounded-lg shadow-inner"
                  >
                    <p>{tech}</p>
                  </li>
                ))}
              </>
            )
          )}
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Experience</h3>
        <ul
          className={`space-y-1 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {profile.experience.map((job) => (
            <>
              <li key={job.company}>
                <strong>{job.title}</strong>, {job.company}{' '}
                <em>({job.duration})</em>
              </li>
              <li className="mb-4">{job.description}</li>
            </>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Education</h3>
        <p className="text-sm">
          🎓{' '}
          <a
            href={profile.education.url}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            {profile.education.degree}, {profile.education.institution}
          </a>
        </p>
        <h3 className="text-lg font-semibold mt-6 mb-2">Certificates</h3>
        {profile.links.certificates.map((certificate) => (
          <p className="text-sm">
            🎓{' '}
            <a
              href={certificate.url}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {certificate.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
