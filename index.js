// Theme toggle logic
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
function setTheme(dark) {
    if (dark) {
        document.documentElement.classList.add('dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}
const userPref = localStorage.getItem('theme');
if (userPref === 'dark' || (!userPref && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme(true);
} else {
    setTheme(false);
}
themeToggle.addEventListener('click', () => {
    setTheme(!document.documentElement.classList.contains('dark'));
});

// Form switching logic
function showLoginForm() {
    const loginFormContainer = document.getElementById('loginFormContainer');
    const signupFormContainer = document.getElementById('signupFormContainer');
    loginFormContainer.classList.remove('hidden');
    signupFormContainer.classList.add('hidden');
    const loginInner = loginFormContainer.querySelector('div');
    if (loginInner) {
        motion.animate(loginInner, {
            opacity: [0, 1],
            scale: [0.95, 1],
            y: [30, 0]
        }, {
            duration: 0.7,
            easing: "ease-out"
        });
    }
}
function showSignupForm() {
    const loginFormContainer = document.getElementById('loginFormContainer');
    const signupFormContainer = document.getElementById('signupFormContainer');
    loginFormContainer.classList.add('hidden');
    signupFormContainer.classList.remove('hidden');
    const signupInner = signupFormContainer.querySelector('div');
    if (signupInner) {
        motion.animate(signupInner, {
            opacity: [0, 1],
            scale: [0.95, 1],
            y: [30, 0]
        }, {
            duration: 0.7,
            easing: "ease-out"
        });
    }
}
function attachFormSwitchListeners() {
    document.querySelectorAll('#showSignup').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSignupForm();
        });
    });
    document.querySelectorAll('#showLogin').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
    });
    // Animate social login buttons
    document.querySelectorAll('.social-btn-google, .social-btn-facebook, .social-btn-github').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            motion.animate(btn, { scale: [1, 1.08] }, { duration: 0.18 });
        });
        btn.addEventListener('mouseleave', () => {
            motion.animate(btn, { scale: [1.08, 1] }, { duration: 0.18 });
        });
        btn.addEventListener('mousedown', () => {
            motion.animate(btn, { scale: [1, 0.96] }, { duration: 0.1 });
        });
        btn.addEventListener('mouseup', () => {
            motion.animate(btn, { scale: [0.96, 1] }, { duration: 0.1 });
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    showLoginForm();
    attachFormSwitchListeners();
    // Optionally, attach form submit handlers here
});

