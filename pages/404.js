import { useState} from 'react';
 import styles from "../styles/404.module.scss"; 
 import Image from "next/image"; 
 import { useRouter } from 'next/router'; 

 export default function Custom404() { 
  const [isFlashing, setIsFlashing] = useState(false); 
  const router = useRouter();
  
  const handleButtonClick = () =>{ 
    setIsFlashing(true); 
    setTimeout(() =>{ 
    setIsFlashing(false); 
    router.push('/homePage'); 
    }, 700) 
  }
   
  return ( 
    <> 
      <div className={styles.eraserContainer}> 
      <h1 className={styles.eraserContainer__h1}> Oops, this page does not exist! We must now erase your memory and pretend like this never happened</h1> 
        <Image src="/images/MIB-Eraser.webp" width={300} height={500} className={styles.eraserContainer__eraser} id="memory-eraser" alt="Memory Eraser from Men In Black movie" onClick={handleButtonClick}></Image> 
      </div> 
      {isFlashing && <div className={styles.flash} />} 
    </> 
    )
  }
