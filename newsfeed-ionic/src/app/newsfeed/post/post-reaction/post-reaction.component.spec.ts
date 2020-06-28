import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostReactionComponent } from './post-reaction.component';

describe('NewsfeedPostReactionComponent', () => {
  let component: PostReactionComponent;
  let fixture: ComponentFixture<PostReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostReactionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PostReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
