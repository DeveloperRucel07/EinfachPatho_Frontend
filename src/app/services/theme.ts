import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly storageKey = 'theme';

    constructor() {

        const savedTheme = localStorage.getItem(this.storageKey);
        this.setDark(savedTheme === 'dark');
    }

    toggleDarkMode() {
        const isDark = document.documentElement.classList.toggle('dark');

        localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
    }

    setDark(enabled: boolean) {
        document.documentElement.classList.toggle('dark', enabled);
        localStorage.setItem(this.storageKey, enabled ? 'dark' : 'light');
    }

    isDark(): boolean {
        return document.documentElement.classList.contains('dark');
    }
}
