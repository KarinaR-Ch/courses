import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div id="page-home">
      <Header
        right={
          <button onClick={() => navigate('/courses')}>Start Learning</button>
        }
      />
      <section className="hero">
        <h1 className="title">Learn Programming Easily</h1>
        <p className="subtitle">
          Access curated courses, improve your skills, and build confidence in modern technologies.
          Clear structure, practical examples, and learning without chaos.
        </p>
        <button className="start-btn" onClick={() => navigate('/courses')}>Start Learning</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Structured Courses</h3>
          <p>Clean layout with consistent format, so you can learn step by step and see real progress.</p>
        </div>
        <div className="feature-card">
          <h3>Professional Materials</h3>
          <p>Content prepared by experts with real hands-on experience in international companies.</p>
        </div>
        <div className="feature-card">
          <h3>Smart Course Management</h3>
          <p>Add, edit, and manage courses without spreadsheets and endless chats. Everything in one place.</p>
        </div>
      </section>

      <footer className="footer">© 2025 Courses App. Improve yourself every day.</footer>
    </div>
  )
}
