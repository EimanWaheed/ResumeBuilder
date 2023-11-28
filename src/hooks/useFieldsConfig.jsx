/**
 * Custom hook for keeping the configurations of all the Resume Fields.
 * @returns resume sections fields.
 */
export const useFieldsConfig = () => {
  /**
   * Fields to be displayed for Education Section of resume.
   */
  const educationFields = [
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
   * Fields to be displayed for Work Section of resume.
   */
  const workFields = [
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
  ];

  /**
   * Fields to be displayed for Achievement Section of resume.
   */
  const achievementFields = [
    {
      id: "achievements",
      placeholder: "Enter your achievements...",
    },
  ];

  return { educationFields, workFields, achievementFields };
};
