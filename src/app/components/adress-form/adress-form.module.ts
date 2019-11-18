import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule} from '@angular/material';

import { AdressFormComponent } from './adress-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AdressFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYJh9SliO5RU9Ys8V4HtGvRx7v_QV26LE'
    }),
    NgxMaskModule.forChild()

  ],
  exports: [
    AdressFormComponent
  ],
  providers: [],
})
export class AdressFormModule { }
