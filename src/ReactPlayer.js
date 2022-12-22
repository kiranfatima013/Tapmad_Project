import React from "react"
import ReactJwPlayer from 'react-jw-player'
export default function ReactPlayer() {
  return (
    <section className="videoSection">
      <h1>ReactJwPlayer</h1>
      <div className="videoSetting">
        <ReactJwPlayer
          file="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4"
          playerScript="https://cdn.jwplayer.com/libraries/TPQRzCL9.js"
          playerId="Video1"
        />
      </div>
    </section>
  )
}