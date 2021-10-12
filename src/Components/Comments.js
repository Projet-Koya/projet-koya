import React, {useState, useContext, useEffect} from 'react'
import { LoginContext } from '../App';

export default function Comments() {
    const LoginStatus = useContext(LoginContext)
    const [articleIDToComment, setArticleIDToComment] = useState()
    setArticleIDToComment(LoginStatus.articleID)
    useEffect(() => {
        fetch('http://localhost:3001/')
    })
    return (
        <div>
            
        </div>
    )
}
