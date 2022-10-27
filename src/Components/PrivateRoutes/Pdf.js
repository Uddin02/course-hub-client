import jsPDF from "jspdf";
import React from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../../assets/CourseHub.png";

const Pdf = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { title, duration, course_fee } = courseDetails;
  const pdfGenerate = () => {
    let doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(logo, "PNG", 200, 65, 200, 100);
    doc.text(220, 180, 'Thanks for being with us');
    doc.text(120, 210, `Course Name: ${title}`);
    doc.text(120, 240, `Course Duration: ${duration}`);
    doc.text(120, 270, `Course Fee: ${course_fee}`);
    doc.save("CourseHub.pdf");
  };
  return (
    <div>
      <button onClick={pdfGenerate} className="btn btn-outline btn-primary">
        Download pdf
      </button>
    </div>
  );
};

export default Pdf;
