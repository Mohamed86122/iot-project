import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dht11TableComponent } from './dht11-table.component';

describe('Dht11TableComponent', () => {
  let component: Dht11TableComponent;
  let fixture: ComponentFixture<Dht11TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dht11TableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dht11TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
