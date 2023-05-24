import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BandeDessinerComponent } from './bande-dessiner.component';
import { AppComponent } from '../app.component';

describe('BandeDessinerComponent', () => {
  let component: BandeDessinerComponent;
  let fixture: ComponentFixture<BandeDessinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeDessinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeDessinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
