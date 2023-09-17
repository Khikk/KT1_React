import styles from './Notice.module.css'

function Notice(){
    return(
        <div className='all_text'>
            <div className={styles.container_notice}>
                <div className={styles.container_text}>
                <p className={styles.space_btwText}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.
                </p>
                <p>
                А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Notice