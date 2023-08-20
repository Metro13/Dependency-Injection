import { ReportService } from "./public/ReportService";
import PDFReport from './public/PDFReport';

const pdfReportGenerator = new PDFReport();
const pdfReportService = new ReportService(pdfReportGenerator);

const data = ["Noel", "2000", "Metro", "4000", "John", "6000"];

pdfReportService.generateReport(data);
