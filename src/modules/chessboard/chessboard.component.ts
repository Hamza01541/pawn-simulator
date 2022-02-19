import { Component } from '@angular/core';

@Component({
  selector: 'app-chessboard-root',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
})
export class ChessboardComponent {
  initialPosition: string = '';
  selectedColor: string = '';
  selectedFace: string = '';
  report: string = '';
  isShowError: boolean = false;
  isPawnPlaced: boolean = false;
  poleDirection = {
    north: 'north',
    south: 'south',
    east: 'east',
    west: 'west',
  };
  currentPosition = {
    X: 0,
    Y: 0,
    face: '',
    color: '',
  };

  constructor() {

  }

  /**
   * Places Pawn on board.
   * @returns {void}
   */
  placePawns(): void {
    const inputParts = this.initialPosition.split(',');
    this.currentPosition.X = Number(inputParts[0]);
    this.currentPosition.Y = Number(inputParts[1]);
    this.currentPosition.face = inputParts[2]?.toLowerCase();
    this.currentPosition.color = inputParts[3].toLowerCase();

    if (!this.validatePlace()) {
      this.clearBoard();
      return;
    }

    this.isPawnPlaced = true;
  }

  /**
   * Moves the pawn one unit forward in the direction it is currently facing.
   * @returns {void}
   */
  movePawn(): void {
    const moveCount = 1;
    if (this.currentPosition.X < 7 && this.currentPosition.Y < 7) {
      switch (this.currentPosition.face) {
        case this.poleDirection.north:
          this.currentPosition.Y = this.currentPosition.Y + moveCount;
          break;
        case this.poleDirection.west:
          this.currentPosition.X = this.currentPosition.X - moveCount;
          break;
        case this.poleDirection.east:
          this.currentPosition.X = this.currentPosition.X + moveCount;
          break;
        case this.poleDirection.south:
          this.currentPosition.Y = this.currentPosition.Y - moveCount;
          break;

        default:
          break;
      }
    } else {
      return;
    }
  }

  /**
   * Clears board inputs.
   * @returns {void}
   */
  clearBoard(): void {
    this.report = '';
    this.initialPosition = '';
    this.isPawnPlaced = false;
    this.currentPosition = {
      X: 0,
      Y: 0,
      face: '',
      color: ''
    };
  }

  /**
   * Changes Pawn's current direction to 90deg left/right.
   * @param {boolean} direction Left or right Direction where pawn's face need to be rotated in 90deg.
   * @returns {void}
   */
  changeDirection(isLeftDirection: boolean): void {
    if (isLeftDirection) {
      switch (this.currentPosition.face) {
        case this.poleDirection.north:
          this.selectedFace = this.poleDirection.west;
          break;
        case this.poleDirection.west:
          this.selectedFace = this.poleDirection.south;
          break;
        case this.poleDirection.south:
          this.selectedFace = this.poleDirection.east;
          break;
        case this.poleDirection.east:
          this.selectedFace = this.poleDirection.north;
          break;

        default:
          break;
      }
    } else {
      switch (this.currentPosition.face) {
        case this.poleDirection.north:
          this.selectedFace = this.poleDirection.east;
          break;
        case this.poleDirection.east:
          this.selectedFace = this.poleDirection.south;
          break;
        case this.poleDirection.south:
          this.selectedFace = this.poleDirection.west;
          break;
        case this.poleDirection.west:
          this.selectedFace = this.poleDirection.north;
          break;

        default:
          break;
      }
    }

    this.currentPosition.face = this.selectedFace;
  }

  /**
   * Validates pawn's place.
   * Shows error message if input is invalid.
   * @returns {boolean}
   */
  validatePlace(): boolean {
    if ((this.currentPosition.X < 0 && this.currentPosition.X > 8)
      || (this.currentPosition.Y < 0 && this.currentPosition.Y > 8)
      || (this.currentPosition.color !== 'white' && this.currentPosition.color !== 'black')
      || !this.poleDirection.hasOwnProperty(this.currentPosition.face)) {
      this.isShowError = true;
      return false;
    } else {
      this.isShowError = false;
      return true;
    }
  }

  /**
   * Shows report.
   * @returns {void}
   */
  showReport(): void {
    this.report = `${this.currentPosition.X},${this.currentPosition.Y},${this.currentPosition.face.toUpperCase()},${this.currentPosition.color.toUpperCase()}`;
  }
}
