import ReportGenerator from './IReportGenerator';

export default class PDFReportGenerator implements ReportGenerator {
    GenerateReport(data: any): string {
        return "PDF Report: " + data;
    }
}