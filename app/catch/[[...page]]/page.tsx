import React from 'react'

// catch yapısı sonsuz sayfa altında sayfa
const page = ({params}) => {
    console.log(params.page)
  return (
    <div>page: {params.page}</div>
  )
}

export default page