# ArticleStack

A simple article processing platform built as part of the BeyondChats technical assignment.

The project demonstrates:
- Backend API design using Laravel
- Data ingestion and storage
- Frontend rendering using React
- Clear separation of concerns across services

Partial completion is intentional and aligned with the assignment’s time constraints.

---

## 🧩 Project Structure

# laravel-backend/ 
    Laravel API for articles
# node-scripts/ 
    Node.js script (Phase 2 - partial)
# react-frontend/ 
     React frontend
## README.md

---

## 🏗 Architecture Overview

- **Laravel Backend**
  - Stores scraped articles
  - Exposes CRUD APIs
- **React Frontend**
  - Displays articles in grid & detail views
- **Node.js Script (Partial)**
  - Fetches latest article from Laravel API
  - Designed for future Google + LLM integration

---

## ✅ Phase-wise Completion Status

### Phase 1 – Backend (Completed)
- Scraped articles from BeyondChats blog
- Stored articles in database
- Implemented CRUD APIs in Laravel

### Phase 2 – Node + LLM (Partially Completed)
- Node script fetches latest article from Laravel API
- Architecture planned for search, scraping, and LLM rewriting
- Google Search + LLM integration intentionally skipped due to time constraints

### Phase 3 – Frontend (Completed)
- React-based UI
- Article grid with cards
- Article detail page
- Clean, responsive layout

---

## 🧠 Design Decisions & Trade-offs

- Prioritized **working backend + frontend** over full LLM automation
- Chose clarity and stability over rushed integrations
- Focused on clean APIs and UI rather than complex pipelines

---

## 🚀 Local Setup

Each module contains its own README with setup instructions.

---

## 📌 Notes

This submission reflects how I approach problems under limited time:
- Break down scope
- Deliver stable components
- Leave clear extension points for future work
