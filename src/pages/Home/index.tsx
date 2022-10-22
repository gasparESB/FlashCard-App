import Decks from '../../components/Decks'
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.homePage__wrapper}>
      <h2>Lista de Baralhos</h2>
      <div className={styles.decks__wrapper}>
      </div>
    </div>
  )
}

export default Home
