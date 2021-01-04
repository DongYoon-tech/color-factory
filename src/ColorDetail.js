import React from 'react'
import { useParams, Link } from 'react-router-dom'
import "./ColorDetail.css"

const ColorDetail = ({ colors }) => {

    const { color } = useParams()

    return (
        <div className="ColorDetail-container">
            {colors.map(c => c.colorName == color
                ?
                <div className="ColorDetail" style={{
                    backgroundColor: `${c.colorValue}`
                }}>

                    <p>THIS IS {color.toUpperCase()}</p>
                    <p>Isn't it beautiful</p>

                    <Link to="/">Go Back!!!</Link>

                </div >
                :
                null
            )}


        </div>
    )
}

export default ColorDetail
