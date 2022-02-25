import React from "react"
import Navbar from "./Navbar"
import Journal from "./Journal"
import data from "./Data"

export default function App() {
    const postcards = data.map(item => {
        return (
            <Journal
                key={item.id}
                    {...item}
            />
        )
    })
    
    return (
        <div className="content">
            <Navbar />
            {postcards}
        </div>
    )
}