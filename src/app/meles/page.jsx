
import Meals from '@/components/Meals';
import React from 'react';
import styles from '../meles/styles.module.css'

export const metadata = {
    title: {
        absolute: 'mels'
    },
    description: "mels next js",
  };
const page = () => {
    
    return (
        <div className='p-10 mt-9'>
            <h3 className=' font-semibold text-3xl text-red-500'>coose your faveret item</h3>
            <p className={styles.text_large}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo id labore pariatur minus velit quos, quasi impedit natus a!</p>
          <Meals></Meals>
        </div>
    );
};

export default page;