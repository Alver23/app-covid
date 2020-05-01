// Dependencies
import { Injectable } from '@angular/core';

// Services
import { CovidService } from '../../services/covid.service';

@Injectable()
export class CasesService {

  constructor(
    private readonly covidService: CovidService,
  ) { }

}
