// Initialize EmailJS
emailjs.init("Nr1EfhK2pw0g20yt_");

// Global Variables
let isMenuOpen = false;

// Initialize Portfolio
document.addEventListener("DOMContentLoaded", function () {
  setupNavigation();
  setupThemeToggle();
  setupAnimations();
  setupSkills();
  setupContact();
});

// Navigation
function setupNavigation() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateActiveSection();
  });

  // Mobile menu toggle
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    isMenuOpen = !isMenuOpen;
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger?.classList.remove("active");
      navMenu?.classList.remove("active");
      isMenuOpen = false;
    });
  });

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Update active section
function updateActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`a[href="#${section.id}"]`);
      activeLink?.classList.add("active");
    }
  });
}

// Theme Toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle?.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector("#theme-toggle i");
  if (themeIcon) {
    themeIcon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

// Animations
function setupAnimations() {
  animateCounters();
}

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 20);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  });

  counters.forEach((counter) => observer.observe(counter));
}

// Skills Section
function setupSkills() {
  const skillsSection = document.getElementById("skills");
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateSkillBars();
          hasAnimated = true;
        }
      });
    },
    { threshold: 0.3 }
  );

  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    }, index * 100);
  });
}

// Project Modal
function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  const projects = {
    "todo-golang": {
      title: "Todo App with Golang",
      description: "RESTful API backend for todo management built with Golang, featuring CRUD operations and clean architecture",
      tech: ["Golang", "REST API", "JSON"],
      features: ["CRUD Operations", "Clean Architecture", "API Endpoints", "Task Management"],
    },
    "amazon-clone": {
      title: "Amazon Clone",
      description: "E-commerce website clone with shopping cart functionality, product listings, and responsive design",
      tech: ["JavaScript", "HTML5", "CSS3"],
      features: ["Product Listings", "Shopping Cart", "Responsive Design", "User Interface"],
    },
    "university-system": {
      title: "University Management System",
      description: "Comprehensive Java desktop application for managing university operations with MySQL database integration",
      tech: ["Java", "MySQL", "Swing"],
      features: ["Student Management", "Course Registration", "Grade Tracking", "Database Integration"],
    },
    "spring-api": {
      title: "REST API with Spring Boot",
      description: "Secure RESTful API with JWT authentication, user management, and comprehensive CRUD operations",
      tech: ["Spring Boot", "JWT", "MySQL"],
      features: ["JWT Authentication", "User Management", "CRUD Operations", "Security Implementation"],
    },
    "grade-calculator": {
      title: "Student Grade Calculator",
      description: "Interactive React web application for GPA calculation with data visualization and progress tracking",
      tech: ["React", "Node.js", "Chart.js"],
      features: ["GPA Calculation", "Data Visualization", "Progress Tracking", "Interactive UI"],
    },
    "library-system": {
      title: "Library Management System",
      description: "Desktop application for university library with book tracking and student borrowing system",
      tech: ["Python", "Tkinter", "SQLite"],
      features: ["Book Management", "Borrowing System", "Student Records", "Search Functionality"],
    },
    "microservices": {
      title: "Microservices Architecture",
      description: "Distributed system with multiple microservices using Golang for high-performance backend services",
      tech: ["Golang", "Docker", "MongoDB"],
      features: ["Microservices Design", "Container Deployment", "API Gateway", "Service Discovery"],
    },
    "mobile-web-app": {
      title: "Mobile-First Web App",
      description: "Progressive Web Application with offline capabilities using modern JavaScript and service workers",
      tech: ["JavaScript", "PWA", "Service Workers"],
      features: ["Offline Support", "Push Notifications", "Responsive Design", "App-like Experience"],
    },
  };

  const project = projects[projectId];
  if (project) {
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div style="margin: 20px 0;">
        <h3>Technologies Used</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin: 10px 0;">
          ${project.tech
            .map(
              (tech) =>
                `<span style="background: var(--surface-color); color: var(--primary-color); padding: 6px 12px; border-radius: 15px; font-size: 12px;">${tech}</span>`
            )
            .join("")}
        </div>
      </div>
      <div style="margin: 20px 0;">
        <h3>Key Features</h3>
        <ul>
          ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </div>
      <div style="text-align: right; margin-top: 30px;">
        <a href="https://github.com/benjamin-1995" class="cta-btn" target="_blank">View Code</a>
        <button onclick="closeModal()" class="btn-secondary" style="margin-left: 10px;">Close</button>
      </div>
    `;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => (modal.style.display = "none"));
}

// Contact Form
function setupContact() {
  const contactForm = document.querySelector(".contact-form");

  contactForm?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // EmailJS send
    emailjs
      .send("service_9gr1zqb", "template_xyz123", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  });
}

// Download Resume Function
function downloadResume() {
  // Create canvas for visual resume
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 1000;
  
  // Background
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Header background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 100);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, 120);
  
  // Name
  ctx.fillStyle = 'white';
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('BINIAM BIRHANU', canvas.width/2, 50);
  
  // Title
  ctx.font = '18px Arial';
  ctx.fillText('Software Engineering Student', canvas.width/2, 80);
  
  // Contact Info
  ctx.fillStyle = '#333';
  ctx.font = '14px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('📧 hubbenjamin6@gmail.com', 50, 160);
  ctx.fillText('🔗 linkedin.com/in/biniam-birihanu-95ba9b38b/', 50, 180);
  ctx.fillText('💻 github.com/benjamin-1995', 50, 200);
  
  // Education
  ctx.font = 'bold 20px Arial';
  ctx.fillText('EDUCATION', 50, 240);
  ctx.font = '16px Arial';
  ctx.fillText('Bachelor of Software Engineering', 50, 270);
  ctx.fillText('Debre Markos University (2021 - Present)', 50, 290);
  
  // Skills
  ctx.font = 'bold 20px Arial';
  ctx.fillText('TECHNICAL SKILLS', 50, 330);
  ctx.font = '14px Arial';
  ctx.fillText('Frontend: HTML5, CSS3, JavaScript, React', 50, 360);
  ctx.fillText('Backend: Java, Spring Boot, Node.js, Python, Golang', 50, 380);
  ctx.fillText('Databases: MySQL, MongoDB', 50, 400);
  ctx.fillText('Tools: Git, REST APIs', 50, 420);
  
  // Projects
  ctx.font = 'bold 20px Arial';
  ctx.fillText('COMPLETED PROJECTS', 50, 460);
  ctx.font = '16px Arial';
  ctx.fillText('1. Todo App with Golang', 50, 490);
  ctx.font = '12px Arial';
  ctx.fillText('   RESTful API with CRUD operations', 70, 510);
  
  ctx.font = '16px Arial';
  ctx.fillText('2. Amazon Clone', 50, 540);
  ctx.font = '12px Arial';
  ctx.fillText('   E-commerce website with shopping cart', 70, 560);
  
  // Achievements
  ctx.font = 'bold 20px Arial';
  ctx.fillText('ACHIEVEMENTS', 50, 600);
  ctx.font = '14px Arial';
  ctx.fillText('• 2 Projects Completed', 50, 630);
  ctx.fillText('• 12 Technologies Learned', 50, 650);
  ctx.fillText('• 4 Years of Study', 50, 670);
  ctx.fillText('• 80% Academic Performance', 50, 690);
  
  // Download
  canvas.toBlob(function(blob) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Biniam_Birhanu_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

// Testimonial Toggle Function
function toggleTestimonial(button) {
  const testimonialCard = button.closest('.testimonial-card');
  const shortText = testimonialCard.querySelector('.short-text');
  const fullText = testimonialCard.querySelector('.full-text');
  
  if (fullText.style.display === 'none') {
    shortText.style.display = 'none';
    fullText.style.display = 'inline';
    button.textContent = 'Read Less';
  } else {
    shortText.style.display = 'inline';
    fullText.style.display = 'none';
    button.textContent = 'Read More';
  }
}

// Blog Read More Function
function toggleBlogContent(button) {
  const blogCard = button.closest('.blog-card');
  const shortText = blogCard.querySelector('.short-text');
  const fullText = blogCard.querySelector('.full-text');
  
  if (fullText.style.display === 'none') {
    shortText.style.display = 'none';
    fullText.style.display = 'block';
    button.textContent = 'Read Less';
    blogCard.style.maxHeight = 'none';
  } else {
    shortText.style.display = 'block';
    fullText.style.display = 'none';
    button.textContent = 'Read More';
    blogCard.style.maxHeight = '';
  }
}
