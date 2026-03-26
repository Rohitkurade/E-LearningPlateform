# EduLearn - E-Learning Platform UI

A fully responsive, interactive, and feature-rich e-learning platform with modern design and smooth user experience.
 
## Features ✨

### 📚 Course Listing
- Browse and search through comprehensive course catalog
- Filter courses by category (Web Development, Python, Design, Business)
- Filter by difficulty level (Beginner, Intermediate, Advanced )
- View course details with instructor information and student reviews
- Course cards with progress tracking

### 📊 Progress Tracking
- Visual progress indicators for each course
- Overall learning statistics dashboard
- Track hours spent learning
- View completed courses with certificates
- Achievement system with badges

### 🎥 Video Embedding
- Integrated YouTube video player for course content
- Video lessons organized by curriculum sections
- Expandable/collapsible lesson sections
- Video duration information

### 🎨 Multi-Page Interface
- **Dashboard (index.html)** - Welcome screen with learning overview
- **Courses (courses.html)** - Full course catalog with search and filters
- **Course Detail (course-detail.html)** - Detailed course page with video and curriculum
- **My Progress (progress.html)** - Learning progress and achievement tracking
- **Profile (profile.html)** - User profile and account settings

### 💻 Interactive Features
- Course search functionality
- Modal popups for course enrollment
- Smooth page transitions and animations
- Responsive navigation menu
- Interactive curriculum sections
- Progress bars and visual indicators
- Wishlist functionality
- Dark/Light UI elements

## File Structure

```
E-LearningPlateform/
├── index.html              # Dashboard/Home page
├── courses.html            # Course listing page
├── course-detail.html      # Individual course detail page
├── progress.html           # Progress tracking page
├── profile.html            # User profile page
├── styles.css              # Complete styling and responsive design
├── script.js               # JavaScript functionality and interactivity
└── README.md               # This file
```

## How to Use

1. **Open index.html** in your web browser to start the platform
2. **Navigate using the navigation bar** to explore different sections
3. **Dashboard** - See your learning overview and continue with active courses
4. **Courses** - Browse all available courses, search, and filter
5. **Course Detail** - View full course content, watch videos, and enroll
6. **My Progress** - Track your learning journey and achievements
7. **Profile** - Manage your account and view statistics

## Features Breakdown

### Course Data
The platform includes sample data for 6 courses:
1. Web Development Basics (Beginner)
2. Python for Data Science (Intermediate)
3. UI/UX Design Principles (Beginner)
4. JavaScript Advanced Concepts (Advanced)
5. React.js Fundamentals (Intermediate)
6. Business Analytics (Intermediate)

### Search and Filter
- **Search Bar** - Search courses by title or description
- **Category Filter** - Filter by Web, Python, Design, or Business
- **Difficulty Filter** - Filter by Beginner, Intermediate, or Advanced

### Interactive Elements
- **Course Modal** - Click any course to see full details and enroll
- **Curriculum Sections** - Click to expand/collapse lesson sections
- **Continue Learning** - Quick access buttons on progress page
- **Profile Settings** - Account management options

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with Flexbox and CSS Grid
- **JavaScript (Vanilla)** - No dependencies, pure JavaScript
- **Responsive Design** - Mobile, tablet, and desktop friendly

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## Responsive Design

The platform is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Color Scheme

- **Primary**: #4A90E2 (Blue)
- **Secondary**: #50C878 (Green)
- **Accent**: #E94B3C (Red)
- **Background**: #f5f7fa (Light Gray)
- **Text**: #333 (Dark Gray)

## Sample Data Included

The platform comes with sample course data, progress information, and user profile data. You can easily modify the `coursesData` array in `script.js` to add your own courses.

## Customization

### Adding New Courses
Edit the `coursesData` array in `script.js`:
```javascript
{
    id: 7,
    title: "Your Course Title",
    category: "web", // web, python, design, business
    level: "beginner", // beginner, intermediate, advanced
    price: 49.99,
    description: "Course description",
    instructor: "Instructor Name",
    duration: "12 hours",
    students: "1,000",
    lessons: 24,
    // ... more properties
}
```

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4A90E2;
    --secondary-color: #50C878;
    --accent-color: #E94B3C;
    /* ... */
}
```

## Features Implemented

✅ Course listing with search and filters
✅ Progress tracking with visual indicators
✅ Video embedding (YouTube iframe)
✅ Multi-page interface (5 pages)
✅ Responsive design
✅ Interactive components
✅ Course enrollment modal
✅ Curriculum sections with lessons
✅ User profile page
✅ Achievement badges
✅ Smooth animations and transitions
✅ Mobile-friendly navigation

## Getting Started

1. Download all files to a folder
2. Open `index.html` in a web browser
3. Start exploring the platform!

No installation or dependencies required - it's pure HTML, CSS, and JavaScript.

## Future Enhancements

- User authentication system
- Backend integration for real course data
- Video upload functionality
- Quiz and assessment system
- Student discussion forums
- Real-time progress updates
- Certificate generation
- Payment integration
- Email notifications

## License

Free to use and modify for personal and commercial projects.

---

**EduLearn** - Making education accessible and interactive for everyone! 🎓
