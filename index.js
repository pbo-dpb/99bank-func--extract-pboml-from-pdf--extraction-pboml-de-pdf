import { PDFDocument } from 'pdf-lib'

async function readDocumentMetadata(body) {
    const pdfDoc = await PDFDocument.load(body, {
        updateMetadata: false
    })

    return pdfDoc.getSubject();
}

exports.handler = async function (event, context) {

    return await readDocumentMetadata(event.body);
}