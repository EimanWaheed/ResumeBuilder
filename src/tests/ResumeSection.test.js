import { render, waitFor, screen } from "@testing-library/react";
import ResumeSections from "../components/ResumeSectionLayout";

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
  // render the component on virtual dom.
  render(
    <ResumeSections sectionName={"work"} sectionFields={dummySectionFields} />
  );
  const universityField = screen.getByTestId("university");
  const textField = screen.getByTestId("degree");
  const dateField = screen.getByTestId("graduation");

  // Asserting the elements on ResumeSection.
  expect(universityField).toBeInTheDocument();
  expect(textField).toBeInTheDocument();
  expect(dateField).toBeInTheDocument();

  // Asserting the elements having right attributes on ResumeSection.
  expect(universityField).toHaveAttribute("type", "text");
  expect(textField).toHaveAttribute("type", "text");
  expect(dateField).toHaveAttribute("type", "date");

  // Asserting the placeholders values on ResumeSection.
  expect(universityField.placeholder).toBe("Enter University Name");
  expect(textField.placeholder).toBe("Enter Degree");
  expect(dateField.placeholder).toBe("Enter Graduation Date");
});
