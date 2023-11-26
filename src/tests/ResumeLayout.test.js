import { render, waitFor, screen } from "@testing-library/react";
import ResumeSections from "../components/ResumeSections";

const dummySectionFields = [
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
];

/**
 * Test block for testing the screen elements on ResumeLayout
 */
test("renders ResumeSection component", () => {
  // render the component on virtual dom
  render(
    <ResumeSections sectionName={"work"} sectionFields={dummySectionFields} />
  );
});
