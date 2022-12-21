import { PDFDocument } from 'pdf-lib'

async function readDocumentMetadata(body) {
    const pdfDoc = await PDFDocument.load(body, {
        updateMetadata: false
    })

    return pdfDoc.getSubject();
}

exports.handler = async function (event, context) {

    const pdfArrayBuffer = Buffer.from(event.body, 'base64');

    return await readDocumentMetadata(pdfArrayBuffer);
}