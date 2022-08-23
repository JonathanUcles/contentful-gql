
const fetchContentful = async (query:string, variables:any) => {
    let error = '';
    let isLoading = true;
    try {
        const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: "POST",
            headers:{
                Authorization:`Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                'Content-Type':'application/json',
                
            },
            body: JSON.stringify({
                query: `${query}`,
                variables
            })
            
        })
        const result = await res.json();
        isLoading = false;

        return {
            result,
            isLoading,
            error

        }

        
    } catch (error) {
        let result = null
        error = 'Data Fetch Failed'
        isLoading = false
        return {
            result,
            error,
            isLoading
        }
        
    }
    
}
export default fetchContentful;