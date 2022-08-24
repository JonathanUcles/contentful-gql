import { useState,  } from 'react';
import { fetchContentful } from '../index'

const useContentful = async (query:string,variables:any) =>{
    const [data, setData ] = useState<any | null>()
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState<string | null | undefined>('') 
    const { result, isLoading, error} = await fetchContentful(query, variables)
    
    setData(result)
    setLoading(isLoading)
    setErr(error)

    return {
        data,
        loading,
        err
    }

    

}
export default useContentful;