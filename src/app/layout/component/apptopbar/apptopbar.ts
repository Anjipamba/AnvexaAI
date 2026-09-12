import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '@/app/layout/service/layout.service';
import { AppConfigurator } from '../app.configurator';
import { HomeComponent } from '@/app/pages/home/home/home';
@Component({
  selector: 'app-apptopbar',
  imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator,HomeComponent],
  templateUrl: './apptopbar.html',
  styleUrl: './apptopbar.scss',
})
export class ApptopbarComponent {
    items!: MenuItem[];

    layoutService = inject(LayoutService);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }
}
