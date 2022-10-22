import { CgHomeAlt } from 'react-icons/Cg'
import { CgCardDiamonds } from 'react-icons/Cg'
import { CgMathPlus } from 'react-icons/Cg'

interface sideBarOptionsProps {
  SESSION: string
  ICON: React.ReactNode
  PATH: string
}

export const sideBarOptions: sideBarOptionsProps[] = [
  {
    SESSION: 'Home',
    ICON: <CgHomeAlt />,
    PATH: '/'
  },
  {
    SESSION: 'Criar Deck',
    ICON: <CgMathPlus />,
    PATH: '/create'
  },
  {
    SESSION: 'Ver Decks',
    ICON: <CgCardDiamonds />,
    PATH: '/decks'
  }
]
