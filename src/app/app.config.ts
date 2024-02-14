import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routesNg7TN } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routesNg7TN)]
};