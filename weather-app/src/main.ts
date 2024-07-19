import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(),
    provideRouter(routes), 
    provideAnimationsAsync(),
    importProvidersFrom(
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule
    ), provideAnimationsAsync(), provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));
