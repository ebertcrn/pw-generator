import { ClipboardService } from 'ngx-clipboard';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PwCharactersConstants } from '../../constants/pw-characters';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {
  public pwGeneratorForm!: FormGroup;
  public generatedPw!: string;

  private output!: string;
  private lowerRegex: RegExp = /^[a-z]+$/g; // ou /[a-z]/
  private upperRegex: RegExp = /^[A-Z]+$/g; // ou /[A-Z]/
  private numberRegex: RegExp = /\d/;
  private symbolRegex: RegExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  constructor(
    private _fb: FormBuilder,
    private pwCharacters: PwCharactersConstants,
    private clipboardService: ClipboardService
  ) {}

  public ngOnInit(): void {
    this.pwGeneratorForm = this._fb.group({
      // ToDo: At least one checkbox checked
      lowerCase: [true],
      upperCase: [true],
      numbers: [true],
      symbols: [true],
      length: [4, Validators.required],
    });
  }

  public onGeneratePw(): void {
    this.pwReset();
    this.pwParametersCheck();

    for (let i = 0; i < this.pwGeneratorForm.get('length')?.value; i++) {
      this.generatedPw += this.output.charAt(
        Math.floor(Math.random() * this.output.length)
      );
    }
    console.log(this.generatedPw);
  }

  public onCopyPw(): void {
    this.clipboardService.copyFromContent(this.generatedPw);
  }

  private containsLower(generatedPw: string): boolean {
    return this.lowerRegex.test(generatedPw);
  }

  private containsUpper(generatedPw: string): boolean {
    return this.upperRegex.test(generatedPw);
  }

  private containsNumber(generatedPw: string): boolean {
    return this.numberRegex.test(generatedPw);
  }

  private containsSymbol(generatedPw: string): boolean {
    return this.symbolRegex.test(generatedPw);
  }

  private pwReset(): void {
    this.generatedPw = '';
    this.output = '';
  }

  private pwParametersCheck(): void {
    if (this.pwGeneratorForm.get('lowerCase')?.value) {
      this.output += this.pwCharacters.lowerCase;
    }
    if (this.pwGeneratorForm.get('upperCase')?.value) {
      this.output += this.pwCharacters.upperCase;
    }
    if (this.pwGeneratorForm.get('numbers')?.value) {
      this.output += this.pwCharacters.numbers;
    }
    if (this.pwGeneratorForm.get('symbols')?.value) {
      this.output += this.pwCharacters.symbols;
    }
  }
}
