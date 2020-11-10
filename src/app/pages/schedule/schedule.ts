import { Component } from '@angular/core';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage {
  public data = Array(20).fill(1);
  public processing = false;

  loadData(event) {
    this.processing = true;

    setTimeout(() => {
      this.processing = false;
      this.data = [...this.data, ...Array(20).fill(1)];
      event.target.complete();
    }, 300);
  }
}
