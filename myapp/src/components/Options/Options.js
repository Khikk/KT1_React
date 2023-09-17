import styles from './Options.module.css'

function Options(props){
    const lineStyle = {
        content: "",
        width: "300px",
        height: "1px",
        backgroundColor: "white",
        marginBottom: "220px",
      };
    const{title, backgroundColor} = props 
    return(
        <div className='all_text'>
        
        <div className={styles.post_item} style={{backgroundColor}}>
        <div style={lineStyle}>
        <p></p>
        <div className={styles.container_text}>{title}</div>
        </div>
        </div>
        </div>
    )
}

export default Options