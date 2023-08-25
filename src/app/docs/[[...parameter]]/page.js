import Link from "next/link"
export default function Home({params}) {
  // for consistent UI through out each pages
    if (params.length === 1) {
        return (
            <h1>DOCS parameter that catches all possible routes to docs '/docs/any/any' {params[0]} <Link href='/'>Back Home</Link> </h1>
          )   
    }else if(params.length === 2){
        return (
            <h1>DOCS parameter that catches all possible routes to docs '/docs/any/any' {params[0]} to {params[1]} <Link href='/'>Back Home</Link></h1>
          )
    }else{
        return (
            <h1>DOCS parameter that catches all possible routes to docs. This takes back to home page <Link href='/'>Back Home</Link></h1>
          )
    }
  }
  