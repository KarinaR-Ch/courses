import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import { Course } from '../models'

export default function CourseDetailsPage({ courses, onLogout }: { courses: Course[], onLogout: () => void }) {
  const { courseTitle } = useParams<{ courseTitle: string }>()
  const navigate = useNavigate()
  const decoded = courseTitle ? decodeURIComponent(courseTitle) : ''
  const course = courses.find(c => c.title === decoded)

  const data = course ?? {
    title: decoded || 'JavaScript',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    id: '231j3j-b34g5-b345m',
    duration: '23:35 hours',
    created: '01.01.2023',
    authors: 'Anna Sidorenko, Valentina Larina'
  }

  return (
    <div id="page-course-details" className="course-details-page">
      <Header right={<div style={{display:'flex',alignItems:'center',gap:12}}><span>Harry Potter</span><button className="logout-btn" onClick={onLogout}>LOGOUT</button></div>} />

      <div className="wrapper">
        <h1 className="title" id="course-detail-title">{data.title}</h1>

        <div className="panel">
          <div className="description-block">
            <h3>Description:</h3>
            <p id="course-detail-description">{data.description}</p>
          </div>

          <div className="info-block">
            <div><strong>ID:</strong> <span id="course-detail-id">{data.id}</span></div>
            <div><strong>Duration:</strong> <span id="course-detail-duration">{data.duration}</span></div>
            <div><strong>Created:</strong> <span id="course-detail-created">{data.created}</span></div>
            <div><strong>Authors:</strong> <span id="course-detail-authors">{data.authors}</span></div>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>BACK</button>
      </div>
    </div>
  )
}
