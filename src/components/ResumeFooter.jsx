import React, { useState } from "react";
import PdfContent from "./PdfContent";
import { PDFDownloadLink } from "@react-pdf/renderer";

/**
 *
 * @param {*} pdfContent State Variable of all the pdf content.
 * @param {*} generatePdfContent State handler for generating the updated pdf content.
 * @returns The generated Pdf.
 */
const ResumeFooter = ({ sectionsList, resumeData }) => {
  const [pdfContent, setPdfContent] = useState(null);

  /**
   * Handler to generate PDF for the resume.
   */
  const generatePdfContent = () => {
    setPdfContent(
      <PdfContent
        sectionsList={sectionsList}
        resumeData={resumeData}
      ></PdfContent>
    );
  };

  return (
    <>
      <button className="download-button" onClick={generatePdfContent}>
        Generate PDF
      </button>
      {pdfContent && (
        <PDFDownloadLink document={pdfContent} fileName="resume.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Generating PDF..." : "Download PDF"
          }
        </PDFDownloadLink>
      )}
    </>
  );
};
export default ResumeFooter;
