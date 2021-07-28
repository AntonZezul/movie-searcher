import { Box, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    cardMedia: {
      paddingTop: '100%',
      height: '10rem',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,.4)',
    },
    
  }));

function Poster({poster}) {
    const classes = useStyle()
    return (
        <CardMedia className={classes.cardMedia} image={poster}>
                <div className={classes.overlay}></div>
                
              </CardMedia>
    )
}

export default Poster
