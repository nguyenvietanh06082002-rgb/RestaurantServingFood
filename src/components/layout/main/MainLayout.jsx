import { Outlet } from 'react-router'
import { Header } from '../Header'

export function MainLayout({ user, onLogout }) {
  return (
    <>
      <Header user={user} onLogout={onLogout} />
      <main>
        <Outlet/>
      </main>
    </>
  )
}