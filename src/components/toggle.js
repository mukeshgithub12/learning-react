import React from 'react'

const Toggle = () => {
    const [show ,setShow] = React.useState(true);
    const Toggle = () => {
        setShow(!show);
    }
  return (
    <div>
        {/* <button type="button" onClick={()=>setShow(!show)} className='btn btn-info rounded-0'>Toggle</button> */}
        <button type="button" onClick={Toggle} className='btn btn-info rounded-0'>Toggle</button>
      {show ? <h1>Show Data</h1> : null}
    </div>
  )
}

export default Toggle
