const stages = [
  "Applied",
  "OA",
  "Interview",
  "Offer",
  "Rejected",
];

const KanbanBoard = ({
  applications,
}) => {
  return (
    <div className="grid md:grid-cols-5 gap-5 mt-10">
      {stages.map((stage) => (
        <div
          key={stage}
          className="bg-slate-800 p-4 rounded-xl"
        >
          <h2 className="text-xl font-bold mb-4">
            {stage}
          </h2>

          <div className="space-y-3">
            {applications
              .filter(
                (app) =>
                  app.status ===
                  stage
              )
              .map((app) => (
                <div
                  key={app._id}
                  className="bg-slate-700 p-4 rounded-lg"
                >
                  <h3 className="font-bold">
                    {
                      app.companyName
                    }
                  </h3>

                  <p>
                    {app.role}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;