export default function Home({params}) {
    {console.log( 'this is params', params)}
    return (
      <h1>This is review {params.reviewID} for blog {params.blogID}</h1>
    )
  }
  