import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostSummaryComponent } from './post-summary.component';

describe('NewsfeedPostSummaryComponent', () => {
  let component: PostSummaryComponent;
  let fixture: ComponentFixture<PostSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostSummaryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PostSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
