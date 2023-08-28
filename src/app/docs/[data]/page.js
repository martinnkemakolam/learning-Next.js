import { notFound } from "next/navigation"

// export const dynamicParams = false
export default async function page({params}) {
    let data = await serverFetcher(params)
    if (!data.id) {
        notFound()
    }
    return(
        <div>
            <h1>{data.head}</h1>
            <p>{data.body}</p>
        </div>
    )
}
// export function generateStaticParams() {
//     return [
//         {
//             data: '0'
//         },{
//             data: '1'
//         },{
//             data: '2'
//         },{
//             data: '3'
//         },{
//             data: '4'
//         }
//     ]
// }
async function serverFetcher(id){
    let res = await fetch(`http://localhost:4000/docs/${id.data}`, {cache: 'no-store'})
    let data = await res.json()
    return data
}