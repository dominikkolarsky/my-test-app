import React from 'react'

export default function Functional() {
    const [title, setTitle] = useState("React")
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
