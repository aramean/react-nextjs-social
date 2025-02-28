const ApiFetch = async (method: string, route: string, body: object) => {
  const response = await fetch("api/" + route, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  return response
}

export default ApiFetch