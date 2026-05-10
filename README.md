# GourmetPOS — Modern Restaurant Billing & SaaS Platform 🍽️

[![React](https://img.shields.io/badge/Frontend-React.js%20%2F%20Vite-blue?logo=react)](https://react.dev)
[![.NET](https://img.shields.io/badge/Backend-.NET%209%20Web%20API-purple?logo=dotnet)](https://dotnet.microsoft.com/)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

**GourmetPOS** is an end-to-end, production-grade Enterprise SaaS solution tailored for contemporary hospitality management. Inspired by top-tier ecosystems like Square POS and Toast, it unites front-of-house operations, cloud kitchen fulfillment, multi-tenant SaaS provisioning, and granular real-time financial intelligence into a unified, performant architecture.

---

## ✨ Key Features

### 🖥️ Restaurant Control & POS
- **Live Graphic POS**: Seamless, animated billing interface with category drilldowns, dynamic checkout totals, and smooth quantity adjustment built with Framer Motion.
- **Advanced Analytics**: High-fidelity dashboards leveraging Recharts Area Charts with instant trend monitoring for revenue, transaction volume, and average ticket value.
- **Interactive Floor Plans**: Physical layout management staging area with geometric plotting capabilities.

### 🔐 Enterprise Security & SaaS Gating
- **Microsoft Identity Engine**: Rigid, cryptographic identity persistence with default, pre-seeded Roles (`SuperAdmin`, `Owner`, `Cashier`, etc.).
- **SaaS Multi-Tenancy**: Distinct root routing at `/superadmin` enforcing absolute environment isolation and tenant auditing metrics.
- **Smart Auth Middleware**: React Context and persistent state tracking ensuring bulletproof role-based navigational locks.

### 🛠️ Comprehensive Ecosystem
- **Domain Modeling**: Robust, high-precision aggregate roots encompassing `Orders`, `Payments`, `Inventory`, and `TableEntity` mapped instantly via EntityFrameworkCore.

---

## 🧱 Technology Stack

### Frontend
- **Runtime**: React 18+ & Vite.
- **Styling**: Tailwind CSS v4 (Native CSS Theme architecture).
- **Motion**: Framer Motion dynamics.
- **Charts**: Recharts data visualization.
- **State**: Zustand persist engines & TanStack Query.
- **Routing**: React Router DOM v6.

### Backend
- **Framework**: ASP.NET Core Web API (.NET 9/10).
- **ORM**: EntityFramework Core for PostgreSQL.
- **Security**: Microsoft Core Identity & JWT tokens.
- **Logging**: Structured observability through Serilog.
- **Mapper**: Automapper for clean DTO encapsulation.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [.NET 9.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- PostgreSQL Instance (Local or Cloud)

### Setting up API server
1. Navigate to system backend:
   ```bash
   cd RestaurantPOS.API
   ```
2. Configure local database in `appsettings.Development.json`.
3. Rebuild & run application:
   ```bash
   dotnet build
   dotnet run
   ```

### Setting up UI
1. Open a new command shell and jump to frontend:
   ```bash
   cd frontend
   ```
2. Install runtime modules:
   ```bash
   npm install
   ```
3. Kick off the development hot-reload cluster:
   ```bash
   npm run dev
   ```

🔗 Access the application locally at **[http://localhost:5173/](http://localhost:5173/)**

---

## 👤 Seed Credentials
For immediate platform capability exploration, the following master security keys are injected at first deployment:

- **Super Admin Email**: `admin@hexapos.com`
- **Standard Password**: `Admin123!hXa`

---

## 📄 Licensing

Distributed under the **MIT License**. Visual assets and proprietary UI prototypes belong rigidly to original requested specifications. Developed with absolute care by Google DeepMind’s advanced autonomous engineering systems in cooperation with user `suragms`.
