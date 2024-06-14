// import generatePDF, { Resolution, Margin } from "react-to-pdf";

// export const Component = () => {
//   let n = "indra";
//   const options = {
//     // default is `save`
//     method: "open",
//     // default is Resolution.MEDIUM = 3, which should be enough, higher values
//     // increases the image quality but also the size of the PDF, so be careful
//     // using values higher than 10 when having multiple pages generated, it
//     // might cause the page to crash or hang.
//     resolution: Resolution.HIGH,
//     page: {
//       // margin is in MM, default is Margin.NONE = 0
//       margin: Margin.SMALL,
//       // default is 'A4'
//       format: "letter",
//       // default is 'portrait'
//       orientation: "landscape",
//     },
//     canvas: {
//       // default is 'image/jpeg' for better size performance
//       mimeType: "image/png",
//       qualityRatio: 1,
//     },
//     // Customize any value passed to the jsPDF instance and html2canvas
//     // function. You probably will not need this and things can break,
//     // so use with caution.
//     overrides: {
//       // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
//       pdf: {
//         compress: true,
//       },
//       // see https://html2canvas.hertzen.com/configuration for more options
//       canvas: {
//         useCORS: true,
//       },
//     },
//   };

//   // you can use a function to return the target element besides using React refs
//   const getTargetElement = () => document.getElementById("content-id");
//   return (
//     <div>
//       <button onClick={() => generatePDF(getTargetElement, options)}>
//         Generate PDF
//       </button>
//       <div id="content-id">Content to be generated to PDF {n}</div>
//     </div>
//   );
// };

import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const Component = () => {
  const generatePDFBase64 = async () => {
    const input = document.getElementById("content-id");

    const canvas = await html2canvas(input, {
      useCORS: true, // This will handle CORS if your content has external images
      scale: 2, // Adjusts the resolution/scale of the canvas output
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "letter",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    const pdfBase64String = pdf.output("datauristring");

    console.log(pdfBase64String); // You can handle the base64 string (e.g., send it to a server or store it)
  };

  return (
    <div>
      <button onClick={generatePDFBase64}>
        Generate PDF and Convert to Base64
      </button>
      <div id="content-id" style={{ width: "210mm", height: "297mm" }}>
        Content to be generated to PDF
      </div>
    </div>
  );
};
