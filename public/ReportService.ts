import ReportGenerator from "./IReportGenerator"

export class ReportService {
    private reportGenerator : ReportGenerator;

    constructor(reportGenerator: ReportGenerator){
        this.reportGenerator = reportGenerator;
    }

    generateReport(data: any):void{
        const report = this.reportGenerator.GenerateReport(data);
        console.log(report);
    }
}