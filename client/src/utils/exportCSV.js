import Papa from "papaparse";

export const exportToCSV =
  (applications) => {
    const csv =
      Papa.unparse(
        applications
      );

    const blob =
      new Blob([csv], {
        type: "text/csv;charset=utf-8;",
      });

    const url =
      URL.createObjectURL(
        blob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download =
      "applications.csv";

    link.click();
  };