// Course data
const coursesData = [
    {
        id: 1,
        title: "Web Development Basics",
        category: "web",
        level: "beginner",
        price: 49.99,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%234A90E2' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EWEB%3C/text%3E%3C/svg%3E",
        description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This comprehensive course covers everything you need to know to start building responsive websites.",
        instructor: "John Doe",
        duration: "12 hours",
        students: "5,420",
        lessons: 24,
        videoId: "dQw4w9WgXcQ",
        curriculum: [
            {
                section: "Getting Started",
                lessons: [
                    { title: "Course Introduction", duration: "5 min" },
                    { title: "Setting Up Your Environment", duration: "10 min" },
                    { title: "Basic HTML Structure", duration: "15 min" }
                ]
            },
            {
                section: "HTML Fundamentals",
                lessons: [
                    { title: "HTML Elements", duration: "20 min" },
                    { title: "Forms and Input", duration: "25 min" },
                    { title: "Semantic HTML", duration: "15 min" }
                ]
            },
            {
                section: "CSS Styling",
                lessons: [
                    { title: "CSS Selectors", duration: "18 min" },
                    { title: "Box Model", duration: "20 min" },
                    { title: "Flexbox Layout", duration: "25 min" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Python for Data Science",
        category: "python",
        level: "intermediate",
        price: 79.99,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23E94B3C' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPYTHON%3C/text%3E%3C/svg%3E",
        description: "Master Python programming and data analysis techniques. Learn NumPy, Pandas, and Matplotlib to work with real-world datasets.",
        instructor: "Jane Smith",
        duration: "20 hours",
        students: "3,210",
        lessons: 20,
        videoId: "dQw4w9WgXcQ",
        curriculum: [
            {
                section: "Python Basics",
                lessons: [
                    { title: "Variables and Data Types", duration: "15 min" },
                    { title: "Control Flow", duration: "20 min" },
                    { title: "Functions", duration: "18 min" }
                ]
            },
            {
                section: "Data Analysis",
                lessons: [
                    { title: "NumPy Basics", duration: "25 min" },
                    { title: "Pandas DataFrames", duration: "30 min" },
                    { title: "Data Cleaning", duration: "25 min" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "UI/UX Design Principles",
        category: "design",
        level: "beginner",
        price: 59.99,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%2350C878' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EUI/UX%3C/text%3E%3C/svg%3E",
        description: "Create beautiful and intuitive user interfaces. Learn design principles, color theory, and user research.",
        instructor: "Alex Johnson",
        duration: "15 hours",
        students: "4,150",
        lessons: 18,
        videoId: "dQw4w9WgXcQ",
        curriculum: [
            {
                section: "Design Fundamentals",
                lessons: [
                    { title: "Design Principles", duration: "20 min" },
                    { title: "Color Theory", duration: "18 min" },
                    { title: "Typography", duration: "15 min" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "JavaScript Advanced Concepts",
        category: "web",
        level: "advanced",
        price: 89.99,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23F7B801' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EJS%3C/text%3E%3C/svg%3E",
        description: "Deep dive into advanced JavaScript concepts including closures, async/await, and functional programming.",
        instructor: "Mike Wilson",
        duration: "18 hours",
        students: "2,890",
        lessons: 20,
        videoId: "dQw4w9WgXcQ",
        curriculum: []
    },
    {
        id: 5,
        title: "React.js Fundamentals",
        category: "web",
        level: "intermediate",
        price: 69.99,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%2361DAFB' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EREACT%3C/text%3E%3C/svg%3E",
        description: "Learn to build modern web applications with React. Master components, hooks, and state management.",
        instructor: "Sarah Davis",
        duration: "16 hours",
        students: "6,120",
        lessons: 22,
        videoId: "dQw4w9WgXcQ",
        curriculum: []
    },
    {
        id: 6,
        title: "Business Analytics",
        category: "business",
        level: "intermediate",
        price: 74.99,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%239B59B6' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3EDATA%3C/text%3E%3C/svg%3E",
        description: "Understand business intelligence and analytics. Learn to extract insights from business data.",
        instructor: "Emily Brown",
        duration: "14 hours",
        students: "1,950",
        lessons: 16,
        videoId: "dQw4w9WgXcQ",
        curriculum: []
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    const coursesGrid = document.getElementById('coursesGrid');
    
    if (coursesGrid) {
        renderCourses(coursesData);
        setupFilters();
    }

    setupModal();
    setupProfilePage();
    setupCourseDetailPage();
});

// Render courses
function renderCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card" onclick="openCourseModal(${course.id})">
            <div class="course-header">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description.substring(0, 100)}...</p>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <p class="progress-text">Not enrolled</p>
            </div>
        </div>
    `).join('');
}

// Filter courses
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');

    if (!searchInput) return;

    const applyFilters = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        const difficulty = difficultyFilter.value;

        const filtered = coursesData.filter(course => {
            const matchSearch = course.title.toLowerCase().includes(searchTerm) ||
                              course.description.toLowerCase().includes(searchTerm);
            const matchCategory = !category || course.category === category;
            const matchDifficulty = !difficulty || course.level === difficulty;

            return matchSearch && matchCategory && matchDifficulty;
        });

        renderCourses(filtered);
    };

    searchInput.addEventListener('input', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    difficultyFilter.addEventListener('change', applyFilters);
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('courseModal');
    if (!modal) return;

    const closeBtn = document.querySelector('.close');
    const closeBtnFooter = document.querySelector('.close-btn');

    if (closeBtn) closeBtn.onclick = () => modal.classList.remove('show');
    if (closeBtnFooter) closeBtnFooter.onclick = () => modal.classList.remove('show');

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };

    const enrollBtn = document.querySelector('.enroll-btn');
    if (enrollBtn) {
        enrollBtn.onclick = () => {
            alert('You have successfully enrolled in this course!');
            modal.classList.remove('show');
        };
    }
}

function openCourseModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const modal = document.getElementById('courseModal');
    if (!modal) return;

    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalCategory').textContent = course.category.toUpperCase();
    document.getElementById('modalDescription').textContent = course.description;
    document.getElementById('modalInstructor').textContent = course.instructor;
    document.getElementById('modalDuration').textContent = course.duration;
    document.getElementById('modalLevel').textContent = course.level.charAt(0).toUpperCase() + course.level.slice(1);
    document.getElementById('modalStudents').textContent = course.students;

    const lessonsList = document.getElementById('lessonsList');
    lessonsList.innerHTML = course.curriculum
        .flatMap(section => section.lessons)
        .map(lesson => `<li>📺 ${lesson.title} (${lesson.duration})</li>`)
        .join('');

    modal.classList.add('show');
}

// Profile page functionality
function setupProfilePage() {
    const editBtn = document.querySelector('.edit-profile-btn');
    if (editBtn) {
        editBtn.addEventListener('click', () => {
            alert('Profile editing feature coming soon!');
        });
    }

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Social media integration coming soon!');
        });
    });
}

// Course detail page functionality
function setupCourseDetailPage() {
    const curriculumSections = document.getElementById('curriculumSections');
    if (!curriculumSections) return;

    // Get course ID from URL or use default
    const course = coursesData[0];

    if (course.curriculum.length > 0) {
        curriculumSections.innerHTML = course.curriculum.map((section, idx) => `
            <div class="curriculum-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>${section.section}</span>
                    <span>▼</span>
                </div>
                <div class="section-lessons" style="display: none;">
                    ${section.lessons.map(lesson => `
                        <div class="lesson" onclick="selectLesson(this)">
                            <span class="lesson-icon">▶</span>
                            <div class="lesson-info">
                                <div class="lesson-title">${lesson.title}</div>
                                <div class="lesson-duration">${lesson.duration}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    const enrollBtn = document.querySelector('.enroll-btn-detail');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
            alert('You have successfully enrolled in ' + course.title + '!');
        });
    }

    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            alert('Added to wishlist!');
            wishlistBtn.textContent = '✓ Added to Wishlist';
        });
    }
}

// Toggle curriculum sections
function toggleSection(headerElement) {
    const lessonsDiv = headerElement.nextElementSibling;
    const isHidden = lessonsDiv.style.display === 'none';
    lessonsDiv.style.display = isHidden ? 'flex' : 'none';
    lessonsDiv.style.flexDirection = 'column';
    
    const arrow = headerElement.querySelector('span:last-child');
    arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    arrow.style.transition = 'transform 0.3s ease';
}

// Select lesson
function selectLesson(lessonElement) {
    document.querySelectorAll('.lesson').forEach(el => el.style.opacity = '0.5');
    lessonElement.style.opacity = '1';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card, .stat-card, .announcement-card').forEach(el => {
    observer.observe(el);
});

// Continue Learning buttons
document.querySelectorAll('.btn-small.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Redirecting to course lessons...');
    });
});
