import React, { FC, useEffect, useState } from 'react';
import { Rated, UnRated } from './svg';

import './rating.module.css';



export interface RatingProps  {
    totalRating: Number,
    ratingAlloted?: Number,
    onRatingChange: Function
}

export const Rating: FC<RatingProps> = (props) => {
    const {totalRating, ratingAlloted = -1} = props;
    const [previousRating, setPreviousRating] = useState(ratingAlloted);
    const [currentRating, setCurrentRating] = useState(ratingAlloted);

    useEffect(() =>{
        setPreviousRating(ratingAlloted)
        setCurrentRating(ratingAlloted);
    },[ratingAlloted]);

    const handleChange = (id: number) =>{
        setCurrentRating(id);
        setPreviousRating(id)
    }
    const reset = () =>{
        setCurrentRating(previousRating);
    };
    const focusHandler = (id:number) =>{
        setCurrentRating(id);
    };


    return (
      <div className='main' onMouseLeave={reset}>
        {Array(totalRating).fill(0).map((_, index) => (
            <div className='icon' 
                onClick={() =>{
                    handleChange(index+1);
                }}
                onMouseEnter={()=>{
                    focusHandler(index+1);
                }}
            >
                {
                currentRating >= index+1 ? (
                    <Rated size={30}/>
                ):(
                    <UnRated size={30}/>
                )
            }
            </div>
        ))}
        {/* <Rated /> */}
      </div>
  )
};
