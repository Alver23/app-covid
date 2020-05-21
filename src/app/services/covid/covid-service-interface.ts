
export interface Item {
  name: string;
  total: number;
}

export interface CasesResponse {
  total: number;
  casesByCity: Item[];
  casesByState: Item[];
}

export interface SummaryReport {
  items: Item[];
  recoveredItems: Item[];
  deathsItems: Item[];
}
export interface ReportResponse {
  casesByAge: SummaryReport;
  casesByGender: SummaryReport;
}
