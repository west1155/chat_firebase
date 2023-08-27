import React, {useState, useEffect } from 'react'
import s from './ChatUI.module.css'
import db from './initFirestore';
import deleteAllMessages from './deleteHistory'
import { collection, onSnapshot, addDoc, serverTimestamp, orderBy, limit, query} from "firebase/firestore";

const ChatUI = () => {
    
    const [messages, setMessages] = useState(['']);
    const [sendMessage, setSendMessage] = useState('')
    
    
    const messageLinkToDatabase = collection(db, "messages")
    const handleSubmit = async (e) => {
        e.preventDefault()
            
        await addDoc (messageLinkToDatabase, {
            text: sendMessage,
            timeOfCreation: serverTimestamp()
        })
        
        setSendMessage('')
    }
    
    useEffect(() => {
        const unsubscribe =
        onSnapshot(query(collection(db, 'messages'), orderBy('timeOfCreation', 'desc'), limit(10)), (snapshot) => {
            const messages_from_data = snapshot.docs.map((doc) => doc.data().text);
            setMessages(messages_from_data)
        })
        return () => unsubscribe()
    },[])
    
    return <div className={s.container}>
        <div className={s.header}><h1>Firebase Chat</h1></div>
        <div className={s.body}>
            {messages.map((message, index) => (
                <p key={index} className={s.message}>{message}</p>
                ))}
            
        </div>
        <div className={s.footer}>
            <form onSubmit={handleSubmit}>
                <input placeholder={'Input text here'}
                        type='text' name=''
                        onChange={(e) => setSendMessage(e.target.value)}
                        value={sendMessage}>
                        
                </input>
                <button type='submit'>SEND</button>
            </form>
            <button onClick={deleteAllMessages}>Delete history</button>
        </div>
        <div>
            
        </div>
    </div>
}

export default ChatUI