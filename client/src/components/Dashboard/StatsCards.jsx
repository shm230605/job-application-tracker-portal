const StatsCards = ({
  applications,
}) => {
  const total =
    applications.length;

  const interviews =
    applications.filter(
      (app) =>
        app.status ===
        "Interview"
    ).length;

  const offers =
    applications.filter(
      (app) =>
        app.status ===
        "Offer"
    ).length;

  const rejected =
    applications.filter(
      (app) =>
        app.status ===
        "Rejected"
    ).length;

  const cards = [
    {
      title:
        "Total Applications",

      value: total,

      color:
        "bg-indigo-500",
    },

    {
      title:
        "Interviews",

      value:
        interviews,

      color:
        "bg-yellow-500",
    },

    {
      title: "Offers",

      value: offers,

      color:
        "bg-green-500",
    },

    {
      title:
        "Rejected",

      value:
        rejected,

      color:
        "bg-red-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
      
      {cards.map(
        (
          card,
          index
        ) => (
          <div
            key={index}
            className={`${card.color} p-6 rounded-2xl shadow-lg`}
          >
            <h2 className="text-lg">
              {card.title}
            </h2>

            <p className="text-4xl font-bold mt-3">
              {card.value}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default StatsCards;