import { CgChevronRight } from 'react-icons/Cg'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Decks = () => {
  return (
    <article className={styles.deck}>
      <h3 className={styles.deck__title}>Título do baralho</h3>
      <p className={styles.deck__card__count}>35 cartas</p>
      <Link to="/deck/2" className={styles.deck__card__Link__wrapper}>
        <button className={styles.deck__card__button}>
          <span className={styles.deck__card__button__svg}>
            <CgChevronRight />
          </span>
        </button>
      </Link>
    </article>
  )
}

export default Decks
