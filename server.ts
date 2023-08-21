import { ReportService } from "./public/ReportService";
import GISReport from './public/GISReport';

const GISReportGenerator = new GISReport();
const GISReportService = new ReportService(GISReportGenerator);

const data = ["Noel", "Metro", "John"];

GISReportService.generateReport(data);
