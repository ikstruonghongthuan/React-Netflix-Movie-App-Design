import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from './listItem.scss'

const ListItem = ({ index }) => {
    let history = useHistory();
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => (setIsHovered(true))}
            onMouseLeave={() => (setIsHovered(false))}
        >
            <img
                src={`https://picsum.photos/id/${index*100}/200/300`}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow onClick={() => history.push("/Watch")} className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi, placeat dolor facere animi numquam eaque suscipit deserunt
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
