import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTileComponent } from './block-tile.component';

describe('BlockTileComponent', () => {
  let component: BlockTileComponent;
  let fixture: ComponentFixture<BlockTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
