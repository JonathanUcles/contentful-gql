declare const useContentful: (query: string, variables: any) => Promise<{
    data: any;
    loading: boolean;
    err: string | null | undefined;
}>;
export default useContentful;
