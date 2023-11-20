import { useState, useEffect } from 'react'
import heart from './assets/gradient_heart.jpg'
import tg from './assets//tele.png'
import vk from './assets/vk-logo.svg'
import inst from './assets/instagram.svg'
import './App.css'

function App() {

  const [isBeating, setBeating] = useState<boolean>(false);
  const [hueRotation, setHueRotation] = useState<number>(0);

  const handleClick = () => {
    const randomHueRotation = Math.floor(Math.random() * 360);
    setHueRotation(randomHueRotation);
  }

  useEffect(() => {
    // Устанавливаем интервал для симуляции отстукивания сердца
    const heartbeatInterval = setInterval(() => {
      setBeating((prevBeating) => !prevBeating);
    }, 700); // каждую секунду

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(heartbeatInterval);
  }, []);
  return (
    <>
    <div className="App">
      <h3 className='main-sign'>Здравствуйте, красивая девушка! Если Вы это читаете, то Вы меня очень зацепили и этот сайт-подкат создавался именно для Вас!</h3>
      <img src={heart} alt="" className={`heart ${isBeating ? 'beat' : ''}`} onClick={handleClick}  style={{
          filter: `hue-rotate(${hueRotation}deg)`,
          transition: 'filter 0.5s ease-in-out', // Добавляем плавный переход
          cursor: 'pointer', // Делаем курсор указателем при наведении
        }}/>
      <h4>Хотелось бы познакомиться поближе и если Вы не против, то напишите мне в любую из понравившихся соцсетей:</h4>
      <div className="socials">
        <a href='https://t.me/nkudaaaaa' target='_blank'><img src={tg} alt="" className='socials-img'/></a>
        <a href='https://vk.com/n_kudaaaaa' target='_blank'><img src={vk} alt="" className='socials-img'/></a>
        <a href='https://www.instagram.com/nkudaaaaa_' target='_blank'><img src={inst} alt="" className='socials-img'/></a>
      </div>
    </div>
      <h6>PS: сердце меняет цвет от нажатия)</h6>
    </>
  )
}

export default App
