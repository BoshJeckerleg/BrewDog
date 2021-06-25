import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementIntersectionDirective } from './element-intersection.directive';

@Component({
  selector: 'app-test',
  template: '<div appElementIntersection (handleElementIntersection)="handleElementIntersection()"></div>'
})
export class TestComponent {
  public handleElementIntersection = (): void => {};
}

describe('ElementIntersectionDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, ElementIntersectionDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
