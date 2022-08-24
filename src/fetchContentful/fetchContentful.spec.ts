import { fetchContentful } from '../index'

test('Should return introduction blog', async () => { 
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
  const { isLoading, error, result} = await fetchContentful(DOC_BY_ID_QUERY,requestOptions )
    expect({ isLoading, error, result}).toBe({
        isLoading:false,
        error:"",
        result:{ data: { docsCollection: { items: {
            title: 'Introduction',
            body: '# Introduction\n' +
            'Next-Docs is a headless CMS application that utilizes Contentful to handle your project documentation needs. Application also includes integrations with Google Analytics and Next-SEO on top of CMS functionality. \n' +
            '\n' +
            '### Technology\n' +
            '- Typescript\n' +
            '- Next.js\n' +
            '- Tailwindcss\n' +
            '- Contentful\n' +
            '- GraphQL\n' +
            '- Google Analytics \n' +
            '\n' +
            '### Features\n' +
            '- ✅  Well-tested and production ready.\n' +
            '- Easy connections to Vercel and Netifly. \n' +
            '- Type Safe Application.\n' +
            '- Support plans available. \n'
        } 
    }
     }
     }
     
    })
 })




 test('Should return Error Message', async () => { 
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
        slug:"1fqwefqe32"
    }
  }
  const { isLoading, error, result} = await fetchContentful(DOC_BY_ID_QUERY,requestOptions )
    expect({ isLoading, error, result}).toEqual({
        isLoading:false,
        error:"Data Fetch Failed",
        result: null
     
    })
 })