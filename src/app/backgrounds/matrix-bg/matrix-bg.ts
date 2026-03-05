import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-matrix-bg',
  standalone: true,
  imports: [],
  templateUrl: './matrix-bg.html',
  styleUrl: './matrix-bg.scss',
})
export class MatrixBg implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationId: any;
  private drops: number[] = [];
  private fontSize = 14;
  private columns = 0;
  private isBrowser: boolean;

  // Символы для матрицы
  private readonly chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private charArray = this.chars.split('');

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initCanvas();
      this.startAnimation();
    }
  }

  ngOnDestroy(): void {
    // Очистка анимации при уничтожении компонента
    if (this.animationId) {
      clearInterval(this.animationId);
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;

    // Устанавливаем размеры канваса равными размеру родителя (или окна)
    canvas.width = parent?.clientWidth || window.innerWidth;
    canvas.height = parent?.clientHeight || window.innerHeight;

    this.ctx = canvas.getContext('2d')!;

    // Пересчитываем колонки и сбрасываем капли
    this.columns = Math.floor(canvas.width / this.fontSize);
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
    }
  }

  private draw(): void {
    if (!this.isBrowser) return;

    // Полупрозрачный черный фон для эффекта шлейфа
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    this.ctx.fillStyle = '#0F0'; // Зеленый цвет текста
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.charArray[Math.floor(Math.random() * this.charArray.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

      // Сброс капли в начало, если она ушла за край + случайность для неравномерности
      if (this.drops[i] * this.fontSize > this.canvasRef.nativeElement.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

  private startAnimation(): void {
    if (!this.isBrowser) return;
    // Используем setInterval как в примере, но сохраняем ID для очистки
    this.animationId = setInterval(() => this.draw(), 33);
  }

  // Обработчик изменения размера окна (Angular way)
  @HostListener('window:resize')
  onResize(): void {
    if (this.isBrowser) {
      this.initCanvas();
    }
  }
}
