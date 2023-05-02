import React from 'react'

const NewsCard = (props) => {
  return (
    <div className='flex items-center justify-center bg-cyan-300 rounded-2xl'>{props.data}</div>
  )
}

export default NewsCard