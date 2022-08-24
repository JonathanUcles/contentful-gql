
export interface FetchContentfulResult<T> {
    result: T | null;
    isLoading:boolean;
    error?:string| null;

}
export type Variables= {
     [key: string]: any 
}