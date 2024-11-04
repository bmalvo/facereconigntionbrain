import './Logo.css'
import Tilt from 'react-parallax-tilt'
import brain from './brain.png'

export const Logo = () => {

    return <>
        <div className='ma4 mt0'>
            <Tilt
                className='Tilt br2 shadow-2'
          style={{
                  width: '100px',
                  minWidth: '100px',
                  height: '100px',
                  minHeight: '100px'
                }}>
          <div>
            <img src={brain} alt="brain pic" />
          </div>
        </Tilt>
        </div>
    </>
}