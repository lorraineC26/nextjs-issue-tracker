import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css'; // imported as an obj


const ProuductCard = () => {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>

  )
}

export default ProuductCard
