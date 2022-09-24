import React from 'react'
import { Dna } from 'react-loader-spinner'
const Spinner = () => {
  return (
    <div>
        
        <Dna
  visible={true}
  height="10"
  width="10"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
    </div>
  )
}

export default Spinner