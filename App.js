const { BrowserRouter, Routes, Route } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<LoggedOut />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/courses/:title" element={<CourseDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
