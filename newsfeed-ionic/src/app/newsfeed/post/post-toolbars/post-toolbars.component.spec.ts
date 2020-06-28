import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostToolbarsComponent } from './post-toolbars.component';

describe('NewsfeedPostToolbarsComponent', () => {
  let component: PostToolbarsComponent;
  let fixture: ComponentFixture<PostToolbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostToolbarsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PostToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
