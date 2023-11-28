import React, { useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";

/**
 *
 * @param {*} sectionName The generic section name for the render.
 * @param {*} sectionFields The generic section fields to be rendered against each section.
 * @param {*} index The unique index for each section.
 * @param {*} moveSection The handler for moving the sections of resume.
 * @param {*} onHandleInputChange The callback function for storing the field values.
 * This component receives The name of section, fields and the callback function as props.
 * @returns The resume builder page.
 */
const ResumeSection = ({
  sectionName,
  sectionFields,
  index,
  moveSection,
  onHandleInputChange,
}) => {
  /**
   *
   * @param {*} fieldId The generic ID of the field.
   * @param {*} value The Input value associated with the HTML tag.
   */
  const handleFieldChange = useCallback(
    (section, fieldId, value) => {
      onHandleInputChange(section, fieldId, value);
    },
    [onHandleInputChange]
  );

  //using React drag and drop hook.
  const [, drag] = useDrag({
    type: "SECTION",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "SECTION",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSection(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <section ref={(node) => drag(drop(node))}>
      <div className="card">
        <h2>{sectionName.toUpperCase()}</h2>
        {sectionName === "Achievements"
          ? sectionFields.map((fields, index) => (
              <div key={index} className="achievements-paragraph">
                <textarea
                  className="placeholder"
                  placeholder={fields.placeholder}
                  rows="4"
                  cols="50"
                  ref={(inputRef) =>
                    inputRef &&
                    inputRef.addEventListener("input", (e) =>
                      handleFieldChange(sectionName, fields.id, e.target.value)
                    )
                  }
                ></textarea>
              </div>
            ))
          : sectionFields.map((fields, index) => (
              <div key={index}>
                <label>{fields.label}</label>
                <input
                  type={fields.type}
                  id={fields.id}
                  data-testid={fields.id}
                  placeholder={fields.placeholder}
                  required={fields.required ?? false}
                  ref={(inputRef) =>
                    inputRef &&
                    inputRef.addEventListener("input", (e) =>
                      handleFieldChange(sectionName, fields.id, e.target.value)
                    )
                  }
                />
              </div>
            ))}
      </div>
    </section>
  );
};
export default ResumeSection;
