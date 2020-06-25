import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsfeedPostCommentComponent } from './newsfeed-post-comment.component';

describe('NewsfeedPostCommentComponent', () => {
  let component: NewsfeedPostCommentComponent;
  let fixture: ComponentFixture<NewsfeedPostCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedPostCommentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsfeedPostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
