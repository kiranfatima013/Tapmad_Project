import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom"

export default function DetailPage() {
  const {id, name, channel} = useParams();
  console.log(id, "Id")
  console.log(channel, "Name")
  const URL = `https://app.tapmad.com/api/getRelatedContentWeb/V1/en/web/${id}/${channel}`
  const [content, setContent] = useState('');

  useEffect(() => {
   fetchData() 
  }, [])
  const fetchData = async () => {
    try {
      const response = await axios.get(URL)
      setContent(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <section className="main">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="description ">
              <h1>{content?.Video?.ContentVideoName}</h1>
              {content.Video ? (
                <p>{content?.Video?.ContentDescription}</p>
              ) : (
                <p> Description not found</p>
              )}
              <button className="btn-success btn-Watch ">Watch Now</button>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="imageSetting">
              <img
                src={content?.Video?.ContentImage}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid " style={{ padding: "32px" }}>
          <div className="rec">
            <div className="recommended" role="button">
              Recommended
            </div>
          </div>
          <div className="relatedImages calculation">
            {content &&
              content.Sections.map((value, index) => {
                return value.Videos.map((video) => {
                  return (
                    <Link className="videoLink">
                      <a>
                        <img src={video.ContentImage} alt="img" />
                      </a>
                    </Link>
                  )
                })
              })}
          </div>
        </div>
      </section>
    </>
  )
}
