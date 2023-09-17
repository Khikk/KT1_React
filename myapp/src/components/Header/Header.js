import { ReactComponent as MainSVG } from './CompanyName.svg'
import VeloZavr from './VeloZavr.jpg'
import styles from './Header.module.css'


function Header(){

    let optionMenu={
        color: 'black',
        textDecoration: 'none'
    }
    return(
    <div className='all_text'>
    <div className={styles.header_top}>
    <div className={styles.svg_header}><MainSVG/>
        <div className={styles.header_menu}>
        
        <a style = {optionMenu} href="#">О нас</a>
        <a style = {optionMenu} href="#">Услуги</a>
        <a style = {optionMenu} href="#">Аренда</a>
        </div>
        <button className={styles.button}>
        Связаться
        </button>
    </div>
    </div>


        <div className={styles.block_header}>
            <div className={styles.text_wrapper}>
            <h1 className={styles.title_header}>Веломастерская “Велозар”</h1>
            <p style={{marginTop: '85px', paddingRight: '50px'}}>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию.
            <br/>Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <img src = {VeloZavr} width='543px' height='533px'/>
        </div>
    </div>
    )
}

export default Header