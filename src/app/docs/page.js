import Link from "next/link"
export default async function Home() {
  let arr = await serverSideRender()
  return (
    <div>
    <h1>DATA</h1>
    {
      arr.map((data)=>{
        return <Link href={`/docs/${data.id}`}><h1 key={data.id}>{data.head}</h1></Link>
      })
    }
    </div>
  )
}
  
  async function serverSideRender() {
    let res = await fetch('http://localhost:4000/docs', {cache: 'no-store'})
    let data = await res.json()
    return data
  }