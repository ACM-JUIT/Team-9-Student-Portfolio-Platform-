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

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">UniversityName</label>
          <input
            type="text"
            required
            onChange={(e) => setUniversityName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Course</label>
          <input
            type="text"
            required
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <h2
            className="text-2xl font-bold text-purple-700"
            style={{ color: "purple" }}
          >
            Skills
          </h2>
          <>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="space-y-3 p-4 border border-gray-200 rounded-md relative bg-gray-50"
              >
                {skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSkills(index)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
                    aria-label={`Remove skill ${index + 1}`}
                  >
                    &times;
                  </button>
                )}
                <div>
                  <label className="block font-semibold text-gray-700">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g.,Next.js"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Skill Level
                  </label>
                  <select
                    name="level"
                    value={skill.level}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkills}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add More Skill
            </button>
            <hr className="border-gray-200" />
          </>
          <h2
            className="text-2xl font-bold text-purple-700"
            style={{ color: "purple" }}
          >
            Experience
          </h2>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="space-y-3 p-4 border border-gray-200 rounded-md relative bg-gray-50"
            >
              {experience.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
                  aria-label={`Remove experience ${index + 1}`}
                >
                  &times;
                </button>
              )}
              <div>
                <label className="block font-semibold text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., Frontend Intern"
                  value={exp.title}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g., Google"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Years (e.g., 2)
                </label>
                <input
                  type="number"
                  name="years"
                  placeholder="Years"
                  value={exp.years}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Briefly describe your responsibilities..."
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md min-h-[80px]"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add More Experience
          </button>
        </div>
        <div>
          <label className="block font-semibold">LinkedIn ID</label>
          <input
            type="text"
            onChange={(e) => setLinkedInID(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

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
            >  {projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProjects(index)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
                  aria-label={`Remove project ${index + 1}`}
                >
                  &times;
                </button>
              )}
              <div>
                <label className="block font-semibold text-gray-700">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., E-commerce Website"
                  value={project.title}
                  onChange={(e) => handleProjectsChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Briefly describe your project..."
                  value={project.description}
                  onChange={(e) => handleProjectsChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md min-h-[80px]"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Project Link
                </label>
                <input
                  type="text"
                  name="link"
                  placeholder="e.g., https://github.com/yourproject"
                  value={project.link}
                  onChange={(e) => handleProjectsChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addProjects}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add More Project
          </button>
        </div>


     
    </div>
  );
}
