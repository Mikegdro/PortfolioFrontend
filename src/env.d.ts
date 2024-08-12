/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
