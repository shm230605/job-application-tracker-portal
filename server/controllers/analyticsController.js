const Application =
  require("../models/Application");

const getAnalytics =
  async (req, res) => {
    try {
      const applications =
        await Application.find(
          {
            user:
              req.user._id,
          }
        );

      const analytics = [
        {
          name: "Applied",

          value:
            applications.filter(
              (
                app
              ) =>
                app.status ===
                "Applied"
            ).length,
        },

        {
          name: "Interview",

          value:
            applications.filter(
              (
                app
              ) =>
                app.status ===
                "Interview"
            ).length,
        },

        {
          name: "Offer",

          value:
            applications.filter(
              (
                app
              ) =>
                app.status ===
                "Offer"
            ).length,
        },

        {
          name: "Rejected",

          value:
            applications.filter(
              (
                app
              ) =>
                app.status ===
                "Rejected"
            ).length,
        },
      ];

      res.json(
        analytics
      );
    } catch (error) {
      res.status(500);

      throw new Error(
        error.message
      );
    }
  };

module.exports = {
  getAnalytics,
};