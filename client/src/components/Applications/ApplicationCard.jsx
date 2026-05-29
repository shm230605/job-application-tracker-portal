<div className="mt-3">
  <p className="text-sm">
    ATS Score:
  </p>

import {
  motion,
} from "framer-motion";

import {
  FaMapMarkerAlt,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

const statusColors = {
  Applied:
    "bg-blue-500",

  OA:
    "bg-yellow-500",

  Interview:
    "bg-purple-500",

  Offer:
    "bg-green-500",

  Rejected:
    "bg-red-500",
};

const ApplicationCard = ({
  application,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-700 hover:border-indigo-500"
    >
      {/* ========================= */}
      {/* COMPANY NAME */}
      {/* ========================= */}

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {
              application.companyName
            }
          </h2>

          <div className="flex items-center gap-2 text-slate-400 mt-2">
            <FaBriefcase />

            <span>
              {application.role}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 mt-1">
            <FaMapMarkerAlt />

            <span>
              {
                application.location
              }
            </span>
          </div>
        </div>

        {/* STATUS BADGE */}

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
            statusColors[
              application
                .status
            ]
          }`}
        >
          {
            application.status
          }
        </span>
      </div>

      {/* ========================= */}
      {/* ATS SCORE */}
      {/* ========================= */}

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <p className="text-sm text-slate-300 font-medium">
            ATS Match Score
          </p>

          <p className="text-sm font-bold text-green-400">
            {
              application.atsScore
            }
            %
          </p>
        </div>

        {/* Progress Bar */}

        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${application.atsScore}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="bg-green-500 h-4 rounded-full"
          />
        </div>

        <p className="text-xs text-slate-400 mt-2">
          Resume matches job
          requirements by
          {
            " "
          }
          {
            application.atsScore
          }
          %
        </p>
      </div>

      {/* ========================= */}
      {/* SKILLS */}
      {/* ========================= */}

      <div className="mt-5">
        <p className="text-sm text-slate-300 mb-3 font-medium">
          Extracted Skills
        </p>

        <div className="flex flex-wrap gap-2">
          {application.skills &&
          application.skills.length >
            0 ? (
            application.skills.map(
              (
                skill,
                index
              ) => (
                <span
                  key={
                    index
                  }
                  className="bg-indigo-500/20 border border-indigo-500 text-indigo-300 px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              )
            )
          ) : (
            <span className="text-slate-500 text-sm">
              No skills extracted
            </span>
          )}
        </div>
      </div>

      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}

      <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <FaBuilding />

          <span>
            Job Application
          </span>
        </div>

        <p className="text-xs text-slate-500">
          {new Date(
            application.createdAt
          ).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ApplicationCard;