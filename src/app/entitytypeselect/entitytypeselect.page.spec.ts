import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntitytypeselectPage } from './entitytypeselect.page';

describe('EntitytypeselectPage', () => {
  let component: EntitytypeselectPage;
  let fixture: ComponentFixture<EntitytypeselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitytypeselectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntitytypeselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
