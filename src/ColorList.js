import React from "react"
import { Link } from "react-router-dom"
import "./ColorList.css"

const ColorList = ({ colors }) => {
    return (
        <div>
            <h3>Please select a color</h3>
            {colors.map(c => (
                <div className="ColorList-link">
                    <Link to={`/colors/${c.colorName}`}
                        style={{
                            color: `${c.colorValue}`,
                            border: `2px solid  ${c.colorValue}`
                        }}>{c.colorName}</Link>
                </div>
            ))}
        </div>
    )
}

export default ColorList
