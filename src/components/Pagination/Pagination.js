import React from 'react'
import './Pagination.css'
import '../../util/MovieDB'
import { useDispatch} from 'react-redux'
import { decrementPage, incrementPage, skipPageBack, skipPageForward } from '../../actions'

const Pagination = ({last, number}) => {
    const dispatch = useDispatch();

    return (
        <div className="Whole">
                {/* <div className= 'Pagination'>
                    {arrray.map(square =>  <div className='square'></div>)}
                </div> */}
                <div className='Pagination'>
                    { number > 1 && <div className='arrow_two' onClick={() => dispatch(skipPageBack())}> {`<<`} </div>}
                    <div className='arrow' onClick={() => dispatch(decrementPage())}> {`<`} </div>
                    <div className='number'>{number}</div>
                    <div className='arrow' onClick={() => dispatch(incrementPage())}>{`>`}</div>
                    {last != number && <div className='arrow_two' onClick={() => dispatch(skipPageForward())}>{`>>`}</div>}
                </div>
        </div>
    )
}

export default Pagination
