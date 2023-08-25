export default function Home({params}) {
    return (
      <>
      {console.log( 'this is params', params)}
      <h1>This is blog post {params.blogID}, 'Blog/any'</h1>
      </>
    )
  }
  