import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { CardComponent } from './pages/game/card/card.component';
import { SplashScreenComponent } from './pages/splash-screen/splash-screen.component';
import { ButtonComponent } from './components/button/button.component';
import { ObProfileComponent } from './pages/onboarding/ob-profile/ob-profile.component';
import { ObEducationComponent } from './pages/onboarding/ob-education/ob-education.component';
import { ObLivingComponent } from './pages/onboarding/ob-living/ob-living.component';
import { ObInsuranceComponent } from './pages/onboarding/ob-insurance/ob-insurance.component';
import { ObMobilityComponent } from './pages/onboarding/ob-mobility/ob-mobility.component';
import { ObOverviewComponent } from './pages/onboarding/ob-overview/ob-overview.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './components/selection/selection.component';
import { ObJobComponent } from './pages/onboarding/ob-job/ob-job.component';
import { InvestComponent } from './pages/invest/invest.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SummaryComponent } from './pages/summary/summary.component';
import { GameOverComponent } from './pages/game-over/game-over.component';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent,
    SplashScreenComponent,
    ButtonComponent,
    ObProfileComponent,
    ObEducationComponent,
    ObLivingComponent,
    ObInsuranceComponent,
    ObMobilityComponent,
    ObOverviewComponent,
    OnboardingComponent,
    SelectionComponent,
    ObJobComponent,
    InvestComponent,
    SummaryComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HammerModule,
    HttpClientModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
