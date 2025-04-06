'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src={'/logo/company_logo.png'}
      className={classNames('block w-[76.651px] h-[24.5px]', className)}
      alt='logo'
    />
  )
}

export default LogoSite
