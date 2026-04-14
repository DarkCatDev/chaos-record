import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ExBar.module.css'

const NAV_LINKS = [
  { to: '/existence',          label: 'Realm'      },
  //{ to: '/existence/chaos',    label: 'The Chaos'            },
]

export default function ExBar() {
  const [open, setOpen]         = useState(false)

  return (
    <nav className={styles.nav}>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to} className={styles.tabButton}  >
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.active : ''].join(' ')
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  )
}
