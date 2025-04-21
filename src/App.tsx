import { Fragment, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import './index.css';
import Starfield from './Starfield';
import profile from './assets/profile.json';

interface TechStack {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

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
              <Fragment key={key}>
                {profile.techStack[key].map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-700 px-2 py-1 mb-2 rounded-lg shadow-inner"
                  >
                    <p>{tech}</p>
                  </li>
                ))}
              </Fragment>
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
            <Fragment key={job.company}>
              <li key={job.company}>
                <strong>{job.title}</strong>, {job.company}{' '}
                <em>({job.duration})</em>
              </li>
              <li className="mb-4">{job.description}</li>
            </Fragment>
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
          <p key={certificate.title} className="text-sm">
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
