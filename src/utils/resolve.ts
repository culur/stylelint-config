function resolve(lib: string) {
    try {
        require.resolve(lib);
        return true;
    } catch (e) {
        return false;
    }
}

export const hasTailwindCSS = resolve('tailwindcss');
export const hasSass =
    resolve('sass') || resolve('dart-sass') || resolve('node-sass');
