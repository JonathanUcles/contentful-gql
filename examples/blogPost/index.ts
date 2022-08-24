import { fetchContentful } from '../../src'

const getBlogPost= async () =>{
    const DOC_BY_ID_QUERY = `
    query GetDocEntry($slug: String!) {
        docsCollection(where: { slug:$slug}, limit:1){
          items{
            title
            body
            }
          }
        }
      `
      const requestOptions = {
        variables: {
            slug:"introduction"
        }
      }
    const {
        result,
        isLoading,
        error
    } = await fetchContentful(DOC_BY_ID_QUERY, requestOptions)
    console.log({result, isLoading,error})

}
getBlogPost()