import {notFound} from 'next/navigation'
import BlogBody from './blogBody';
export const dynamicParams = true;

export default async function Home({params}) {
  let data = await getStaticProps(params)
  if (data === null) {
    notFound()
  }
    return (
      <>
      <BlogBody title={data.title} body={data.body}/>
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
    }
  ]
}
  async function getStaticProps(params) {
    let post = await fetch(`http://localhost:4000/posts/${params.blogID}`, {next: {
      revalidate: 3
    }})
    let postJson = await post.json()
    if (!postJson.id) {
      return null
    }
    return postJson
  }