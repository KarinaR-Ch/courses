import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function LoggedOut() {
  const navigate = useNavigate()
  return (
    <div id="page-loggedout">
      <Header right={<button onClick={() => navigate('/login')}>Login</button>} />
      <section className="wrapper">
        <div className="search-bar">
          <input placeholder="Input text" />
          <button className="btn">Search</button>
        </div>

        <div className="course-card">
          <div className="course-left">
            <h3>Angular</h3>
            <p>Lorem Ipsum is simply dummy text of the printing...</p>
          </div>
          <div className="course-right">
            <div>
              <strong>Authors:</strong> Dave Haisenberg, Tony Ja
            </div>
            <div>
              <strong>Duration:</strong>2:30
            </div>
            <div>
              <strong>Created:</strong>20.03.2012
            </div>
            <button className="btn" onClick={() => navigate('/courses/Angular')}>
              Show Course
            </button>
          </div>
        </div>

        <div className="course-card">
          <div className="course-left">
            <h3>React</h3>
            <p>Lorem Ipsum is simply dummy text of the printing...</p>
          </div>
          <div className="course-right">
            <div>
              <strong>Authors:</strong> Dave Simonds, Valentina Lary
            </div>
            <div>
              <strong>Duration:</strong>1:00
            </div>
            <div>
              <strong>Created:</strong>14.08.2017
            </div>
            <button className="btn" onClick={() => navigate('/courses/React')}>
              Show Course
            </button>
          </div>
        </div>

        <div className="course-card">
          <div className="course-left">
            <h3>ASP .NET</h3>
            <p>Lorem Ipsum is simply dummy text of the printing...</p>
          </div>
          <div className="course-right">
            <div>
              <strong>Authors:</strong> Sam Smith, Tony Robbins
            </div>
            <div>
              <strong>Duration:</strong>3:30
            </div>
            <div>
              <strong>Created:</strong>01.06.2022
            </div>
            <button className="btn" onClick={() => navigate('/courses/ASP%20.NET')}>
              Show Course
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
