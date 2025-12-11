import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { Course } from '../models'

export default function LoggedInPage({ courses, deleteCourse, onLogout }: {
  courses: Course[]
  deleteCourse: (id: string) => void
  onLogout: () => void
}) {
  const navigate = useNavigate()
  return (
    <div id="page-loggedin">
      <Header right={<div style={{display:'flex',alignItems:'center',gap:12}}><span>Harry Potter</span><button onClick={onLogout}>Logout</button></div>} />
      <section className="courses">
        <div className="search-bar-doc">
          <input type="text" placeholder="Input text" className="doc" />
          <button className="btn">Search</button>
          <button className="btn">Add new</button>
        </div>
        <div className="courses-list" id="coursesContainer">
          {courses.map((c, idx) => (
            <div className="course-card-doc" key={c.id} id={`course${idx+1}`}>
              <div className="course-card-content">
                <div className="course-main-info">
                  <h2 className="course-title">{c.title}</h2>
                  <p>{c.description}</p>
                </div>
                <div className="course-details">
                  <div className="detail-item"><strong>Authors:</strong> <span className="authors-list">{c.authors}</span></div>
                  <div className="detail-item"><strong>Duration:</strong> {c.duration}</div>
                  <div className="detail-item"><strong>Created:</strong> {c.created}</div>
                  <div className="detail-item">
                    <button className="btn show-course-btn" onClick={() => navigate(`/courses/${encodeURIComponent(c.title)}`)}>Show course</button>
                    <button className="btn">✏️</button>
                    <button className="btn delete-btn" onClick={() => deleteCourse(c.id)}>🗑️</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
