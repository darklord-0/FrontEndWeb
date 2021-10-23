import React from "react";

const Card = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-4'>
            <img src = {`https://robohash.org/${props.id}?100x100`} alt="" />
            <div>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card