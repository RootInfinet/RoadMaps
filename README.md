
# RoadMap-Tech

Our roadmap platform stands out from the rest; our research revealed that most projects created by learners lack security, so we integrate cybersecurity directly into the roadmaps, ensuring students learn programming based on the "Security by Design" principle.

---
## 🛠 Tech Stack

### Front-End
* **Core:** React 19, Vite, React Router DOM
* **State Management:** Redux Toolkit
* **Styling & UI:** Tailwind CSS (v4), Framer Motion, Lucide React, Recharts
* **Utilities:** Axios, EmailJS, React GA4

### Back-End & Database
* **Runtime & Framework:** Node.js, Express 5
* **Database & ORM:** PostgreSQL, Prisma ORM
* **Caching:** Redis, Redis Memory Server
* **Security & Auth:** JWT, Bcrypt, Helmet, Express Rate Limit, Zod

### Testing
* **Automation:** Playwright
* **Code Quality:** ESLint

---
## 🔒 Security Architecture & Layers
Security is not an afterthought in our platform; it is embedded into every layer of our backend infrastructure:

* **HTTP Headers Security (Helmet):** Secures the Express application by setting various HTTP headers to defend against common web vulnerabilities like XSS, Clickjacking, and MIME-sniffing.

* **Rate Limiting (Express Rate Limit):** Protects API endpoints against Brute-Force and Denial of Service (DoS) attacks by restricting repeated requests from the same IP address.

* **Strict Input Validation (Zod):** Validates all incoming payloads and user data on the server side to prevent injection attacks and ensure absolute structural integrity.

* **Password Hashing (Bcrypt):** Securely hashes user passwords using strong salt rounds before storing them in the PostgreSQL database.

* **Token-Based Authentication (JWT):** Secures sensitive routes and user sessions using JSON Web Tokens with strict expiration policies.
* **Strict CORS Configuration:** Restricts cross-origin resource sharing to trusted front-end domains only, blocking unauthorized external API consumption.
