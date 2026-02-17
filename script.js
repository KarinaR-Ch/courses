// Course data for details page
const courseDetailsData = {
  'Angular': {
    title: 'Angular',
    description: 'Angular is a platform for building mobile and desktop web applications. It is a complete rewrite from the same team that built AngularJS. Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.',
    id: 'ang-231j3j-b34g5',
    duration: '2:30 hours',
    created: '20.03.2012',
    authors: 'Dave Haisenberg, Tony Ja'
  },
  'React': {
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
    id: 'react-231j3j-b34g5',
    duration: '1:00 hours',
    created: '14.08.2017',
    authors: 'Dave Simonds, Valentina Lary'
  },
  'ASP .NET': {
    title: 'ASP .NET',
    description: 'ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services.',
    id: 'asp-231j3j-b34g5',
    duration: '3:30 hours',
    created: '01.06.2022',
    authors: 'Sam Smith, Tony Robbins'
  }
};

// Store the previous page to go back to
let previousPage = 'page-home';

// Function to go to home page
function goToHome() {
  hideAll();
  previousPage = 'page-home';
  document.getElementById('page-home').style.display='block';
}

// Function to go to courses page (logged out)
function goToCourses() {
  hideAll();
  previousPage = 'page-home';
  document.getElementById('page-loggedout').style.display='block';
}

function openLogin(){
  hideAll();
  previousPage = 'page-loggedout';
  document.getElementById('page-login').style.display='block';
}

function login(){
  let email = document.getElementById('email').value.trim();
  let pass = document.getElementById('password').value.trim();

  if(email && pass){
    hideAll();
    previousPage = 'page-login';
    document.getElementById('page-loggedin').style.display='block';
  } 
}

// Нова функція для переходу на Logged in Courses Page зі сторінки Login
function goToLoggedInFromLogin() {
  hideAll();
  previousPage = 'page-login';
  document.getElementById('page-loggedin').style.display='block';
}

function register(){
  hideAll();
  previousPage = 'page-registration';
  document.getElementById('page-loggedin').style.display='block';
}

function logout(){
  hideAll();
  previousPage = 'page-loggedin';
  document.getElementById('page-home').style.display='block';
}

function openRegistration(){
  hideAll();
  previousPage = 'page-login';
  document.getElementById('page-registration').style.display='block';
}

function toggleRegistrationButton(){
  const checkbox = document.getElementById('registrationCheckbox');
  const loginButton = document.getElementById('loginButton');
  const registrationButton = document.getElementById('registrationButton');
  
  if(checkbox.checked){
    loginButton.classList.add('hidden');
    registrationButton.classList.remove('hidden');
  } else {
    loginButton.classList.remove('hidden');
    registrationButton.classList.add('hidden');
  }
}

function hideAll(){
  document.getElementById('page-home').style.display='none';
  document.getElementById('page-loggedout').style.display='none';
  document.getElementById('page-login').style.display='none';
  document.getElementById('page-loggedin').style.display='none';
  document.getElementById('page-registration').style.display='none';
  document.getElementById('page-course-details').style.display='none';
}

// Function to show course details
function showCourseDetails(courseName) {
  const courseData = courseDetailsData[courseName];
  if (!courseData) return;
  
  // Update course details page with data
  document.getElementById('course-detail-title').textContent = courseData.title;
  document.getElementById('course-detail-description').textContent = courseData.description;
  document.getElementById('course-detail-id').textContent = courseData.id;
  document.getElementById('course-detail-duration').textContent = courseData.duration;
  document.getElementById('course-detail-created').textContent = courseData.created;
  document.getElementById('course-detail-authors').textContent = courseData.authors;
  
  // Hide all pages and show course details
  hideAll();
  document.getElementById('page-course-details').style.display = 'block';
}

// Function to go back from course details page
function goBackFromCourseDetails() {
  hideAll();
  if (previousPage === 'page-home' || previousPage === 'page-loggedout' || previousPage === 'page-loggedin') {
    document.getElementById(previousPage).style.display = 'block';
  } else {
    // Default to home page if previous page is not valid
    document.getElementById('page-home').style.display = 'block';
  }
}

// Function to delete a course
function deleteCourse(courseId) {
  const courseElement = document.getElementById(courseId);
  if (courseElement) {
    courseElement.remove();
  }
}

// Add event listeners to show course buttons
document.addEventListener('DOMContentLoaded', function() {
  // Event delegation for show course buttons
  document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('show-course-btn')) {
      const courseName = event.target.getAttribute('data-course');
      if (courseName) {
        // Store current page before showing course details
        if (document.getElementById('page-loggedout').style.display !== 'none') {
          previousPage = 'page-loggedout';
        } else if (document.getElementById('page-loggedin').style.display !== 'none') {
          previousPage = 'page-loggedin';
        } else if (document.getElementById('page-home').style.display !== 'none') {
          previousPage = 'page-home';
        }
        showCourseDetails(courseName);
      }
    }
  });
  
  // Event delegation for delete buttons
  document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
      const courseCard = event.target.closest('.course-card-doc');
      if (courseCard) {
        courseCard.remove();
      }
    }
  });
  
  // Show home page by default
  hideAll();
  document.getElementById('page-home').style.display='block';
});
