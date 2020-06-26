import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsfeedPostCommentsComponent } from './newsfeed-post-comments.component';

describe('NewsfeedPostCommentsComponent', () => {
  let component: NewsfeedPostCommentsComponent;
  let fixture: ComponentFixture<NewsfeedPostCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPostCommentsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsfeedPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
