const fetchData = async (slug="db") => {
  try {
    const response = await fetch(`http://localhost:3001/${slug}`).then(resp => resp.json())
    if (!response.ok) {
      throw Error(response.statusText)
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export default fetchData