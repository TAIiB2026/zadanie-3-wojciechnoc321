import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Kierowca } from '../../models/kierowca.model';

type NowyKierowca = Omit<Kierowca, 'id'>;

@Component({
  selector: 'app-kierowca-formularz',
  standalone: false,
  templateUrl: './kierowca-formularz.component.html',
  styleUrl: './kierowca-formularz.component.css'
})
export class KierowcaFormularzComponent {
  @Output() dodanoKierowce = new EventEmitter<NowyKierowca>();

  formularz = new FormGroup({
    numerKierowcy: new FormControl<number | null>(null, [
      Validators.required,
      this.zakresNumeruKierowcyValidator
    ]),
    dataUrodzenia: new FormControl<string>('', [Validators.required, this.poprawnaDataValidator]),
    imie: new FormControl<string>('', [Validators.required, this.duzaLiteraValidator]),
    nazwisko: new FormControl<string>('', [Validators.required, this.duzaLiteraValidator])
  });

  zapisz(): void {
    if (this.formularz.invalid) {
      this.formularz.markAllAsTouched();
      return;
    }

    const wartosci = this.formularz.getRawValue();

    if (
      wartosci.numerKierowcy === null ||
      !wartosci.dataUrodzenia ||
      !wartosci.imie ||
      !wartosci.nazwisko
    ) {
      return;
    }

    const numerKierowcy = Number(wartosci.numerKierowcy);

    if (!Number.isInteger(numerKierowcy) || numerKierowcy < 1 || numerKierowcy > 99) {
      this.formularz.controls.numerKierowcy.setErrors({ zakresNumeru: true });
      return;
    }

    this.dodanoKierowce.emit({
      numerKierowcy,
      dataUrodzenia: new Date(wartosci.dataUrodzenia),
      imie: wartosci.imie,
      nazwisko: wartosci.nazwisko
    });

    this.formularz.reset();
  }

  private duzaLiteraValidator(control: AbstractControl): ValidationErrors | null {
    const wartosc = control.value as string | null;

    if (!wartosc) {
      return null;
    }

    return /^[A-ZĄĆĘŁŃÓŚŹŻ]/.test(wartosc) ? null : { duzaLitera: true };
  }

  private poprawnaDataValidator(control: AbstractControl): ValidationErrors | null {
    const wartosc = control.value as string | null;

    if (!wartosc) {
      return null;
    }

    const data = new Date(wartosc);
    const czyFormatDaty = /^\d{4}-\d{2}-\d{2}$/.test(wartosc);
    const czyPoprawnaData = !Number.isNaN(data.getTime()) && data.toISOString().startsWith(wartosc);
    const czyNieJestZPrzyszlosci = data <= new Date();

    return czyFormatDaty && czyPoprawnaData && czyNieJestZPrzyszlosci
      ? null
      : { poprawnaData: true };
  }

  private zakresNumeruKierowcyValidator(control: AbstractControl): ValidationErrors | null {
    const wartosc = control.value;

    if (wartosc === null || wartosc === '') {
      return null;
    }

    const numerKierowcy = Number(wartosc);

    return Number.isInteger(numerKierowcy) && numerKierowcy >= 1 && numerKierowcy <= 99
      ? null
      : { zakresNumeru: true };
  }
}
