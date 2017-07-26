/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FipeComponent } from './fipe.component';

describe('FipeComponent', () => {
  let component: FipeComponent;
  let fixture: ComponentFixture<FipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
