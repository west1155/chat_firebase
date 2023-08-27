import db from './initFirestore';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export async function deleteAllMessages() {
    const messagesCollection = collection(db, 'messages');
    
    try {
        // Fetch all message documents from the collection
        const querySnapshot = await getDocs(messagesCollection);

        // Delete each message document
        querySnapshot.forEach(async (docSnapshot) => {
            const messageRef = doc(db, 'messages', docSnapshot.id);
            await deleteDoc(messageRef);
        });

        console.log('All messages deleted successfully');
    } catch (error) {
        console.error('Error deleting messages:', error);
    }
}