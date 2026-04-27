/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_ADDRESS?: string;
  readonly VITE_PHONE_DIAL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
