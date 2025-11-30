import {defineNitroConfig} from "nitropack/config";

// https://nitro.build/config
export default defineNitroConfig({
    compatibilityDate: "latest",
    srcDir: "server",
    routeRules: {
        '/api/**': {
            cors: true,
        }
    }
});
