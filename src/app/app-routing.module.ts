import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';
import { InvestComponent } from './pages/invest/invest.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'investments', component: InvestComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', component: SplashScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
