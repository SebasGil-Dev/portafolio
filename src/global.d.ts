export {};

declare global {
  interface Window {
    translations?: {
      [lang: string]: {
        [key: string]: string;
      };
    };
  }
}
