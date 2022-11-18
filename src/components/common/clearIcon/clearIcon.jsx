// eslint-disable-next-line no-unused-vars
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const ClearIcon = ({ onClick }) => {
  return (
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
            <CloseIcon style={{ fontSize: 24, color: '#ffb1b1' }}/>
        </div>
  )
}

export default ClearIcon
