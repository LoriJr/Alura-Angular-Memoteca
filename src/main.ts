import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app-module'; // Confirme se o nome do arquivo é esse mesmo

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
