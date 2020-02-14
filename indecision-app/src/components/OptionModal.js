import React from 'react'
import Modal from 'react-modal'


const OptionModal=(props)=>{

  return(
   <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option" onRequestClose={props.handleClrSelectedOption}>
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClrSelectedOption}>Okay</button>
   </Modal>
  )

}

export default OptionModal