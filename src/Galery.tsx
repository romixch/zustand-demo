import styles from './Galery.module.css'
import myZustand from './myZustand'

export const Galery = () => {
  console.log('Rendering Galery')
  const { galeryImageName, nextImage } = myZustand()
  return (
    <div className={styles.galery}>
      <img
        className={styles.image}
        src={galeryImageName}
        onClick={nextImage}
        alt="Galery"
      ></img>
    </div>
  )
}
