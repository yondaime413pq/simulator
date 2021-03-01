import { Routes, RouterModule } from '@angular/router';
import { SimulatorComponent } from './components/simulator/simulator.component';


const APP_ROUTES: Routes = [
    { path: 'simulator', component:SimulatorComponent  },
    { path: '**', pathMatch:'full', redirectTo:'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
