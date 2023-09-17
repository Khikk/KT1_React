import Velo from './velo.jpg'
import styles from './Body.module.css'
function Body(){
    return(
        <div className='all_text'>
            <div className={styles.body_block}>
            <div className={styles.body_TitlText}>
            <h1 className={styles.body_title}>Что мы предлагаем</h1>
            <div className={styles.body_text}>
            <div>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</div>
            </div>
            </div>
            <div className={styles.body_picture}>
            <img src={Velo} width='520px' height='604px' className={styles.body_picture}></img>
            </div>
            </div>

        </div>

    )
}

export default Body