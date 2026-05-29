import { useEffect } from "react";

import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ResumeUpload from "../components/Resume/ResumeUpload";

import ResumeCard from "../components/Resume/ResumeCard";

import {
  getResumes,
} from "../services/uploadService";

const Profile = () => {
  const [resumes, setResumes] =
    useState([]);

  const fetchResumes =
    async () => {
      const data =
        await getResumes();

      setResumes(data);
    };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Profile & Resumes
      </h1>

      <ResumeUpload
        fetchResumes={
          fetchResumes
        }
      />

      <div className="space-y-4">
        {resumes.map(
          (resume) => (
            <ResumeCard
              key={
                resume._id
              }
              resume={
                resume
              }
            />
          )
        )}
      </div>
    </DashboardLayout>
  );
};

export default Profile;