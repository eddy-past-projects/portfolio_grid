// import React from 'react';
import '../cssFiles/Resume.css';
// import Pdf from '../../assets/resume.pdf';

// const Resume = () => {
// 	return (
// 		<div className="resume-container">
// 			<a href={Pdf} target="_blank">
// 				Download Pdf
// 			</a>
// 		</div>
// 	);
// };

// export default Resume;
// import React, { Component } from 'react';
// // import './Resume.css';
// // import HeaderComponent from '../../components/Header/Header.js';
// import { Document, Page } from 'react-pdf';
// import resume from '../../assets/resume.pdf';
// // import { Document, Page } from 'react-pdf';

// export default class Resume extends Component {
// 	state = {
// 		pageNumber: 1,
// 		numPages: 1
// 	};

// 	render() {
// 		const { pageNumber, numPages } = this.state;

// 		return (
// 			<div>
// 				{/* <HeaderComponent id="header" location={this.props.location} /> */}
// 				<div>
// 					<h1>Documentation</h1>
// 				</div>
// 				<div id="contentDiv">
// 					<Document file={resume} onLoadSuccess={this.onDocumentLoad}>
// 						<Page pageNumber={pageNumber} />
// 					</Document>
// 					<p>
// 						Page {pageNumber} of {numPages}
// 					</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

import React from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from '../../assets/resume.pdf';

export default function Resume() {
	return (
		<Document file={samplePDF}>
			<Page pageNumber={1} />
		</Document>
	);
}
// export default class DocumentationPage extends Component {
//   state = {
//       numPages: 12,
//       pageNumber: 1,
//     }

//   render() {
//       const { pageNumber, numPages } = this.state;

//       return (
//           <div>
//               <HeaderComponent id='header' location={this.props.location} />
//               <div>
//                   <h1>Documentation</h1>
//               </div>
//               <div id='contentDiv'>
//                   <Document
//                       file={data}
//                       onLoadSuccess={this.onDocumentLoad}>
//                           <Page pageNumber={pageNumber} />
//                   </Document>
//                   <p>Page {pageNumber} of {numPages}</p>
//               </div>
//           </div>
//       );
//   }
// }
