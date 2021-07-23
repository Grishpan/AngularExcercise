import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private errorMessage = '';

  constructor() {}

  setError(error: string): void {
    this.errorMessage = error;
  }
}
