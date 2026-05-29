import StatusBadge from "./StatusBadge";

const ApplicationTable = ({
  applications,
  deleteHandler,
  editHandler,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-5">
        <thead>
          <tr className="bg-slate-700">
            <th className="p-3">
              Company
            </th>

            <th className="p-3">
              Role
            </th>

            <th className="p-3">
              Status
            </th>

            <th className="p-3">
              Location
            </th>

            <th className="p-3">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {applications.map(
            (app) => (
              <tr
                key={app._id}
                className="border-b border-slate-700"
              >
                <td className="p-3">
                  {
                    app.companyName
                  }
                </td>

                <td className="p-3">
                  {app.role}
                </td>

                <td className="p-3">
                  <StatusBadge
                    status={
                      app.status
                    }
                  />
                </td>

                <td className="p-3">
                  {
                    app.location
                  }
                </td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() =>
                      editHandler(
                        app
                      )
                    }
                    className="bg-yellow-500 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteHandler(
                        app._id
                      )
                    }
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;