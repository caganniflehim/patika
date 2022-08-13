import React from 'react'

function Card() {
  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  },[]);
  return (
    <div className='character_map'>
      <main role="main" className="dLESzS">
      
      
      <div className='cLPBVN'>
        <div className='jaGwnY'>
            <div className='fgPKig'></div>
            <div className='gCILqu'></div>
            <div className='lfMqRr'></div>
        </div>
        <img className='char_img' src='https://vignette.wikia.nocookie.net/breakingbad/images/f/f3/Officer_Saxton_-_I.F.T..png/revision/latest?cb=20131025090606'/>

        <div className='char_btm btm2'>
            <p className='btPmOt'>Officer Saxton</p>
            <div className='underline' >
            <img className='bee_logo' src='https://images-na.ssl-images-amazon.com/images/I/31NhsG8XFpL._SX425_.jpg'/>
            <p>Saxton</p>
        </div>
            <div className='hidden_info'>
            <div>
                <p>Id</p>
                <p>56</p>
            </div>
            <div>
                <p>Occupation</p>
                <p className='occ_map'>APD Officer</p>
            </div>
            <div>
                <p>Breaking Bad Seasons</p>
                "3"
            </div>
            <div>
                <p>Status</p>
                <p>Alive</p>
            </div>
        </div>
        </div>
       
        
      </div>
      </main>
    </div>
  )
}

export default Card
