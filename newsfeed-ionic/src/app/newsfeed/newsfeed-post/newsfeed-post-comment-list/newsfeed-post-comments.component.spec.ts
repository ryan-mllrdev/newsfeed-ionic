import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsfeedPostCommentListComponent } from './newsfeed-post-comment-list.component';

describe('NewsfeedPostCommentsComponent', () => {
  let component: NewsfeedPostCommentListComponent;
  let fixture: ComponentFixture<NewsfeedPostCommentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsfeedPostCommentListComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsfeedPostCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
