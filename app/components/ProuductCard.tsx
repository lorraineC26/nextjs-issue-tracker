import React from 'react'
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css'; // imported as an obj


const ProuductCard = () => {
  return (
    // <div className={styles.card}>
    //   <AddToCart />
    // </div>

    //using tailwind css
    // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
    //   <AddToCart />
    // </div>

    <div>
      <AddToCart />
    </div>

  )
}

export default ProuductCard
