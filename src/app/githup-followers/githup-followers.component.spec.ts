import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithupFollowersComponent } from './githup-followers.component';

describe('GithupFollowersComponent', () => {
  let component: GithupFollowersComponent;
  let fixture: ComponentFixture<GithupFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithupFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithupFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
