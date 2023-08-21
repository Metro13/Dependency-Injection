import ReportGenerator from './IReportGenerator';

export default class GISReportGenerator implements ReportGenerator{
    GenerateReport(data: any): string {
        return "GIS Report: " + data;
    }
}

