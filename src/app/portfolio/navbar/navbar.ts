import { AppConfigurator } from '@/app/layout/component/app.configurator';
import { LayoutService } from '@/app/layout/service/layout.service';
import { HomeComponent } from '@/app/pages/home/home/home';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,
    MenubarModule,
    ButtonModule,RouterModule, StyleClassModule, AppConfigurator],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
 items: MenuItem[] = [
    {
      label: 'Home',
      command: () => this.scrollTo('home')
    },
    {
      label: 'About',
      command: () => this.scrollTo('about')
    },
    {
      label: 'Skills',
      command: () => this.scrollTo('skills')
    },
    {
      label: 'Projects',
      command: () => this.scrollTo('projects')
    },
    {
      label: 'Experience',
      command: () => this.scrollTo('experience')
    },
    {
      label: 'Contact',
      command: () => this.scrollTo('contact')
    }
  ];

  scrollTo(id: string): void {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  downloadResume(): void {
    window.open('assets/resume/Anjaiah-Pamba-Resume.pdf', '_blank');
  }
      // items4!: MenuItem[];

    layoutService = inject(LayoutService);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

}
