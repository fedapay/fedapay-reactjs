export interface CheckoutOptions {
    environment?: 'live' | 'production' | 'test' | 'sandbox' | 'dev' | 'local';
    url?: string;
    public_key?: string;
    container?: string | HTMLElement | null;
    trigger?: string;
    locale?: 'en' | 'fr';
    transaction: {
        id?: number;
        amount: number;
        description: string;
        custom_metadata?: any;
    };
    currency: {
        iso: string;
        code?: number;
    };
    customer?: {
        firstname: string;
        lastname: string;
        email: string;
        phone_number?: {
            number: string;
            country: string;
        }
    };
    button?: {
        text?: string;
        class?: string;
    };
    onComplete?: any;
}
