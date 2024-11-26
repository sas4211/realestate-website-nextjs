import React from 'react'

type Props ={
    heading:string;
}

const SectionHeading = ({heading}:Props) => {
  return (
    <div>
        <h1 className='text-2xl sm:text-3xl font-bold mb-2 text-gray-800'>{heading}</h1>
        <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem libero optio? Corporis perspiciatis cupiditate totam culpa temporibus animi ipsum ea molestias eum tempore tenetur consequatur, accusantium, sint dicta fugit.</p>
</div>
  )
}

export default SectionHeading