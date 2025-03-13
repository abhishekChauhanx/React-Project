import React from 'react'

const Note = ({id,text,editHandle}) => {
  return (
    <div className='note'>
        <div className="note-body">
            {text}
<div className='note-footer'>
<button className='note-save-btn'>Delete</button>
<button className='note-save-btn' onClick={()=>editHandle(id,text)}>Edit</button>
</div>
        </div>
      
    </div>
  )
}

export default Note
