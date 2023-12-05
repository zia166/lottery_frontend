import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getPerformances(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/performances`);
  }

  getWinners(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/winners`);
  }
  selectWinners(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/winners/select`, {});
  }

  notifyWinners(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/winners/notify`, {});
  }
  lotteryEntries(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/lottery_entries`, payload);
  }
  lotteryEntriesList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lottery_entries`);
  }
  purchaseTickets(userId: number, performanceId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets/purchase`, { userId, performanceId });
  }
  deleteEntry(payload: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/lottery_entries`, payload);
  }
}
 