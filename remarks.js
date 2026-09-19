import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let db;
try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch(e) {
    console.log("Waiting for Firebase config...");
}

const remarkForm = document.getElementById('remark-form');
const remarksWall = document.getElementById('remarks-wall');

async function loadRemarks() {
    if (!db) {
        remarksWall.innerHTML = '<div class="sticky-note"><h4>System Message</h4><p>Remarks wall is ready! Just add your Firebase keys in remarks.js to go live.</p></div>';
        return;
    }
    
    remarksWall.innerHTML = '<p style="color:#ccc;">Loading remarks...</p>';
    try {
        const q = query(collection(db, "remarks"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        remarksWall.innerHTML = '';
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const note = document.createElement('div');
            note.className = 'sticky-note';
            note.innerHTML = `<h4>From: ${data.name}</h4><p>"${data.text}"</p>`;
            remarksWall.appendChild(note);
        });
    } catch (error) {
        remarksWall.innerHTML = '<p style="color:red;">Error loading remarks.</p>';
    }
}

if(remarkForm) {
    remarkForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!db) {
            // Fake submission for aesthetic testing if Firebase isn't set up yet
            const note = document.createElement('div');
            note.className = 'sticky-note';
            note.innerHTML = `<h4>From: ${document.getElementById('remark-name').value}</h4><p>"${document.getElementById('remark-text').value}"</p>`;
            remarksWall.prepend(note);
            remarkForm.reset();
            return;
        }
        
        const nameInput = document.getElementById('remark-name').value;
        const textInput = document.getElementById('remark-text').value;
        const submitBtn = remarkForm.querySelector('button');
        submitBtn.innerText = 'Posting...';
        
        try {
            await addDoc(collection(db, "remarks"), {
                name: nameInput, text: textInput, timestamp: new Date()
            });
            remarkForm.reset();
            loadRemarks();
        } catch (error) {
            alert("Error posting remark.");
        } finally {
            submitBtn.innerText = 'Post Remark';
        }
    });
}

loadRemarks();
