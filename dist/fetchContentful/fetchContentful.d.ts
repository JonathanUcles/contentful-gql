import { FetchContentfulResult, Variables } from './types';
declare const fetchContentful: <T extends {}>(query: string, variables: Variables) => Promise<FetchContentfulResult<T>>;
export default fetchContentful;
