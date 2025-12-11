import React, { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoggedOut from './components/LoggedOut'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import LoggedInPage from './components/LoggedInPage'
import CourseDetailsPage from './components/CourseDetailsPage'
import { Course } from './models'
import { LOGO } from './constants'

const initialCourses: Course[] = [
  {
    id: 'ang-231j3j-b34g5',
    title: 'Angular',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    duration: '2:30 hours',
    created: '20.03.2012',
    authors: 'Dave Haisenberg, Tony Ja'
  },
  {
    id: 'react-231j3j-b34g5',
    title: 'React',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    duration: '1:00 hours',
    created: '14.08.2017',
    authors: 'Dave Simonds, Valentina Lary'
  },
  {
    id: 'asp-231j3j-b34g5',
    title: 'ASP .NET',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    duration: '3:30 hours',
    created: '01.06.2022',
    authors: 'Sam Smith, Tony Robbins'
  }
]

export default function App() {
  const [courses, setCourses] = useState<Course[]>(initialCourses)
  const [user, setUser] = useState<string | null>(null)
  const navigate = useNavigate()

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id))
  }

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/courses"
          element={
            user ? (
              <LoggedInPage courses={courses} deleteCourse={deleteCourse} onLogout={handleLogout} />
            ) : (
              <LoggedOut />
            )
          }
        />
        <Route
          path="/courses/:courseTitle"
          element={<CourseDetailsPage courses={courses} onLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={(name) => { setUser(name); navigate('/courses') }} />}
        />
        <Route path="/register" element={<RegistrationPage onRegister={(name) => { setUser(name); navigate('/courses') }} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}
