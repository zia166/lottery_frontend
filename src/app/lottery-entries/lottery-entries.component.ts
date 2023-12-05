import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LotteryService } from '../lottery.service';
@Component({
  selector: 'app-lottery-entries',
  templateUrl: './lottery-entries.component.html',
  styleUrls: ['./lottery-entries.component.css']
})
export class LotteryEntriesComponent {
  @Input() title: string = '';
  // @Output() submitLotteryEntry = new EventEmitter<any>();
  Show: any;
  performances: any[] = [];
  Tickets: number = 0;
  ShowName: string = '';
  ShowDate: string = '';
  ShowTime: string = '';
  UserName: string = '';
  ShowId: number = 0;
  lotteryForm: any;
  availableTickets: number = 10;

  constructor(private modalServ: NgbActiveModal, private lotteryService: LotteryService) {}

  ngOnInit(): void {
    this.lotteryService.getPerformances()
      .subscribe(data => {
        this.performances = data;
      });
  }
  cancelModal(): void {
    this.modalServ.dismiss('Done');
  }
  onRegLottery(lotteryForm: any) {
    
    // this.submitLotteryEntry.emit(lotteryForm);
    this.modalServ.close(lotteryForm);

  }
}