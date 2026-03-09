export interface Message { readonly recipient: string; readonly content: string; send(): void; }
