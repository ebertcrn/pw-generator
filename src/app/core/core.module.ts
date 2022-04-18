import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

@NgModule({
  declarations: [PasswordGeneratorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  exports: [PasswordGeneratorComponent],
})
export class CoreModule {}
