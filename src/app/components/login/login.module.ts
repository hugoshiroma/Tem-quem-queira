import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { LoginComponent } from './login.component';

import { AuthService } from './shared/auth.service';

import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, NgxMaskModule, CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule,
        MatCheckboxModule
],
exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [AuthService],
})
export class LoginModule { }
