# Frontend Architecture & Implementation Plan: Global Alumni Initiatives (GAI)

## Project Overview
GAI is a community-based organisation supporting education access in Africa. The web platform will serve alumni, students, donors, and the general public. We are building a modern, cinematic, and premium frontend platform.

**Execution Strategy**: We will execute the project incrementally, page-by-page and component-by-component, to ensure clarity and provide regular checkpoints. We are starting frontend-only in a specific folder.

## 1. Project Architecture (Feature-Based)
We will use a modular, feature-based architecture to ensure scalability and readiness for future backend integration (MongoDB, Node backend, Auth, CMS).

### Core Concepts:
- **Features (`frontend/src/features/`)**: Self-contained modules that encapsulate their own components, hooks, services, and types. Examples: `auth`, `donations`, `applications`, `members`.
- **Shared UI (`frontend/src/components/`)**: Global components used across multiple features (e.g., Buttons, Inputs, Cards, Layouts).
- **Pages (`frontend/src/pages/`)**: Top-level route components that assemble features and UI components.
- **Core (`frontend/src/core/` or `frontend/src/lib/`)**: Setup for third-party libraries (router, utils).

## 2. Folder Structure
We are wrapping the React app in a `frontend/` directory to separate it from any future `backend/`.
```text
frontend/
└── src/
    ├── assets/            # Static assets (images, fonts, icons)
    ├── components/        # Shared global UI components
    │   ├── ui/            # shadcn/ui generic components
    │   ├── layout/        # Navbar, Footer, SectionWrappers, PageWrappers
    │   └── shared/        # Reusable domain-agnostic components (e.g., SectionHeading)
    ├── features/          # Feature-based modules
    │   ├── alumni/        # Membership application
    │   ├── donations/     # Donation logic, forms, pricing tiers
    │   ├── students/      # Student support application forms
    │   └── impact/        # Impact stats counter, report downloads
    ├── hooks/             # Global custom React hooks
    ├── lib/               # Third-party library configurations (utils, api client)
    ├── pages/             # Route-level components mapping to URLs
    ├── routes/            # Route definitions and configuration
    ├── types/             # Global TypeScript interfaces and types
    ├── styles/            # Global stylesheets (Tailwind imports, custom CSS variables)
    ├── App.tsx            # Root application component
    └── main.tsx           # Entry point
```

## 3. Routing Structure (React Router DOM)
Using client-side routing for instant, smooth page transitions.

- `/` - Home Page
- `/about` - About Us
- `/programmes` - What We Do
- `/pay-it-forward` - Our Model
- `/join` - Join Us / Become a Member -> Most important conversion
- `/donate` - Give / Donate
- `/impact` - Our Impact
- `/apply` - Apply for Support
- `/partners` - Partners & Collaborators
- `/news` - News & Updates
- `/contact` - Contact Us

*Future Routes Preparedness:*
- `/portal/*` - Protected member area
- `/admin/*` - Admin dashboard

## 4. Shared Layout System
- **MainLayout**: Contains the fixed Navbar, dynamic main content area (with Framer Motion page transitions), and the global Footer.
- **SectionLayout**: A reusable wrapper for page sections to enforce consistent padding, max-widths, and semantic HTML (`<section>`).

## 5. Design System Strategy
- **Colors**:
  - Primary: Deep teal green (`#085041`, `#1D9E75`)
  - Secondary/Background: Warm off-white (`#F4F2ED`)
  - Accent: Gold/amber (`#C8861A`)
- **Typography**: `Inter` (headings), `Source Sans Pro` or `Lato` (body).
- **Animations (Framer Motion)**:
  - Page transitions (fade-in, subtle slide up).
  - Scroll-triggered reveal animations for sections (staggered list items, text reveals).
  - Micro-interactions (hover states on cards, buttons).

## 6. Reusable Components Strategy
- **Typography Components**: Semantic headings to enforce consistency.
- **Call to Action**: Distinct primary, secondary, and outline button variants matching brand colors.
- **Cards**: Reusable `ImpactStatCard`, `ProgramCard`, `StudentStoryCard`.
- **Containers**: Base container for responsive padding and maximum width alignment.

## 7. Future Backend Integration Readiness
- Data fetching and submission logic will be cleanly separated into API service files (e.g., `src/features/donations/api/donations.ts`).
- React Router loaders and actions can be utilized for data management alongside mock data initially.
- All forms will be built with integration in mind, collecting clean structured JSON data.

## Verification Plan
1. Manual review of architecture alignment with `project.md`.
2. Developer validation of scaffolding and linting during implementation.
3. Verification of routing capabilities across the defined site map.
