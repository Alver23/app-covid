export interface Items {
  name: string;
  total: number;
}

export interface CasesRecovered {
  total: number;
  casesByCity: Items[];
  casesByState: Items[];
}
