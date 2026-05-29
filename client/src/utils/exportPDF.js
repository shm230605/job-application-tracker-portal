import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

export const exportPDF =
  (applications) => {
    const doc =
      new jsPDF();

    doc.text(
      "Job Applications Report",
      14,
      15
    );

    const rows =
      applications.map(
        (app) => [
          app.companyName,
          app.role,
          app.status,
          app.location,
        ]
      );

    autoTable(doc, {
      head: [
        [
          "Company",
          "Role",
          "Status",
          "Location",
        ],
      ],

      body: rows,
    });

    doc.save(
      "applications-report.pdf"
    );
  };