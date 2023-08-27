import { useState, useEffect } from 'react';
import db from './initFirestore';
import { collection, onSnapshot} from "firebase/firestore";

const MessagesContainer = () => {
    
    const [messages, setMessages] = useState('');
    
    useEffect(() => {
        onSnapshot(collection(db, "messages"), (snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data().text))
        })
    }, []
    )
    return { messages };
};

export default MessagesContainer
