import React from 'react'
import './Pagination.css'
import '../../util/MovieDB'

const Pagination = ({decrement, increment, number, resetNumber, skip, last}) => {

    return (
        <div className="Whole">
                {/* <div className= 'Pagination'>
                    {arrray.map(square =>  <div className='square'></div>)}
                </div> */}
                <div className='Pagination'>
                    { number > 1 && <div className='arrow_two' onClick={resetNumber}> {`<<`} </div>}
                    <div className='arrow' onClick={decrement}> {`<`} </div>
                    <div className='number'>{number}</div>
                    <div className='arrow' onClick={increment}>{`>`}</div>
                    {last != number && <div className='arrow_two' onClick={skip}>{`>>`}</div>}
                </div>
        </div>
    )
}

export default Pagination
