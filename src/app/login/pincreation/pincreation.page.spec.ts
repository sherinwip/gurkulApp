import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PincreationPage } from './pincreation.page';

describe('PincreationPage', () => {
  let component: PincreationPage;
  let fixture: ComponentFixture<PincreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PincreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
