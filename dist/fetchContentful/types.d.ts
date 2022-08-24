export interface FetchContentfulResult<T> {
    result: T | null;
    isLoading: boolean;
    error?: string | null;
}
export declare type Variables = {
    [key: string]: any;
};
