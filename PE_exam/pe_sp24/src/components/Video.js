import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function Video() {
    const videos = useSelector(state => state.videos)

    return (
        <div>
            <div className='w100'>
                <img className='w-100' src='./img/th.jpg' />
            </div>
            {/* <h1 className='text-danger'></h1> */}
            <div style={{ marginRight: '0' }} className='row'>
                {videos.map(video => (
                    <div key={video.id} className='col-md-6 col-lg-4 col-sm-6 mb-6 mt-3 mb-3'>
                        <div className="card">
                            <h6 className='m-2'>{video.title}</h6>
                            <p className='m-2'>{video.description}</p>
                            <iframe className='card-img-top' width="560" height="315" src={video.url} title="YouTube video player" allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            <div className="card-body">
                                <h5 className="card-title">Comment</h5>
                                {video.comments.map(comment => (
                                    <ul>
                                        <li>{comment.user} {comment.text}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

Video.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string
    }),


}

export default Video
