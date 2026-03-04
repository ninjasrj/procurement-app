import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Import Angular Material modules for the UI
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-contract-form',
  standalone: true, // This is key for Angular 20!
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule
  ],
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {
  // We divide the form into Steps
  generalInfoStep!: FormGroup;
  stakeholderStep!: FormGroup;
  inspectionStep!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Logic for Step 1: General Info
    this.generalInfoStep = this.fb.group({
      // We use a "Pattern" validator for your long contract numbers
      contractNo: ['', [Validators.required, Validators.pattern(/^[0-9.]+$/)]],
      shortNo: ['', Validators.required],
      fiscalYear: ['2024-25', Validators.required],
      contractDate: [null, Validators.required],
      itemType: ['RawMat', Validators.required],
      contractName: ['', Validators.required],
      pdsDate: [null],
      userBr: ['', Validators.required]
    });

    // Step 2 & 3 will be initialized here later...
  }
}