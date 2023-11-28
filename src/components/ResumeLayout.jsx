import React, { useCallback, useRef } from "react";
import { useFieldsConfig } from "../hooks/useFieldsConfig";
import ResumeSections from "./ResumeSections";
import ResumeHeader from "./ResumeHeader";
import ResumeFooter from "./ResumeFooter";

const ResumeLayout = () => {
  const { educationFields, workFields, achievementFields } = useFieldsConfig();

  /**
   * Input refs associated with each section of resume.
   */
  const resumeInputRefs = useRef({
    education: {},
    work: {},
    achievements: {},
  });

  /**
   * Setting the form data to be used in creating the PDF version of resume.
   */
  const onHandleInputChange = useCallback(
    (section, fieldId, value) => {
      resumeInputRefs.current[section] = {
        ...resumeInputRefs.current[section],
        [fieldId]: value,
      };
    },
    [resumeInputRefs]
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
        {/* Section for Resume Footer */}
        <ResumeFooter resumeData={resumeInputRefs.current}></ResumeFooter>
      </div>
    </>
  );
};

export default ResumeLayout;
