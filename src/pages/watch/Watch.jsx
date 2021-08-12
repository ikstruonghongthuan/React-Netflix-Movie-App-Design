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
                src="https://cdn.videvo.net/videvo_files/video/free/2021-04/small_watermarked/210329_06B_Bali_1080p_013_preview.webm"
            />
        </div>
    )
}

export default Watch
