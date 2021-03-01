import { Routes, RouterModule } from '@angular/router';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';



const APP_ROUTES: Routes = [
    { path: 'simulator', component:SimulatorComponent  },
    { path: 'home', component:HomeComponent  },
    { path: 'map', component:MapComponent  },
    { path: '**', pathMatch:'full', redirectTo:'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
