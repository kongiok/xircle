// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["@nuxt/test-utils", "@nuxt/ui", "@vite-pwa/nuxt", "@pinia/nuxt"],
    devServer: {
        https: true,
        host: "xircle.starforge.zone",
        port: 6010,
    },
    appId: "xircle",
    app: {
        rootId: "__star-forge__",
    },
    ui: {
        theme: {
            transitions: true,
        },
    },
    css: ["~/assets/styles/main.css"],
});
