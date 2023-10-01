import React from 'react'

function RouteBase ({ children, classNames, link, text, ...rest }) {
  const baseClass = 'h-screen pb-[60px] pt-0  md:pt-[60px] md:pb-0'
  const classNm = classNames ? baseClass + classNames : baseClass

  return (
        <div className={classNm} {...rest}>
            {children}
        </div>
  )
}

export default RouteBase
