import React, { FC, FunctionComponent } from 'react'
import '../../styles/button.css'

type ButtonProps = {
  className: string
  title?: string
  bgColor?: string
  url?: string
} & Omit<React.ComponentProps<'button'>, 'bgColor'>



export const Button: FC<ButtonProps> = ({ className, title, bgColor}: ButtonProps) => {
  return (
    <div className={`button ${className}`} style={{background: bgColor ? bgColor : "var(--bg-button-cl)", border: bgColor !== 'none' ? 'none' : "1px #fff solid"}}>
        {title}
    </div>
  )
}
