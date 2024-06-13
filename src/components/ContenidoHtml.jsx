import React from 'react'

const ContenidoHtml = () => {
  return (
    <div className='pages'>
    <div className='pages_wrapper'>
      <div
        id='page-1'
        className='page page--welcome page--intro'>
        <h1 className='message'><span className='mlz'>MLZ</span> Pro One</h1>
      </div>
      <div
        id='page-2'
        className='page page--headband page--hidden'>
        <h1 className='message'>Banda Comoda</h1>
        <p className='message--sub'>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Aspernatur quae architecto
          molestiae laudantium consequuntur.
        </p>
      </div>
      <div
        id='page-3'
        className='page page--sounds page--hidden'>
        <h1 className='message'>Control de sonido</h1>
        <p className='message--sub'>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Aspernatur quae architecto
          molestiae laudantium consequuntur.
        </p>
      </div>
      <div
        id='page-4'
        className='page page--battery page--hidden'>
        <h1 className='message'>Gran Bateria</h1>
        <p className='message--sub'>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Aspernatur quae architecto
          molestiae laudantium consequuntur.
        </p>
      </div>
      <div
        id='page-5'
        className='page page--construction page--hidden'>
        <h1 className='message'>Construcción Robusta</h1>
        <p className='message--sub'>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Similique, accusamus.
        </p>
      </div>
      <div
        id='page-6'
        className='page page--brandlogo page--hidden'>
        <h1 className='message' style={{textAlign:"center"}}>¡Consigue el tuyo!</h1>
        <button className='comprar'>¡Comprar ahora!</button>
      </div>
    </div>
  </div>
  )
}

export default ContenidoHtml