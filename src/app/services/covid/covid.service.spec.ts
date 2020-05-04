// Dependencies
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Services
import { CovidService } from './covid.service';

describe('CovidService', () => {
  let service: CovidService;
  let httpService: HttpClient;

  const spyHttpClient = () => {
    const mockData = {
      total: 1,
      casesByCity: [],
      casesByState: [],
    }
    return jest.spyOn(httpService, 'get').mockReturnValue(of(mockData));
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject<CovidService>(CovidService);
    httpService = TestBed.inject<HttpClient>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cases confirmed', (done) => {
    const spy = spyHttpClient();
    service.getCases()
      .subscribe(() => {
        expect(spy).toHaveBeenCalled();
        done();
      })
  });

  it('should return cases recovered', (done) => {
    const spy = spyHttpClient();
    service.getCasesRecovered()
      .subscribe(() => {
        expect(spy).toHaveBeenCalled();
        done();
      })
  });

  it('should return cases deaths', (done) => {
    const spy = spyHttpClient();
    service.getCasesDeaths()
      .subscribe(() => {
        expect(spy).toHaveBeenCalled();
        done();
      })
  });
});
