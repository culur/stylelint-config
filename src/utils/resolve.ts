function resolve(lib: string) {
    try {
        return !!require.main?.require(lib);
    } catch (e) {
        return false;
    }
}

export const hasTailwindCSS = resolve('tailwindcss');
export const hasSass =
    resolve('sass') || resolve('dart-sass') || resolve('node-sass');
export const hasVue = resolve('vue');
