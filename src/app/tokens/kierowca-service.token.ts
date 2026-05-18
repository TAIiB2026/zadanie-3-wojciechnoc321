import { InjectionToken } from '@angular/core';
import { KierowcaServiceInterface } from '../interfaces/kierowca-service.interface';

export const KIEROWCA_SERVICE = new InjectionToken<KierowcaServiceInterface>('KIEROWCA_SERVICE');
