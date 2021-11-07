import React from "react"
import ReactPlayer from "react-player"

const ResponsivePlayer = ({ url }) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            controls={true}
            width='1080px'
            height='576px'
          />
        </div>
      )
  }

  export default ResponsivePlayer