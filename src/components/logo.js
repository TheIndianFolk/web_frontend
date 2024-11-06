import React from 'react'
import Link from 'next/link'

const IndianFolkLogo = () => {
  return (
    <Link href="/" className="logo" style={{
      textDecoration: 'none',
      display: 'inline-block',
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#E50914',
      padding: '8px 0',
    }}>
      .indianfolk
    </Link>
  )
}

export default IndianFolkLogo