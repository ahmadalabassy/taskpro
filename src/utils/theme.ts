export const applyTheme = (mode: 'light' | 'dark') => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${mode}-theme`);
};