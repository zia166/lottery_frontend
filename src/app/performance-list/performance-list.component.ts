import { Component, OnInit} from '@angular/core';
import { LotteryService } from '../lottery.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LotteryEntriesComponent } from '../lottery-entries/lottery-entries.component';
@Component({
  selector: 'app-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.css']
})
export class PerformanceListComponent implements OnInit {
  performances: any[] = [];
  lotteryEntries: any[] = [];
  
  constructor(private lotteryService: LotteryService,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getPerformances();
    this.getLotteryEntries();
  }

  getPerformances(): void {
    this.lotteryService.getPerformances()
      .subscribe(data => {
        this.performances = data;
      });
  }
  getLotteryEntries(): void {
    this.lotteryService.lotteryEntriesList()
      .subscribe(data => {
        this.lotteryEntries = data;
      });
  }
  
  
 enterLottery() {
   const modalRef = this.modalService.open(LotteryEntriesComponent, { size: 'lg', centered: true, animation: true });
   modalRef.componentInstance.title = 'Enter Lottery';
   modalRef.result.then((result) => {
     if (result) {
       // Handle modal success
       console.log("Hi",result);
      //  this.OutputArray.push(result);
       this.lotteryService.lotteryEntries(result).subscribe(data => {
         console.log(data);
         this.getLotteryEntries();
       },
       error => {
         console.log(error);
       })
     }
   });
 }
 deleteEntry(user: any) {
   console.log(user);
   this.lotteryService.deleteEntry(user).subscribe((data) => {
     console.log(data);
     this.getLotteryEntries();
   },
   error => {
     console.log(error);
   })
 }
  //  need to close modal when enter lottery

  
  
  // Close the modal when entering the lottery

}