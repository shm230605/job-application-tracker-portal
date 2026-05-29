import { FaFilePdf } from "react-icons/fa";

const ResumeCard = ({
  resume,
}) => {
  return (
    <div className="bg-slate-800 p-5 rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-4">
        <FaFilePdf className="text-red-500 text-3xl" />

        <div>
          <h3 className="font-bold">
            {
              resume.fileName
            }
          </h3>

          <p className="text-sm text-slate-400">
            Resume File
          </p>
        </div>
      </div>

      <a
        href={resume.fileUrl}
        target="_blank"
        rel="noreferrer"
        className="bg-indigo-500 px-4 py-2 rounded"
      >
        View
      </a>
    </div>
  );
};

export default ResumeCard;