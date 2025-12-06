# 📘 Project Review Documentation

Thank you for taking the time to review this project.
Below is everything you need to run, evaluate, and understand the implementation.

---

# 🔧 Project Setup & Running Instructions

### **1. Backend (API)**

Navigate to the `api` folder:

```bash
cd api
npm install
npm run dev
```

If you want to run on a custom port:

```bash
npm run dev -- --port=4000
```

Copy the generated backend URL - it will be required for the frontend `.env.local`.

---

### **2. Frontend (Next.js App)**

Navigate to the `frontend` folder:

```bash
cd frontend
npm install
```

Create or uncomment `.env.example` → rename it to `.env.local`.

Inside `.env.local`, set:

```
NEXT_PUBLIC_API_URL=<PASTE_BACKEND_URL_HERE>
```

Then start the app:

```bash
npm run dev
```

---

# 🛠️ Tech Stack

A modern, production-ready stack:

* ⚛️ **Next.js 16**
* ⚛️ **React 19.2**
* 🧪 **TypeScript**
* 🏗️ **FSD Architecture**
* 🔄 **React Query** (data caching & server-state)
* 🎨 **TailwindCSS**
* 🧩 **Shadcn UI**
* 📝 **React Hook Form**
* 🔔 **Lucide Icons**
* 🧹 **ESLint & Prettier**
* 📱 **React Responsive** (hide unused components per device → reduces DOM & improves performance)

---

# ✨ Features Overview

## 🏠 Main Page (Assets List)

* 📄 Displays the full list of assets
* 🔍 Includes filtering by categories
* 🎞️ Animated cards with smooth transitions
* ⏳ Added loading states + skeletons
* ⚠️ Error handling with custom messages
* 📭 Empty state UI when no results
* 🧠 Only categories that contain at least one asset are shown

---

## 📄 Asset Details Page

* 👁️ Asset preview
* 🔄 Change asset status
* 📝 Asset edit form

    * Backend endpoint is missing → intentionally displays error toast
    * Success/error toasts added for UX clarity
* 💬 Message sending
* 🔔 Real-time UI updates via React Query

---

# 📁 Project Structure (FSD Architecture)

A simplified map of the project:

```
frontend/
 ├─ app/
 │   ├─ assets/
 │   │   ├─ page.tsx
 │   │   ├─ layout.tsx
 │   │   ├─ components/
 │   │   │   ├─ assets-filter/
 │   │   │   │   └─ assets-filter.tsx      # Filters panel
 │   │   │   └─ assets-header/
 │   │   │       └─ assets-header.tsx      # Page-level header
 │   │   │
 │   │   ├─ [id]/
 │   │   │   ├─ page.tsx                   # Asset details page
 │   │   │   ├─ layout.tsx                 # Details page layout
 │   │   │   └─ components/
 │   │   │       └─ asset-header/
 │   │   │           └─ asset-header.tsx   # Header for detail page
 │   │   │
 │   │   └─ ...
 │   │
 │   └─ layout.tsx
 │
 ├─ entities/
 │   └─ asset/
 │       ├─ model/
 │       │   ├─ type.ts                    # Asset type model
 │       │   ├─ constants.ts               # Statuses, name lists, maps
 │       │   ├─ helpers.ts                 # Formatting helpers
 │       │
 │       ├─ ui/
 │       │   └─ status-badge.tsx           # Small UI badge
 │       └─ index.ts
 │
 ├─ features/
 │   ├─ fetch-assets/
 │   │   ├─ api/
 │   │   │   ├─ get-assets.ts
 │   │   │   ├─ get-asset.ts
 │   │   │   ├─ update-status.ts
 │   │   │   └─ send-message.ts
 │   │   │
 │   │   ├─ model/
 │   │   │   ├─ use-assets.ts
 │   │   │   ├─ use-asset.ts
 │   │   │   ├─ query-keys.ts
 │   │   │
 │   │   └─ index.ts
 │   │
 │   ├─ update-asset/
 │   │   ├─ ui/
 │   │   │   └─ asset-edit-form.tsx        # Edit form (RHF)
 │   │   └─ model/
 │   │       └─ use-update-asset.ts
 │   │
 │   └─ update-status/
 │       ├─ ui/
 │       │   └─ status-select.tsx          # Status dropdown
 │       └─ model/
 │           └─ use-update-status.ts
 │
 ├─ widgets/
 │   ├─ asset-card/
 │   │   └─ ui/
 │   │       └─ asset-card.tsx             # Asset card in grid
 │   │
 │   ├─ asset-grid/
 │   │   ├─ ui/
 │   │   │   ├─ asset-grid.tsx
 │   │   │   ├─ asset-grid-wrapper.tsx     # Suspense wrapper
 │   │   │   └─ empty-state.tsx            # Message when no results
 │   │   └─ index.ts
 │   │
 │   ├─ asset-media-panel/
 │   │   └─ ui/
 │   │       └─ asset-media-panel.tsx      # Image / video / audio viewer
 │   │
 │   ├─ asset-status-panel/
 │   │   └─ ui/
 │   │       └─ asset-status-panel.tsx     # Status block + update UI
 │   │
 │   ├─ asset-details-sidebar/
 │   │   └─ ui/
 │   │       └─ asset-details-sidebar.tsx  # Sidebar with metadata
 │   │
 │   ├─ asset-edit-form/
 │   │   └─ ui/
 │   │       └─ asset-edit-form.tsx        # Form for editing fields
 │   │
 │   ├─ asset-message-panel/
 │   │   └─ ui/
 │   │       └─ asset-message-panel.tsx    # Send messages block
 │   │
 │   ├─ asset-viewer/
 │   │   └─ ui/
 │   │       └─ asset-viewer.tsx           # Preview + full info section
 │   │
 │   └─ asset-status-row/
 │       └─ ui/
 │           └─ asset-status-row.tsx       # Line with status & meta
 │
 ├─ shared/
 │   ├─ ui/
 │   │   ├─ button.tsx
 │   │   ├─ sheet.tsx
 │   │   ├─ spinner.tsx
 │   │   ├─ input.tsx
 │   │   ├─ textarea.tsx
 │   │   ├─ select.tsx
 │   │   └─ card.tsx
 │   │
 │   ├─ lib/
 │   │   ├─ utils.ts                      # cn(), classnames utils
 │   │   ├─ helpers.ts                    # common helpers
 │   │   └─ axios-instance.ts             # axios setup with env URL
 │   │
 │   ├─ config/
 │   │   ├─ breakpoints.ts                # Mobile / tablet / desktop
 │   │   ├─ api.ts                        # Base API endpoints
 │   │   └─ constants.ts                  # Reusable constants
 │   │
 │   └─ types/
 │       └─ index.ts
 │
 └─ styles/
     ├─ globals.css
     └─ shadcn.css
```
---

## 🧱 FSD Layers Overview

The project is organized using **Feature-Sliced Design (FSD)**.
Each layer has a clear responsibility and depends only “downwards”:

* **app** → routing and page composition
* **widgets** → large UI blocks combining features & entities
* **features** → user actions & business flows
* **entities** → domain models and pure logic
* **shared** → low-level reusable building blocks (UI, utils, config)

High-level overview:

```text
app (pages, layouts)
   ↓
widgets (asset-grid, asset-details-sidebar, ...)
   ↓
features (fetch-assets, update-status, update-asset, ...)
   ↓
entities (asset model, status mapping, helpers)
   ↓
shared (ui components, axios, config, utils)
```

This prevents business logic from leaking into UI-only layers and keeps the codebase scalable.

---

## 🔄 Data Flow: Main Page (Assets List)

Flow for the main `/assets` page:

```text
User opens /assets
        ↓
app/assets/page.tsx
  - renders page layout
  - mounts widgets: asset-header-widget, asset-grid-wrapper
        ↓
widgets/asset-grid/ui/asset-grid-wrapper.tsx
  - wraps asset-grid with Suspense/loading
        ↓
widgets/asset-grid/ui/asset-grid.tsx
  - reads filters
  - calls features/fetch-assets
        ↓
features/fetch-assets/model/use-assets.ts
  - uses React Query
  - queries API via features/fetch-assets/api/get-assets.ts
        ↓
shared/lib/axios-instance.ts
  - attaches baseURL (NEXT_PUBLIC_API_URL)
  - sends HTTP request to backend
        ↓
Backend API
  - returns assets list
        ↓
React Query cache
        ↓
asset-grid.tsx
  - renders widgets/asset-card/asset-card.tsx per item
  - renders empty-state.tsx when list is empty
  - shows loading/error states with proper messages
```

On this page:

* **Filtering** is handled at the feature level (query params / React Query options).
* **Animated cards** are implemented in `asset-card` / `asset-grid`.
* **Only categories with assets** are rendered (filtering done before mapping to UI).

---

## 🔄 Data Flow: Asset Details Page

Flow for `/assets/[id]`:

```text
User opens /assets/{id}
        ↓
app/assets/[id]/page.tsx
  - mounts main asset details widget
        ↓
widgets/asset-details-widget (composed from smaller widgets)
  - asset-media-panel
  - asset-status-panel
  - asset-details-sidebar
  - asset-edit-form
  - asset-message-panel
        ↓
features/fetch-assets/model/use-asset.ts
  - React Query fetch of single asset by id
  - calls features/fetch-assets/api/get-asset.ts
        ↓
shared/lib/axios-instance.ts
        ↓
Backend API
        ↓
React Query cache → provides `asset` to all child widgets
```

### Status Update Flow

```text
status-select (widgets/asset-status-panel/ui/asset-status-panel.tsx)
        ↓
features/update-status/model/use-update-status.ts
  - React Query mutation
  - calls features/fetch-assets/api/update-status.ts
        ↓
Backend API (stub)
        ↓
On success:
  - invalidate/useAssets/useAsset queries
  - show success toast
On error:
  - show error toast
```

### Form Update Flow

```text
asset-edit-form (widgets/asset-edit-form/ui/asset-edit-form.tsx)
  - controlled form via React Hook Form
        ↓
features/update-asset/model/use-update-asset.ts
  - React Query mutation to update asset
  - calls update-asset API (currently not implemented on backend)
        ↓
Backend API
  - returns error (expected)
        ↓
UI
  - shows toast with error message
  - success path is ready when backend will be implemented
```

### Message Sending Flow

```text
asset-message-panel.tsx
  - user types message
  - submit triggers sendMessage mutation
        ↓
features/fetch-assets/api/send-message.ts
        ↓
Backend API (stub / not fully implemented)
        ↓
UI
  - shows success or error toast
```

---

## 🧩 Architecture Decisions & Rationale

### 1. **FSD Architecture**

* Chosen to demonstrate **scalable, production-ready structure** instead of a flat components folder.
* Clearly separates **domain (entities)**, **features**, **widgets**, and **routing (app)**.
* Makes it easier for reviewers to locate:

    * where data is fetched,
    * where domain types live,
    * where UI composition happens.

### 2. **React Query for Data & Caching**

* Used for:

    * automatic caching of assets and single asset data,
    * deduplicated network requests,
    * built-in loading/error states,
    * easy invalidation after mutations (status update, future edits).
* This is more robust than manual `useEffect + useState`.

### 3. **React Hook Form for Forms**

* Used for the asset edit form:

    * better performance with controlled inputs,
    * built-in validation support,
    * easier integration with custom UI components (Shadcn inputs/select).

### 4. **React Responsive & Breakpoints**

* Used to hide components for specific viewports (desktop vs mobile):

    * reduces unnecessary DOM and code for each device,
    * simplifies layouts by rendering only what is needed per device.

### 5. **Widgets vs Features**

* **Widgets**:

    * combine data + UI into reusable sections (e.g. `asset-grid`, `asset-media-panel`, `asset-status-panel`).
    * don’t know about API details, just use hooks from features.

* **Features**:

    * encapsulate specific flows like fetching assets, updating status, editing asset, sending messages.
    * this separation makes it easy to reuse the same features across multiple pages or widgets.

### 6. **Toasts for UX Feedback**

* Success/error toasts added for:

    * form submission,
    * status updates,
    * message sending.
* Reviewer can immediately see how UI reacts to both **happy** and **error** paths (especially important because some backend endpoints are intentionally missing).

### 7. **Performance & Lighthouse**

* Layout and data flows were designed with:

    * minimal blocking operations,
    * proper Suspense fallback for the assets grid,
    * light components per viewport thanks to react-responsive,
    * stable layouts to avoid CLS issues.
* This is reflected in Lighthouse scores (close to 100 on desktop and high on mobile).

---

# ⚡ Optimizations

### Technical Improvements

* Disabled unnecessary components on mobile/desktop via **react-responsive**
  → reduces client bundle size
* Memoized heavy components
* Optimal image usage & layout stability
* Cached server data using **React Query**
* Added meaningful Suspense fallbacks
* Reduced network waterfall on main page
* Improved text rendering & layout stability
* Added proper HTML semantics & ARIA attributes

---

# 📊 Lighthouse Results

**Tested after `npm run build` → `npm run start`**

---

## 🏠 Main Page

### **Desktop**

* **100** Performance
* **96** Accessibility
* **78** Best Practices
* **100** SEO

### **Mobile**

* **88** Performance
* **96** Accessibility
* **79** Best Practices
* **100** SEO

---

## 📄 Asset Details Page

### **Desktop**

* **100** Performance
* **96** Accessibility
* **78** Best Practices
* **100** SEO

### **Mobile**

* **88** Performance
* **86** Accessibility
* **79** Best Practices
* **100** SEO

---

# 📱 Testing Environments

The project was tested on:

* 💻 **Windows 11 - Chrome**
* 📱 **OnePlus 7 - Android 12 - Chrome**
* 🍏 **iPhone 14 Pro - iOS 26 - Safari**

Total development time: **20+ hours**

---

# 🙏 Final Words

Thank you for reviewing this project and spending your time going through the code and implementation.
I appreciate the opportunity and your effort in evaluating the solution.

If you have any questions or want to discuss specific implementation decisions - I’m happy to clarify anything!

---
