import React, {useState, useEffect} from 'react'

export default function AllArticles() {

    useEffect(() => {
        fetch('http://localhost:3001/')
    }, [])
    return (
        <div>
            
        </div>
    )
}
