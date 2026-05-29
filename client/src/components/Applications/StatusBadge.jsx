const StatusBadge = ({
  status,
}) => {
  const colors = {
    Applied:
      "bg-blue-500",
    OA:
      "bg-purple-500",
    Interview:
      "bg-orange-500",
    Offer:
      "bg-green-500",
    Rejected:
      "bg-red-500",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;