"use client";
import React, { useState } from "react";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([{ name: "", level: "" }]);
  const [experience, setExperience] = useState([
    { title: "", company: "", description: "" },
  ]);
  const [projects, setProjects] = useState([
    { title: "", link: "", description: "" },
  ]);

  const inputStyle = {
    backgroundColor: "#f3e2eb",
  };

  // Skills Handlers
  const handleAddSkill = () => {
    setSkills([...skills, { name: "", level: "" }]);
  };
  const handleSkillChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  // Experience Handlers
  const handleAddExperience = () => {
    setExperience([...experience, { title: "", company: "", description: "" }]);
  };
  const handleExperienceChange = (index, field, value) => {
    const newExp = [...experience];
    newExp[index][field] = value;
    setExperience(newExp);
  };

  // Project Handlers
  const handleAddProject = () => {
    setProjects([...projects, { title: "", link: "", description: "" }]);
  };
  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  return (
    <div
      className="max-w-2xl mx-auto p-6 rounded shadow"
      style={{
        backgroundColor: "#f3e2eb",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/hexellence.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        opacity: 0.98,
      }}
    >
      <div className="max-w-2xl mx-auto bg-pink-100 p-6 rounded shadow">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6 drop-shadow-lg">
          Edit Profile
        </h2>

        {/* Name */}
        <label className="block font-semibold mb-1">Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          style={inputStyle}
        />

        {/* Email */}
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-6"
          style={inputStyle}
        />

        {/* Skills */}
        <h3 className="text-2xl font-bold text-pink-700 mb-2 drop-shadow-md">
          Skills
        </h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold">Skill Name</label>
            <input
              type="text"
              value={skill.name}
              onChange={(e) =>
                handleSkillChange(index, "name", e.target.value)
              }
              placeholder="e.g., Next.js"
              className="w-full p-2 border rounded mb-2"
              style={inputStyle}
            />
            <label className="block font-semibold">Skill Level</label>
            <select
              value={skill.level}
              onChange={(e) =>
                handleSkillChange(index, "level", e.target.value)
              }
              className="w-full p-2 border rounded"
              style={inputStyle}
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        ))}
        <button
          onClick={handleAddSkill}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 mb-6"
        >
          Add More Skill
        </button>

        {/* Experience */}
        <h3 className="text-2xl font-bold text-pink-700 mb-2 drop-shadow-md">
          Experience
        </h3>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              value={exp.title}
              onChange={(e) =>
                handleExperienceChange(index, "title", e.target.value)
              }
              placeholder="e.g., Frontend Intern"
              className="w-full p-2 border rounded mb-2"
              style={inputStyle}
            />
            <label className="block font-semibold">Company</label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) =>
                handleExperienceChange(index, "company", e.target.value)
              }
              placeholder="e.g., Google"
              className="w-full p-2 border rounded mb-2"
              style={inputStyle}
            />
            <label className="block font-semibold">Description</label>
            <textarea
              value={exp.description}
              onChange={(e) =>
                handleExperienceChange(index, "description", e.target.value)
              }
              placeholder="Describe your work"
              className="w-full p-2 border rounded"
              style={inputStyle}
            />
          </div>
        ))}
        <button
          onClick={handleAddExperience}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 mb-6"
        >
          Add More Experience
        </button>

        {/* Projects */}
        <h3 className="text-2xl font-bold text-pink-700 mb-2 drop-shadow-md">
          Projects
        </h3>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold">Project Title</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
              placeholder="e.g., Portfolio Website"
              className="w-full p-2 border rounded mb-2"
              style={inputStyle}
            />
            <label className="block font-semibold">Project Link</label>
            <input
              type="url"
              value={project.link}
              onChange={(e) =>
                handleProjectChange(index, "link", e.target.value)
              }
              placeholder="https://github.com/..."
              className="w-full p-2 border rounded mb-2"
              style={inputStyle}
            />
            <label className="block font-semibold">Description</label>
            <textarea
              value={project.description}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
              placeholder="Short description"
              className="w-full p-2 border rounded"
              style={inputStyle}
            />
          </div>
        ))}
        <button
          onClick={handleAddProject}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Add More Project
        </button>
      </div>
    </div>
  );
}
