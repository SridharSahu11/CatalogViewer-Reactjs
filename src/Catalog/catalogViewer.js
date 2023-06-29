import React, {useRef, useState } from 'react';
import "./catalogViewer.css";


const CatalogViewer = () => {
  const images = ['https://cdn.pixabay.com/photo/2017/11/24/21/49/bali-2975787_640.jpg',
    'https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/03/29/13/18/butterfly-4089197_640.jpg',
    'https://cdn.pixabay.com/photo/2019/03/29/18/35/palace-4089857_640.jpg',
    'https://cdn.pixabay.com/photo/2022/02/23/17/08/planets-7031048_1280.jpg']
  const [imgs] = useState(images);
  const [selectimg, setSelectimg] = useState(0);
  const timer = useRef(null);

  const style = {
    width: "400px",
    height: '400px',
  };

  const sildeshow = ({target : {checked}}) => {
    if (checked) {
      timer.current = setInterval(() => {
        setSelectimg(selectimg => selectimg === imgs.length-1 ? 0 : selectimg + 1);
      }, 2000);
      return;
    }
    clearInterval(timer.current);
    timer.current = null;
  }
  const handleClick = (i) => {
    setSelectimg(i)
  }
  return (
    <div className='card'>

      <img style={style} src={imgs[selectimg]} alt='' />


      <input type="checkbox" id="myCheck" onClick={sildeshow} />
      <div id='imgContainer'>
        <button onClick={() => {
          if (selectimg > 0) {
            setSelectimg(selectimg - 1);
          }
        }}
        > PREV</button>
        <div id='box'>
          {
            imgs.map((ele, i) => {
              return <img key={i} src={ele} alt='images' onClick={() => { handleClick(i) }} height='70' width='100' />
            })
          }
        </div>
        <button onClick={() => {
          if (selectimg < imgs.length-1) {
            setSelectimg(selectimg + 1);
          }
          else{
            setSelectimg(0);
          }
        }}>NEXT</button>
      </div>
    </div>
  )
}

export default CatalogViewer;