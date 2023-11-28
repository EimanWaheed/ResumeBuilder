import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

/**
 *
 * @param {*} resumeData
 * @returns the downloadable link for the resume.
 */
const PdfContent = ({ resumeData }) => {
  return (
    <Document>
      <Page>
        <View>
          <Text>Education</Text>
          {Object.entries(resumeData.education)?.map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
        <View>
          <Text>Work Details</Text>
          {Object.entries(resumeData.work)?.map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
        <View>
          <Text>Achievements</Text>
          {Object.entries(resumeData.achievements)?.map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PdfContent;
