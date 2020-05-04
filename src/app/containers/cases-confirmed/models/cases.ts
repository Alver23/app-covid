export interface Items {
  name: string;
  total: number;
}

export interface CasesConfirmed {
  total: number;
  casesByCity: Items[];
  casesByState: Items[];
}
