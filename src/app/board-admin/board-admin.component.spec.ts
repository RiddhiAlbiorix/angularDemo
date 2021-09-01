import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdminComponent } from './board-admin.component';
import { HttpClient } from '@angular/common/http';

describe('BoardAdminComponent', () => {
  let component: BoardAdminComponent;
  let fixture: ComponentFixture<BoardAdminComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminComponent ]
    })
    .compileComponents();
  });
  httpClient = TestBed.inject(HttpClient);
  
  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
