import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO } from '../constants'

type Props = { right?: React.ReactNode }

export default function Header({ right }: Props) {
  return (
    <header className="header">
      <div className="header-left">
        <img src={LOGO} alt="Logo" />
        <span>Courses</span>
      </div>
      <div className="header-right">{right}</div>
    </header>
  )
}
