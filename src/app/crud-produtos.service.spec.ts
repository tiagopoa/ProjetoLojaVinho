import { TestBed, inject } from '@angular/core/testing';

import { CrudProdutosService } from './crud-produtos.service';

describe('CrudProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudProdutosService]
    });
  });

  it('should be created', inject([CrudProdutosService], (service: CrudProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
