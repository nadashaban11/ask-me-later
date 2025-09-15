# AskMeLater Backend

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)  ![Express.js](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)  ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)  ![JWT](https://img.shields.io/badge/JWT-Auth-blue?logo=jsonwebtokens)  ![bcrypt](https://img.shields.io/badge/bcrypt-Password%20Hashing-yellow)  


AskMeLater is a simple **backend API** that helps users capture, organize, and manage their ideas, reminders, and notes while studying or working.  
The main goal is to avoid losing random thoughts or breaking your focus flow — just save them now and get reminded later!  

---

## 📌 Features

- [x] User Registration (Sign Up)  
- [x] User Login (Sign In)  
- [x] JWT Authentication  
- [x] Protected Routes (only logged-in users can access their ideas)  
- [x] Create Idea (linked to logged-in user)  
- [x] Get All Ideas (for logged-in user)  
- [x] Get Idea by ID  
- [x] Update Idea  
- [x] Delete Idea  

---

## 🔮 Upcoming Features


- [ ] more auth (confirm email)  
- [ ] Reminder system with scheduled tasks  
- [ ] Idea tags and priority levels  
- [ ] Search and advanced filtering  
- [ ] Notifications and alerts  
- [ ] Exporting ideas to JSON/CSV  
- [ ] Categories/Folders for better organization 


---

## 🤝 Contribution  

Contributions are welcome! Feel free to fork this repo, open an issue, or submit a pull request.  


## ⚙️ Tech Stack

- **Node.js** with **Express.js**  
- **MongoDB** with **Mongoose**  
- **JWT** for authentication  
- **bcrypt** for password hashing  

---

##  Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/nadashaban11/ask-me-later.git
cd ask-me-later
```

### 2️⃣ Install dependencies
``` bash
npm install
```

### 3️⃣ Create .env file
Add your environment variables (example):

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### 4️⃣ Run the server
```bash
npm run dev
```

API Endpoints

**Auth**

POST /api/auth/signUp → Register a new user

POST /api/auth/signIn → Login user & get token

**Ideas**

GET /api/ideas → Get all user’s ideas

POST /api/ideas → Add a new idea

GET /api/ideas/:id → Get idea by ID

PUT /api/ideas/:id → Update idea

DELETE /api/ideas/:id → Delete idea

(All ideas routes are protected with JWT — token required in headers as Authorization: Bearer <token>)

