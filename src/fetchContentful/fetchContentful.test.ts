import {fetchContentful} from '../index'
test('Grab Contentful Data Success',()=>{
     interface Doc  {
            slug:  String;
            title: string;
            body:  string;
        }
     type DocEntryType = {
        data: {
          docsCollection: {
            items: Doc[] | undefined
          }
        }
      }
      type QueryVariables = {
        slug:string
      }
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
            variables:{
                slug:'introduction'
            }

        }
    expect(fetchContentful(DOC_BY_ID_QUERY, requestOptions))
    .toBe(
        { 
            data: { 
                docsCollection: { 
                    items: [
                        {
                            slug:'introduction',
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
                        ] 
                    } 
                }
            }
        );
    //planning out test
})
test('Grab Contentful Data Fail',()=>{
    //expect(fetchContentful()).toBe({});
    //planning out test
})