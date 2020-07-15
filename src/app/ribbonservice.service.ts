import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RibbonService {
  url = 'assets';

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
}
