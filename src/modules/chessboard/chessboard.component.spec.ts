import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ChessboardRoutingModule } from './chessboard-routing.module';
import { ChessboardComponent } from './chessboard.component';

describe('ChessboardComponent', () => {
  let component: ChessboardComponent;
  let fixture: ComponentFixture<ChessboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ChessboardComponent
      ],
      imports: [
        CommonModule,
        ChessboardRoutingModule,
        FormsModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChessboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChessboardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ChessboardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container h2')?.textContent).toContain('The Pawn Simulator');
  });

  it('#Check clear button', () => {
    component.initialPosition = '0,0,north,WHITE';
    component.clearBoard();
    expect(component.initialPosition).toEqual('');
  });

  it('#Validate place valid input1', () => {
    component.initialPosition = '0,0,north,WHITE';
    component.placePawns();
    expect(component.isShowError).toEqual(false);
  });

  it('#Validate invalid place input2', () => {
    component.initialPosition = '0,0,Down,Pink';
    component.validatePlace();
    expect(component.isShowError).toEqual(true);
  });

  it('#Validate invalid place input3', () => {
    component.initialPosition = '-1,0,NORTH,WHITE';
    component.validatePlace();
    expect(component.isShowError).toEqual(true);
  });

  it('#Check output for move', () => {
    component.initialPosition = '0,0,north,WHITE';
    component.placePawns();
    component.movePawn();
    component.showReport();
    expect(component.report).toEqual('0,1,NORTH,WHITE');
  });

  it('#Check output2 for left', () => {
    component.initialPosition = '0,0,NORTH,BLACK';
    component.placePawns();
    component.changeDirection(true);
    component.showReport();
    expect(component.report).toEqual('0,0,WEST,BLACK');
  });

  it('#Check output for move-move-move-left-move', () => {
    component.initialPosition = '1,2,EAST,BLACK';
    component.placePawns();
    component.movePawn();
    component.movePawn();
    component.movePawn();
    component.changeDirection(true);
    component.movePawn();
    component.showReport();
    expect(component.report).toEqual('4,3,NORTH,BLACK');
  });
});
