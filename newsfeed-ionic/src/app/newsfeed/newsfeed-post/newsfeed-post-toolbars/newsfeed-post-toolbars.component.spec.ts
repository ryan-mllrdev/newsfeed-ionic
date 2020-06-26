import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsfeedPostToolbarsComponent } from './newsfeed-post-toolbars.component';

describe('NewsfeedPostToolbarsComponent', () => {
  let component: NewsfeedPostToolbarsComponent;
  let fixture: ComponentFixture<NewsfeedPostToolbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPostToolbarsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsfeedPostToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
