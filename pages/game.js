import styles from '../styles/Home.module.scss'

export default function Home() {
    
    const text = 'The quick brown fox jumped over the lazy dog.';


    
    
    return (
    <div>
        <div className={styles.text}>
        {`${text}`}
        </div>
    </div>
    )
  }