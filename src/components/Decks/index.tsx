import { CgChevronRight } from 'react-icons/Cg'

import styles from './styles.module.scss'

const Decks = () => {
  return (
    <article className={styles.deck}>
      <h3 className={styles.deck__title}>Título do baralho</h3>
      <p className={styles.deck__card__count}>35 cartas</p>
      <button
        className={styles.deck__card__button}
        onClick={() => console.log('A')}
      >
        <span className={styles.deck__card__button__svg}>
          <CgChevronRight />
        </span>
      </button>
    </article>
  )
}

export default Decks
