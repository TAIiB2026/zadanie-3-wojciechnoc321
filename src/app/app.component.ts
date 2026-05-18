import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DatyOperacjiService } from './services/daty-operacji.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: [`
    .status-dat {
      display: flex;
      gap: 24px;
      padding: 12px 16px;
      border-bottom: 1px solid #d5d5d5;
      font-family: Arial, sans-serif;
    }

    .status-dat p {
      margin: 0;
    }

    .nawigacja {
      display: flex;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid #d5d5d5;
      font-family: Arial, sans-serif;
    }

    .nawigacja a {
      color: #1f4f8f;
      text-decoration: none;
      font-weight: 600;
    }

    .nawigacja a.aktywny {
      color: #111;
      text-decoration: underline;
    }
  `]
})
export class AppComponent {
  ostatniePobranieListy$: Observable<Date | null>;
  ostatnieDodanie$: Observable<Date | null>;

  constructor(private readonly datyOperacjiService: DatyOperacjiService) {
    this.ostatniePobranieListy$ = this.datyOperacjiService.ostatniePobranieListy$;
    this.ostatnieDodanie$ = this.datyOperacjiService.ostatnieDodanie$;
  }
}
