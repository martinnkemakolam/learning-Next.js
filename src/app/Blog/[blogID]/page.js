import {notFound} from 'next/navigation'
export const dynamicParams = true;

export default async function Home({params}) {
  let data = await getStaticProps(params)
  if (data === null) {
    notFound()
  }
    return (
      <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      </>
    )
  }
export async function generateStaticParams() {
  return[
    {
      blogID: '1'
    },{
      blogID: '2'
    },{
      blogID: '3'
    },{
      blogID: '4'
    },{
      blogID: '5'
    }
  ]
}
  async function getStaticProps(params) {
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogID}`)
    let postJson = await post.json()
    if (!postJson.id) {
      return null
    }
    return postJson
  }