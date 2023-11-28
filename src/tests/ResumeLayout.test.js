import { render, waitFor, screen } from "@testing-library/react";
import ResumeLayout from "../components/ResumeLayout";

/**
 * Test block for testing the screen elements on ResumeLayout
 */
test("renders ResumeLayout component", () => {
  // render the component on virtual dom.
  render(<ResumeLayout />);
  //   const universityField = screen.getByTestId("university");
  //   const textField = screen.getByTestId("degree");
  //   const dateField = screen.getByTestId("graduation");

  //   // Asserting the elements on ResumeSection.
  //   expect(universityField).toBeInTheDocument();
  //   expect(textField).toBeInTheDocument();
  //   expect(dateField).toBeInTheDocument();

  //   // Asserting the elements having right attributes on ResumeSection.
  //   expect(universityField).toHaveAttribute("type", "text");
  //   expect(textField).toHaveAttribute("type", "text");
  //   expect(dateField).toHaveAttribute("type", "date");

  //   // Asserting the placeholders values on ResumeSection.
  //   expect(universityField.placeholder).toBe("Enter University Name");
  //   expect(textField.placeholder).toBe("Enter Degree");
  //   expect(dateField.placeholder).toBe("Enter Graduation Date");
});
