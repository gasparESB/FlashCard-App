import Header from '../Header'
import LeftSideBar from '../LeftSideBar'
import styles from './styles.module.scss'
import { CgChevronLeft } from 'react-icons/Cg'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.layout__container}>
        <LeftSideBar />
        <div className={styles.layout__container__page__content}>
        <Header />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
