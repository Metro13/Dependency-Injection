import ReportGenerator from './IReportGenerator';

export default class ExcelReportGenerator implements ReportGenerator{
    GenerateReport(data: any): string {
        return "GIS Report: " + data;
    }
}

