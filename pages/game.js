import styles from '../styles/game.scss'

function Game() {
    
    const text = 'The quick brown fox jumped over the lazy dog.';


    
    
    return (
    <div>
        <div className={styles.text}>
        {`${text}`}
        </div>
    </div>
    )
  }
  
  export default Game