import classNames from 'classnames'
import NextImage, { type StaticImageData } from 'next/image'
import React from 'react'

export interface ImageProps {
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
  imageTagClassName?: string
  src: string | StaticImageData
  alt?: string
  width?: number
  height?: number
}

const noop = () => {}

export const Image: React.FC<ImageProps> = ({
  src,
  width,
  height,
  style = {},
  className = '',
  imageTagClassName = '',
  onClick = noop,
  alt,
  ...props
}) => {
  return (
    <div onClick={onClick} className={classNames(className)} style={style}>
      <NextImage
        className={imageTagClassName}
        src={src}
        alt={alt ?? ''}
        width={width}
        height={height}
        quality={80}
        {...props}
      />
    </div>
  )
}
