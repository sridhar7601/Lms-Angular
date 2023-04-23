import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scratch-card',
  templateUrl: './scratch-card.component.html',
  styleUrls: ['./scratch-card.component.css']
})
export class ScratchCardComponent {


  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D | null = null;

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    if (!this.ctx) {
      throw new Error('Failed to get canvas context');
    }

    this.canvasRef.nativeElement.addEventListener('mousemove', (e) => {
      this.draw(e.offsetX, e.offsetY);
    });

    this.canvasRef.nativeElement.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.draw(touch.pageX - this.canvasRef.nativeElement.offsetLeft, touch.pageY - this.canvasRef.nativeElement.offsetTop);
    }, false);

    this.canvasRef.nativeElement.addEventListener('mousedown', () => {
      this.canvasRef.nativeElement.style.cursor = 'pointer';
    });

    this.canvasRef.nativeElement.addEventListener('mouseup', () => {
      this.canvasRef.nativeElement.style.cursor = 'default';
    });

    this.reset();
  }

  draw(x: number, y: number) {
    if (!this.ctx) {
      return;
    }
    this.ctx.beginPath();
    this.ctx.arc(x, y, 20, 0, Math.PI * 2);
    this.ctx.fill();
  }

  reset() {
    if (!this.ctx) {
      return;
    }
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    this.ctx.globalCompositeOperation = 'destination-out';
  }
}
