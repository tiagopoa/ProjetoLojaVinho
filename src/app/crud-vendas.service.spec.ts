import { TestBed, inject } from '@angular/core/testing';

import { CrudVendasService } from './crud-vendas.service';

describe('CrudVendasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudVendasService]
    });
  });

  it('should be created', inject([CrudVendasService], (service: CrudVendasService) => {
    expect(service).toBeTruthy();
  }));
});
