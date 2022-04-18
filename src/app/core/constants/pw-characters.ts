import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PwCharactersConstants {
  public readonly lowerCase: string = 'abcdefghijklmnopqrstuvwxyz';
  public readonly upperCase: string = this.lowerCase.toUpperCase();
  public readonly symbols: string = '!@#$%¨&*()_-+=[]{}/?;:.,<>|';
  public readonly numbers: string = '0123456789';
}
