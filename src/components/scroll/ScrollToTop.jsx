import React from 'react'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../scss/component/_scroll.scss'
import { BsArrowBarUp } from 'react-icons/bs';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const TopButton = () => {
    const [topButton,setTopButton] = useState(false)

    useEffect(() =>
    {
       window.addEventListener("scroll" , () =>
       {
        if(window.scrollY > 100)
        {
            setTopButton(true)
        }
        else
        {
            setTopButton(false)
        }
       })
    },[])

    const scrollOn = () =>
    {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <div>
        {topButton && (
            <button id="scroll-top"
            onClick={scrollOn}>
              {/* <BsArrowBarUp className='icon'/> */}
              <FontAwesomeIcon icon={faAngleUp} className='icon'/>
            </button>
        )}
    </div>
  )
}

export default TopButton