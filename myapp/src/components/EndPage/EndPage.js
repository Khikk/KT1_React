import Velo2 from './velo2.jpg'
import styles from './EndPage.module.css'


function EndPage(){
    return(
        <div className='all_text'>
            <div>

                <div className={styles.container_picture}>
                <img src={Velo2} width='637px' height='750px'></img>
                </div>
        <div className={styles.container_alltext}>
            <h1 className={styles.container_title}>Прокат велосипедов</h1>
            <div className={styles.container_text}>
            <div>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</div>
            </div>
        </div>
            </div>

        </div>
    )
}

export default EndPage