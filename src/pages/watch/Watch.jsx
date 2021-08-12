import { ArrowBackOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import React from './watch.scss'

const Watch = () => {
    let history = useHistory()
    return (
        <div className="watch">
            <div className="back" onClick={() => history.push('/')}>
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls
                src="https://vod-progressive.akamaized.net/exp=1628681877~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4341%2F20%2F521707474%2F2437261031.mp4~hmac=55e9d45898ddff4afd71cf8737b494ef16947577513d0f9cdd784e4efba223a9/vimeo-prod-skyfire-std-us/01/4341/20/521707474/2437261031.mp4?filename=Ink+-+67358.mp4"
            />
        </div>
    )
}

export default Watch
