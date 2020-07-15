import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RibbonService {
  url = 'assets';
  //@Output() clickedEvent = new EventEmitter<string>();

  private clickEvent = new Subject<any>();
  clickEvent$ = this.clickEvent.asObservable();

  constructor(private http: HttpClient) {}

  async getRibbonConfigContext(context: string): Promise<any> {
    const data = await this.getRibbonConfigAsset();
    return data.find((i) => i.context === context);
  }

  async getRibbonConfigAsset(): Promise<any> {
    return await this.http
      .get<any[]>(`${this.url}/ribbonconfig.json`)
      .toPromise();
  }
  clickedEventAction(buttonpressed, contextval) {
    const data = { action: buttonpressed.name, context: contextval };
    this.clickEvent.next(data);
  }
}
