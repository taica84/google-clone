import Head from "next/head";
import HeaderSearch from "../components/searchResultsPage/HeaderSearch";
// import Response from "../Response";
import SearchResults from '../components/searchResultsPage/SearchResults';
import { useRouter } from "next/router";

const Search = ({results}) => {
    console.log(results);

     const router = useRouter()

    return (
        <div>

        <Head>
            <title>{router.query.term} - Google Search</title> 
            <link rel="icon" href="/favicon.ico" />
        </Head>

         <HeaderSearch/>
          
        <SearchResults results={results} />

        </div>
    )
}

export default Search;


export async function getServerSideProps(context) {
    // const useDummyData = false;
    const startIndex = context.query.start || '0' ;

    const apiKey = process.env.API_KEY;
    const contextKey =process.env.CONTEXT_KEY;

    const data =   await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    return {
        props : {
            results:data
        }
    }
   
};
