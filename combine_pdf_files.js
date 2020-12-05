const fs = require('fs');
const {PDFDocument} = require('pdf-lib');

const PDF_FILE_INFORMATION = {
	name: "1pdf_combined.pdf",
	title: "Combined PDF file",
	keywords: ['combined', 'merged', 'pdf', 'file'],
	author: "1pdf (https://github.com/yifaneye/1pdf)"
};

async function combine() {
	// Get PDF files in the directory
	const filesInDir = fs.readdirSync(process.cwd()) || [];
	let pdfFiles = filesInDir.filter(file => file.endsWith(".pdf"));
	console.log(`\n\n🔍 Found ${pdfFiles.join(', ')}\n`);

	// Create new PDF file
	const newPdfFile = await PDFDocument.create();
	newPdfFile.setCreationDate(new Date());
	console.log(`📄 Created ${PDF_FILE_INFORMATION.name}\n`);

	// Copy each page of each PDF file to the newly created PDF file
	for (const pdfFile of pdfFiles) {
		const curPdfFile = await PDFDocument.load(fs.readFileSync(pdfFile));
		const pdfFilePages = await newPdfFile.copyPages(curPdfFile, curPdfFile.getPageIndices());
		pdfFilePages.forEach((page) => newPdfFile.addPage(page));
		console.log(`📑 Copied ${pdfFile} in`);
	}

	// Set new PDF document metadata
	newPdfFile.setTitle(PDF_FILE_INFORMATION.title);
	newPdfFile.setSubject(PDF_FILE_INFORMATION.title);
	newPdfFile.setKeywords(PDF_FILE_INFORMATION.keywords);
	newPdfFile.setAuthor(PDF_FILE_INFORMATION.author);
	newPdfFile.setProducer(PDF_FILE_INFORMATION.author);
	newPdfFile.setCreator(PDF_FILE_INFORMATION.author);
	newPdfFile.setModificationDate(new Date());

	// Save Document
	const pdfBytes = await newPdfFile.save();
	fs.writeFileSync(`${process.cwd()}/${PDF_FILE_INFORMATION.name}`, pdfBytes);
	console.log(`\n💾 Saved ${PDF_FILE_INFORMATION.name}\n`);
}

exports.combinePDFFiles = combine;
