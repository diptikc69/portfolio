// API base configuration
const API_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer admin-token-123' // In production, get this from secure storage
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the admin dashboard
    initializeAdmin();

    // Load initial data
    loadDashboardData();
    loadProjects();
    loadContacts();
});

function initializeAdmin() {
    // Sidebar navigation
    const sidebarItems = document.querySelectorAll('.sidebar-menu li');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('pageTitle');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');

            // Update active sidebar item
            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding page
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId + 'Page').classList.add('active');

            // Update page title
            pageTitle.textContent = this.textContent.trim();

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.add('collapsed');
                document.querySelector('.main-content').classList.add('expanded');
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const cancelBtn = document.getElementById('cancelBtn');
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectForm = document.getElementById('projectForm');

    addProjectBtn.addEventListener('click', () => openModal());
    modalClose.addEventListener('click', () => closeModal());
    cancelBtn.addEventListener('click', () => closeModal());

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    projectForm.addEventListener('submit', handleProjectSubmit);

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Contact search
    document.getElementById('contactSearch').addEventListener('input', handleContactSearch);
}

async function loadDashboardData() {
    try {
        // Load projects count
        const projectsResponse = await fetch('/api/projects', { headers: API_CONFIG.headers });
        const projects = await projectsResponse.json();
        document.getElementById('totalProjects').textContent = projects.length;

        // Load contacts count
        const contactsResponse = await fetch('/api/contact', { headers: API_CONFIG.headers });
        const contacts = await contactsResponse.json();
        document.getElementById('totalContacts').textContent = contacts.length;

        // Check server status
        const healthResponse = await fetch('/api/health');
        if (healthResponse.ok) {
            document.getElementById('serverStatus').textContent = 'Online';
            document.getElementById('serverStatus').style.color = '#10b981';
        } else {
            document.getElementById('serverStatus').textContent = 'Offline';
            document.getElementById('serverStatus').style.color = '#ef4444';
        }
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        showNotification('Error loading dashboard data', 'error');
    }
}

async function loadProjects() {
    try {
        const response = await fetch('/api/projects', { headers: API_CONFIG.headers });
        const projects = await response.json();

        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';

        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        showNotification('Error loading projects', 'error');
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-actions">
            <button class="btn-secondary" onclick="editProject('${project._id}')">
                <i class="fas fa-edit"></i> Edit
            </button>
            <button class="btn-secondary" onclick="deleteProject('${project._id}')" style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; border: none;">
                <i class="fas fa-trash"></i> Delete
            </button>
        </div>
    `;
    return card;
}

async function loadContacts() {
    try {
        const response = await fetch('/api/contact', { headers: API_CONFIG.headers });
        const contacts = await response.json();

        const contactsList = document.getElementById('contactsList');
        contactsList.innerHTML = '';

        contacts.forEach(contact => {
            const contactItem = createContactItem(contact);
            contactsList.appendChild(contactItem);
        });
    } catch (error) {
        console.error('Error loading contacts:', error);
        showNotification('Error loading contacts', 'error');
    }
}

function createContactItem(contact) {
    const item = document.createElement('div');
    item.className = 'contact-item';
    item.innerHTML = `
        <div class="contact-header">
            <h4>${contact.name}</h4>
            <span class="contact-time">${new Date(contact.createdAt || Date.now()).toLocaleDateString()}</span>
        </div>
        <div class="contact-content">
            <p>${contact.message}</p>
            <div class="contact-email">📧 ${contact.email}</div>
        </div>
    `;
    return item;
}

function openModal(project = null) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('projectForm');

    if (project) {
        modalTitle.textContent = 'Edit Project';
        form.projectTitle.value = project.title;
        form.projectDescription.value = project.description;
        form.projectTech.value = project.technologies.join(', ');
        form.projectLink.value = project.link || '';
        form.projectImage.value = project.image || '';
        form.dataset.projectId = project._id;
    } else {
        modalTitle.textContent = 'Add Project';
        form.reset();
        delete form.dataset.projectId;
    }

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

async function handleProjectSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const projectData = {
        title: formData.get('projectTitle'),
        description: formData.get('projectDescription'),
        technologies: formData.get('projectTech').split(',').map(tech => tech.trim()),
        link: formData.get('projectLink') || null,
        image: formData.get('projectImage') || null
    };

    try {
        const projectId = e.target.dataset.projectId;
        let response;

        if (projectId) {
            // Update existing project
            response = await fetch(`/api/projects/${projectId}`, {
                method: 'PUT',
                headers: API_CONFIG.headers,
                body: JSON.stringify(projectData)
            });
        } else {
            // Create new project
            response = await fetch('/api/projects', {
                method: 'POST',
                headers: API_CONFIG.headers,
                body: JSON.stringify(projectData)
            });
        }

        if (response.ok) {
            showNotification(`Project ${projectId ? 'updated' : 'created'} successfully!`, 'success');
            closeModal();
            loadProjects();
            loadDashboardData();
        } else {
            throw new Error('Failed to save project');
        }
    } catch (error) {
        console.error('Error saving project:', error);
        showNotification('Error saving project', 'error');
    }
}

async function editProject(projectId) {
    try {
        const response = await fetch(`/api/projects/${projectId}`, { headers: API_CONFIG.headers });
        const project = await response.json();
        openModal(project);
    } catch (error) {
        console.error('Error loading project:', error);
        showNotification('Error loading project', 'error');
    }
}

async function deleteProject(projectId) {
    if (!confirm('Are you sure you want to delete this project?')) {
        return;
    }

    try {
        const response = await fetch(`/api/projects/${projectId}`, {
            method: 'DELETE',
            headers: API_CONFIG.headers
        });

        if (response.ok) {
            showNotification('Project deleted successfully!', 'success');
            loadProjects();
            loadDashboardData();
        } else {
            throw new Error('Failed to delete project');
        }
    } catch (error) {
        console.error('Error deleting project:', error);
        showNotification('Error deleting project', 'error');
    }
}

function handleContactSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        // In a real application, you'd clear authentication tokens
        window.location.href = '/';
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        color: 'white',
        fontWeight: '500',
        zIndex: '3000',
        animation: 'slideIn 0.3s ease',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    });

    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#10b981';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#ef4444';
    } else {
        notification.style.backgroundColor = '#3b82f6';
    }

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Simple authentication check (in a real app, this would be more secure)
function checkAuth() {
    // For demo purposes, we'll just check if we're on the admin route
    // In a real app, you'd check for JWT tokens, session cookies, etc.
    const isAdminRoute = window.location.pathname.startsWith('/admin');

    if (isAdminRoute && !localStorage.getItem('adminAuthenticated')) {
        // Simple auth check - in production, use proper authentication
        const password = prompt('Enter admin password:');
        if (password === 'admin123') { // Change this to a secure password
            localStorage.setItem('adminAuthenticated', 'true');
        } else {
            window.location.href = '/';
            return;
        }
    }
}

// Initialize authentication check
checkAuth();