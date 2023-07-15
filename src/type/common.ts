export interface MetaData {
    total: number;
    current: number;
    pageSize: number;
}
export interface APIResponse<T> {
    message: string;
    code: number;
    data: T;
    metadata?: MetaData;
}

export type IFormVerifyRequest = {
    name: string;
    phone_number: string;
    code: string;
}
