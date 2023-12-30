import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Img({src, alt,className}) {
  return (
    <div>
      <LazyLoadImage 
        alt={alt}
        height={100}
        width={100}
        src={src}
        className={className}
        />
    </div>
  )
}
