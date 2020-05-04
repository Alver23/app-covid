export interface Items {
  name: string;
  total: number;
}

export interface CasesDeath {
  total: number;
  casesByCity: Items[];
  casesByState: Items[];
}
