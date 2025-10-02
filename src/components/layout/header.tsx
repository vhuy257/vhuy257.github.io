import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const HeaderSocialIcon = () => {
  return (
    <div className='flex items-center gap-4 container max-w-6xl px-4 mx-auto my-4'>
        <Link href="https://www.linkedin.com/in/vhuy257/">
            <Icon icon="mdi:linkedin" width={30} height={30} />
        </Link>
        <Link href="mailto:vhuy2571990@gmail.com">
            <Icon icon="mdi:email" width={30} height={30} />
        </Link>
        <Link href="https://github.com/vhuy257">
            <Icon icon="mdi:github" width={30} height={30} />
        </Link>
    </div>
  )
}

export default HeaderSocialIcon