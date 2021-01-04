import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import "./NewColor.css"

const NewColor = ({ addColor }) => {

    const [color, setColor] = useState({ colorName: "", colorValue: "" })

    const history = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setColor(d => ({ ...d, [name]: value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color)
        console.log(color)
        history.push('/')
    }

    return (
        <div className="NewColor">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="colorName">Color Name: </label>
                    <input
                        type="text"
                        name="colorName"
                        value={color.colorName}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="colorValue">Color Value: </label>
                    <input
                        type="color"
                        name="colorValue"
                        value={color.colorValue}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <button>Add this color</button>
            </form>
        </div>
    )
}

export default NewColor
