import React from 'react'

const MyPage = ({ data }) => {
  // Render the page using the fetched data
  //Rendering the data fetched from server
  return (
    <div>
      <h1>Data fetched on the server:</h1>

      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
        </div>
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from an API or perform any server-side operations
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  // Return the data as props
  return {
    props: {
      data
    }
  }
}

export default MyPage
