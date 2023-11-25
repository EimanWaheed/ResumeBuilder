import React, { useState, useMemo, useCallback } from "react";
import ResumeSections from "./ResumeSections";
import ResumeHeader from "./ResumeHeader";

const ResumeLayout = () => {
  /**
   * Fields to be displayed for Education Section of resume.
   */
  const educationFields = useMemo(
    () => [
      {
        id: "university",
        type: "text",
        label: "University Name:",
        placeholder: "Enter University Name",
        required: true,
      },
      {
        id: "degree",
        type: "text",
        label: "Degree:",
        placeholder: "Enter Degree",
        required: true,
      },
      {
        id: "graduation",
        type: "date",
        label: "Graduation Date:",
        placeholder: "Enter Graduation Date",
        required: true,
      },
    ],
    []
  );

  /**
   * Fields to be displayed for Work Section of resume.
   */
  const workFields = useMemo(
    () => [
      {
        id: "employer",
        type: "text",
        label: "Current Employer:",
        placeholder: "Enter Company Name",
        required: true,
      },
      {
        id: "position",
        type: "text",
        label: "Position:",
        placeholder: "Current Position:",
        required: true,
      },
      {
        id: "workjoining",
        type: "date",
        label: "Joining Date:",
        placeholder: "Enter Joining Date",
        required: true,
      },
    ],
    []
  );

  /**
   * Fields to be displayed for Achievement Section of resume.
   */
  const achievementFields = useMemo(
    () => [
      {
        id: "achievements",
        placeholder: "Enter your achievements...",
      },
    ],
    []
  );

  const [resumeData, setResumeData] = useState({
    education: {},
    work: {},
    achievements: {},
  });

  /**
   * Setting the form data to be used in creating the PDF version of resume.
   */
  const onHandleInputChange = useCallback(
    (section, fieldId, value) => {
      setResumeData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [fieldId]: value,
        },
      }));
    },
    [setResumeData]
  );

  return (
    <>
      <div style={{ "background-color": "#1f1b1b" }}>
        <ResumeHeader />
        <ResumeSections
          sectionName={"Education"}
          sectionFields={educationFields}
          onChange={(fieldId, value) =>
            onHandleInputChange("education", fieldId, value)
          }
        />
        <ResumeSections
          sectionName={"Work Details"}
          sectionFields={workFields}
          onChange={(fieldId, value) =>
            onHandleInputChange("work", fieldId, value)
          }
        />
        <ResumeSections
          sectionName={"Achievements"}
          sectionFields={achievementFields}
          onChange={(fieldId, value) =>
            onHandleInputChange("achievements", fieldId, value)
          }
        />
        <button className="download-button">Download Resume</button>
      </div>
    </>
  );
};

export default ResumeLayout;
