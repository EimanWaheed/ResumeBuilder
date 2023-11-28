import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

/**
 *
 * @param {*} resumeData
 * @returns the downloadable link for the resume.
 */
const PdfContent = ({ sectionsList, resumeData }) => {
  return (
    <Document>
      <Page>
        {sectionsList?.map((section) => {
          return (
            <View>
              <Text>{section.sectionName.toUpperCase()}</Text>
              {Object.entries(resumeData[section.sectionName])?.map(
                ([key, value]) => (
                  <Text key={key}>
                    {key}: {value}
                  </Text>
                )
              )}
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

export default PdfContent;
