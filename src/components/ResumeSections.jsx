import React, { useRef, useCallback } from "react";
import "../styles/globals.css";

/**
 *
 * @param {*} sectionName The generic section name for the render.
 * @param {*} sectionFields The generic section fields to be rendered against each section.
 * @param {*} onChange The callback function for storing the field values.
 * This component receives The name of section, fields and the callback function as props.
 * @returns The resume builder page.
 */
const ResumeSections = ({ sectionName, sectionFields, onChange }) => {
  /**
   *
   * @param {*} fieldId The generic ID of the field.
   * @param {*} value The Input value associated with the HTML tag.
   */
  const handleFieldChange = useCallback(
    (fieldId, value) => {
      onChange(fieldId, value);
    },
    [onChange]
  );

  return (
    <section>
      <div className="card">
        <h2>{sectionName}</h2>
        {/* Dynamically generating sections */}
        {sectionName === "Achievements"
          ? sectionFields.map((fields) => {
              return (
                <div className="achievements-paragraph">
                  <textarea
                    className="placeholder"
                    placeholder={fields.placeholder}
                    rows="4"
                    cols="50"
                    ref={(inputRef) =>
                      inputRef &&
                      inputRef.addEventListener("input", (e) =>
                        handleFieldChange(fields.id, e.target.value)
                      )
                    }
                  ></textarea>
                </div>
              );
            })
          : sectionFields.map((fields) => {
              return (
                <>
                  <label>{fields.label}</label>
                  <input
                    type={fields.type}
                    id={fields.id}
                    placeholder={fields.placeholder}
                    required={fields.required ?? false}
                    ref={(inputRef) =>
                      inputRef &&
                      inputRef.addEventListener("input", (e) =>
                        handleFieldChange(fields.id, e.target.value)
                      )
                    }
                  />
                </>
              );
            })}
      </div>
    </section>
  );
};

export default ResumeSections;
