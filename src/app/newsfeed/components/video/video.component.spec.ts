import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPostComponent } from './video.component';

describe('VideoPostComponent', () => {
  let component: VideoPostComponent;
  let fixture: ComponentFixture<VideoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
