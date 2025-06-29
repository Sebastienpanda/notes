import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LucideAngularModule} from 'lucide-angular';
import {InputField} from '@shared/components/form/input/input/input-field';
import {NonNullableFormBuilder, Validators} from '@angular/forms';
import {confirmPasswordValidator} from '@core/confirm-password-validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterLink,
        LucideAngularModule,
        InputField
    ]
})

export default class Login {
    private readonly fb = inject(NonNullableFormBuilder);

    readonly form = this.fb.group(
        {
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [
                Validators.required,
                Validators.minLength(12),
            ]),
            confirmPassword: this.fb.control('', [Validators.required]),
        },
        {validators: confirmPasswordValidator},
    );

    async onSubmit() {
        if (this.form.valid) {
            console.log(this.form.value);
        } else if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
    }
}
