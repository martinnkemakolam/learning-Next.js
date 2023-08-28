import Link from "next/link"
export default async function Home() {
  let post = await getStaticProps()
  
    return (
      <>
      {
        post.map((item)=>{
            return (
              <article key={item.id}>
                <Link href={`/Blog/${item.id}`}><h1>{item.id} {item.title} {item.author}</h1></Link>
              </article>
            )
          })
        }
      </>
    )
  }
  
async function getStaticProps() {
  let post = await fetch('http://localhost:4000/posts', {
    next:{
      revalidate: 10
    }
  })
  let postJson = await post.json()
  
  return postJson
}