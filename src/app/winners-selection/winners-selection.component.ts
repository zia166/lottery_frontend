import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';

@Component({
  selector: 'app-winners-selection',
  templateUrl: './winners-selection.component.html',
  styleUrls: ['./winners-selection.component.css']
})
export class WinnersSelectionComponent implements OnInit {
  winners: any[] = [];
  performances: any[] = [];

  constructor(private lotteryService: LotteryService) {}

  ngOnInit(): void {}

  selectWinners(): void {
    this.lotteryService.selectWinners()
      .subscribe((result: any) => {
        if(result['message'] === 'Winners already selected') {
          this.lotteryService.getWinners().subscribe(data => {
            this.winners = data['winners'];
            this.performances=data['performances'][0]['performance_name']
          });
        }else{
          this.lotteryService.getWinners().subscribe(data => {
            this.winners = data['winners'];
            this.performances=data['performances'][0]['performance_name']
           
          });
        }
      });
  }

  Winners(): void {
    this.lotteryService.getWinners().subscribe(data => {
      console.log(data);
    });
  }
}