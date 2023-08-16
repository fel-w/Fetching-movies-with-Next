import { MOVIE_API_KEY , MOVIE_BASE_URL } from "../../config"
export async function GET(){
    if(!MOVIE_API_KEY){
        return new Response ("Movie  base url is not found" ,{
            status : 404,
        })
    }

    if(!MOVIE_API_KEY){
        return new Response ("Movie api token is not found" ,{
            status : 404,
        
        })
        }

    try{

        
        const request = await fetch (`${MOVIE_BASE_URL}/3/movie/popular` , {
            method :"GET",
            headers: {
                "Content-Type": "application/json" ,
                "Authorization" : `Bearer ${MOVIE_API_KEY || ""}`,
            }

        })
        const response = await request.json();
        return new Response(JSON.stringify(response) ), {
            status :200,
        }

    }

    catch(error: any){
        return  new  Response( error,{
            status :500,

        });

    }

}