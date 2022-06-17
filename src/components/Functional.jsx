import React from 'react'
import { useState } from 'react'

export default function Functional() {
const [title, setTitle] = useState("React, wheeee")
    return (
        <div>
            <h1 onClick={()=>setTitle("React reacts")}>{title}</h1>
        </div>
    )
}