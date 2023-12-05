import { Component, ElementRef, HostListener, NgZone, ViewChild } from '@angular/core';
import { CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drawer',
  templateUrl: 'drawer.component.html',
  styleUrls: ['drawer.component.scss'],
})
export class DrawerComponent {
  isDrawerOpen = false;
  private startY: number = 0;
  private readonly MIN_HEIGHT_PERCENTAGE = 30; // Minimum height percentage for the drawer

  @ViewChild('drawer', { static: true }) drawerRef: ElementRef | undefined;

  constructor(private zone: NgZone) {}

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onDragStart(event: CdkDragStart) {
    // Use the event's source element to get the initial Y position
    const elementRect = (event.source.element.nativeElement as HTMLElement).getBoundingClientRect();
    this.startY = elementRect.top + (event.event as TouchEvent).touches[0].clientY;
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onDragMove(event: CdkDragMove) {
    const delta = (event.event as TouchEvent).touches[0].clientY - this.startY;
    this.startY = (event.event as TouchEvent).touches[0].clientY;

    // Update the height of the drawer
    this.updateDrawerHeight(delta);
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  onDragRelease() {
    // Handle drag release if needed
  }

  private updateDrawerHeight(delta: number): void {
    this.zone.run(() => {
      const currentHeight = this.calculateDrawerHeight();
      const newHeight = Math.max(this.MIN_HEIGHT_PERCENTAGE, currentHeight + delta);
      this.setDrawerHeight(newHeight);
    });
  }

  private calculateDrawerHeight(): number {
    const drawerElement = this.drawerRef?.nativeElement as HTMLElement;
    const containerHeight = window.innerHeight;
    const drawerHeight = drawerElement.clientHeight;
    return (drawerHeight / containerHeight) * 100;
  }

  private setDrawerHeight(heightPercentage: number): void {
    const drawerElement = this.drawerRef?.nativeElement as HTMLElement;
    drawerElement.style.height = `${heightPercentage}%`;
  }
}
