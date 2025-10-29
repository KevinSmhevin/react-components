import React from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle"

/**
 * A star component that can be toggled on and off.
 * @param {function} onChange - a callback to be called when the star is toggled
 * @returns {React.ReactElement} - a star component
 */
export default function Star({ onChange }) {
    const [on, toggle] = useToggle({ onToggle: onChange })
    return (
        <>
            {
                on ?
                    <BsStarFill onClick={toggle} className="star filled" /> :
                    <BsStar onClick={toggle} className="star" />
            }
        </>
    )
}