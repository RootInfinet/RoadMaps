```
RoadMap
├─ Back_End
│  ├─ .env
│  ├─ .production.env
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ prisma
│  │  ├─ migrations
│  │  │  ├─ 20260625153532_clean_schema
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260702153314_make_step_optional
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260702153903_make_step_optional
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260702154218_clean_user_progress_relations
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260704170928_user_enrollment_refactor
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260711093838_update_schema_v2
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260716221952_update_uerrole
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260726191907_update_auto_delete
│  │  │  │  └─ migration.sql
│  │  │  ├─ 20260726193512_update2
│  │  │  │  └─ migration.sql
│  │  │  └─ migration_lock.toml
│  │  └─ schema.prisma
│  ├─ Script_Dev.py
│  ├─ server.js
│  └─ src
│     ├─ Controller
│     │  ├─ AuthController.js
│     │  ├─ ProgressController.js
│     │  ├─ Roadmap_controller.js
│     │  └─ upload-controller.js
│     ├─ middlewares
│     │  ├─ auth.js
│     │  ├─ upload-middleware.js
│     │  └─ validate.js
│     ├─ Router
│     │  ├─ auth-route.js
│     │  ├─ main-route.js
│     │  ├─ progress-route.js
│     │  └─ upload-route.js
│     └─ uploads
├─ Front_End
│  ├─ dist
│  │  ├─ assets
│  │  │  ├─ image-Bb0ph7CR.webp
│  │  │  ├─ index-CWNcKkJX.css
│  │  │  └─ index-DmuvW3Jn.js
│  │  └─ index.html
│  ├─ eslint.config.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  └─ axios.js
│  │  ├─ App.jsx
│  │  ├─ Asessts
│  │  │  ├─ icon-RoadMap_Tech.ico
│  │  │  └─ image.webp
│  │  ├─ Components
│  │  │  ├─ About.jsx
│  │  │  ├─ Contact.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Hero.jsx
│  │  │  ├─ NavBar.jsx
│  │  │  ├─ ProtectedRoute.jsx
│  │  │  └─ RoadmapSidebar.jsx
│  │  ├─ data
│  │  │  └─ frontEndRoadmap.js
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ Pages
│  │  │  ├─ Admin_Dashbord.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ Profile.jsx
│  │  │  ├─ Roadmaps.jsx
│  │  │  ├─ Roadmapview.jsx
│  │  │  ├─ Signup.jsx
│  │  │  └─ Terms.jsx
│  │  ├─ Redux
│  │  │  └─ UserSlice.js
│  │  └─ Store
│  │     └─ Store.js
│  └─ vite.config.js
├─ package.json
└─ README.md

```