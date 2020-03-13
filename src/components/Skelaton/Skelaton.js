import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const Lazy = () => {
  return (
    <div style={{ width: '100%' }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </div>
  )
}

export default Lazy
