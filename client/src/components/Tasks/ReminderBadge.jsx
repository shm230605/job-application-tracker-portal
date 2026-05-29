const ReminderBadge = ({
  dueDate,
}) => {
  const today =
    new Date();

  const taskDate =
    new Date(dueDate);

  const diff =
    Math.ceil(
      (taskDate -
        today) /
        (1000 *
          60 *
          60 *
          24)
    );

  return (
    <div>
      {diff <= 1 ? (
        <span className="bg-red-500 text-xs px-2 py-1 rounded-full">
          Due Soon
        </span>
      ) : (
        <span className="bg-green-500 text-xs px-2 py-1 rounded-full">
          Scheduled
        </span>
      )}
    </div>
  );
};

export default ReminderBadge;