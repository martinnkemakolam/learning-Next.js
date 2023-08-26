import Link from "next/link"
export default async function Home() {
  let post = await getStaticProps()
  
    return (
      <>
      {
        post.map((item)=>{
            return (
              <article key={item.id}>
                <Link href={`/Blog/${item.id}`}><h1>{item.id} {item.title}</h1></Link>
              </article>
            )
          })
        }
      </>
    )
  }
  
async function getStaticProps() {
  let post = await fetch('https://jsonplaceholder.typicode.com/posts')
  let postJson = await post.json()
  
  return postJson.slice(0, 5)
}