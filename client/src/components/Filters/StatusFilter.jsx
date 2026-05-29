const StatusFilter = ({
  status,
  setStatus,
}) => {
  return (
    <select
      value={status}
      onChange={(e) =>
        setStatus(
          e.target.value
        )
      }
      className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-white"
    >
      <option value="">
        All Status
      </option>

      <option value="Applied">
        Applied
      </option>

      <option value="Interview">
        Interview
      </option>

      <option value="Offer">
        Offer
      </option>

      <option value="Rejected">
        Rejected
      </option>

      <option value="OA">
        OA
      </option>
    </select>
  );
};

export default StatusFilter;