import styles from './NavBar.module.scss'
import { FC, useState } from 'react'

interface Props {
    state: Array<any>

    navPage: number
    setNavPage: React.Dispatch<React.SetStateAction<number>>

    activeButton: string
    setActiveButton: React.Dispatch<React.SetStateAction<string>>
}

const NavBar:FC<Props> = ({state, navPage, setNavPage, activeButton, setActiveButton}) => {

    const [navbarPages, setNavbarPages] = useState<number>(Math.ceil(state.length / 3))

  return (
            <div className={styles.navBar}>
                <button 
                    onClick={() => navPage === 1 ? setNavPage(navbarPages) : setNavPage(navPage - 1)} 
                    className={styles.liftLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                {/* map state for create buttons */}
                {state.length >= 3 ?
                    navPage === 1 ?
                        state
                            .slice(0, 3)
                            .map(res => <button className={activeButton === res.name ? styles.activeBtn : styles.notActiveBtn} 
                                onClick={() => setActiveButton(res.name)}>
                                {res.name}
                            </button>)
                        :
                        state
                            .slice((navPage * 2) - 1, (navPage * 2) + 2)
                            .map(res => <button className={activeButton === res.name ? styles.activeBtn : styles.notActiveBtn} 
                                onClick={() => setActiveButton(res.name)}>
                                {res.name}
                            </button>)
                    : 
                    state.map(res => 
                        <button className={activeButton === res.name ? styles.activeBtn : styles.notActiveBtn} 
                            onClick={() => setActiveButton(res.name)}>
                            {res.name}
                        </button>
                    )
                }
                <button 
                    onClick={() => navPage === navbarPages ? setNavPage(1) : setNavPage(navPage + 1)} 
                    className={styles.liftRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
  )
}

export default NavBar
