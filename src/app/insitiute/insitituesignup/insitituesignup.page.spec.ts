import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsitituesignupPage } from './insitituesignup.page';

describe('InsitituesignupPage', () => {
  let component: InsitituesignupPage;
  let fixture: ComponentFixture<InsitituesignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsitituesignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsitituesignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
