import React, { useRef, useCallback } from "react";
import "../styles/globals.css";
import ResumeSection from "./ResumeSection";

/**
 *
 * @param {*} sections The Sections array.
 * @returns The resume layout.
 */
const ResumeSectionLayout = ({
  sections,
  moveSection,
  onHandleInputChange,
}) => {
  return (
    <div>
      {sections.map((section, index) => (
        <ResumeSection
          index={index}
          sectionName={section.sectionName}
          sectionFields={section.sectionFields}
          moveSection={moveSection}
          onHandleInputChange={onHandleInputChange}
        />
      ))}
    </div>
  );
};

export default ResumeSectionLayout;
