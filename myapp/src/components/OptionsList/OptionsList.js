import Options from "../Options/Options"
import styles from './OptionsList.module.css'


function OptionsList(){
    let data = [
        {id: 1, backgroundColor: 'rgba(34, 53, 111, 1)', title: 'Годовое ТО'},
        {id: 2, backgroundColor: 'rgba(0, 82, 193, 1)', title: 'Выравнивание колес'},
        {id: 3, backgroundColor: 'rgba(118, 181, 139, 1)', title: 'Настройка переключателей'},
    ]
    return(
        <div className={styles.post_wrapper}>
        {data.map(elem => <Options
                            key = {elem.id}
                            backgroundColor = {elem.backgroundColor}
                            title = {elem.title}

                            />)}
        
        </div>
    )
}

export default OptionsList