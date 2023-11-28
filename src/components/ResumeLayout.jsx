import React, { useCallback, useRef, useState } from "react";
import { useFieldsConfig } from "../hooks/useFieldsConfig";
import ResumeSectionLayout from "./ResumeSectionLayout";
import ResumeHeader from "./ResumeHeader";
import ResumeFooter from "./ResumeFooter";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ResumeLayout = () => {
  const { educationFields, workFields, achievementFields } = useFieldsConfig();
  const [sectionsList, setSectionOrder] = useState([
    { sectionName: "education", sectionFields: educationFields },
    { sectionName: "work", sectionFields: workFields },
    { sectionName: "achievements", sectionFields: achievementFields },
  ]);

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

  /**
   * Adds section from FromIndex to the ToIndex to reorder the elements.
   * @param {*} fromIndex
   * @param {*} toIndex
   */
  const moveSection = (fromIndex, toIndex) => {
    const newOrder = [...sectionsList];
    newOrder.splice(toIndex, 0, newOrder.splice(fromIndex, 1)[0]);
    setSectionOrder(newOrder);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ "background-color": "#1f1b1b" }}>
        <ResumeHeader />

        <ResumeSectionLayout
          sections={sectionsList}
          moveSection={moveSection}
          onHandleInputChange={onHandleInputChange}
        />

        {/* Section for Resume Footer */}
        <ResumeFooter
          sectionsList={sectionsList}
          resumeData={resumeInputRefs.current}
        ></ResumeFooter>
      </div>
    </DndProvider>
  );
};

export default ResumeLayout;
