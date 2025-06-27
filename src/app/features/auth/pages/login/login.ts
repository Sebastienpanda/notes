import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Eye, EyeOff, LucideAngularModule} from 'lucide-angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterLink,
        LucideAngularModule
    ]
})

export default class Login {
    protected readonly showPassword = signal(false);

    togglePassword() {
        this.showPassword.set(!this.showPassword());
    }

    protected readonly Eye = Eye;
    protected readonly EyeOff = EyeOff;
}
