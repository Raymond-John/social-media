/**
 * SocialConnect - Complete Social Media Platform
 * All data stored in localStorage - no backend required
 */

// ===== STORAGE KEYS =====
const STORAGE_KEYS = {
  USERS: 'sc_users',
  POSTS: 'sc_posts',
  CURRENT_USER: 'sc_current_user',
  THEME: 'sc_theme',
  NOTIFICATIONS: 'sc_notifications',
  FOLLOWING: 'sc_following'
};

// ===== SVG ICONS =====
const ICONS = {
  home: '<svg viewBox="0 0 24 24"><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"/></svg>',
  homeOutline: '<svg viewBox="0 0 24 24"><path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"/></svg>',
  explore: '<svg viewBox="0 0 24 24"><path d="M10.09 3.098L9.72 7h5.56l-.38-3.902a2.35 2.35 0 0 0-4.72 0zm8.92 3.91l2.08-2.08a1 1 0 0 0-1.36-1.36l-2.08 2.08A9.95 9.95 0 0 0 12 4c-4.08 0-7.59 2.45-9.16 5.97l5.9 5.9a5.5 5.5 0 0 1 7.78 0l2.36-2.36a9.969 9.969 0 0 0 .13-6.43zM3.12 11.1a9.969 9.969 0 0 0-.12 6.43l2.08-2.08a1 1 0 1 0-1.36-1.36l-2.08 2.08a9.95 9.95 0 0 0 1.48-5.07z"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-3.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l3.247-8.343c.335-.914 1.255-1.506 2.246-1.506h2.747c.991 0 1.911.592 2.246 1.506L17.055 16H5.134z"/></svg>',
  bellOutline: '<svg viewBox="0 0 24 24"><path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.692 13.98 1.991 12 1.991s-3.872.701-5.247 2.113C4.692 5.995 3.847 8.493 3.847 11.05c0 3.269-1.882 5.809-2.103 6.03a1 1 0 0 0 .708 1.706c.15.008 3.994.084 5.661.084h4.428c1.668 0 5.511-.076 5.661-.084a1 1 0 0 0 .495-1.83zM12 21.992c-1.254 0-2.407-.47-3.29-1.263a.509.509 0 0 1-.1-.123.486.486 0 0 1-.07-.237h7.004a.486.486 0 0 1-.07.237.509.509 0 0 1-.1.123A4.972 4.972 0 0 1 12 21.992zm7.376-4.991H4.624c.788-.841 2.213-3.107 2.223-6.044.006-2.183.735-4.123 2.06-5.59C10.147 3.938 11.02 3.456 12 3.456s1.853.482 3.093 1.912c1.325 1.466 2.054 3.406 2.06 5.59.01 2.937 1.435 5.203 2.223 6.043z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 5.638 8-5.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 5.637-8-5.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"/></svg>',
  user: '<svg viewBox="0 0 24 24"><path d="M17.71 9.29C17.32 8.9 16.68 8.9 16.29 9.29L12 13.59 7.71 9.29C7.32 8.9 6.68 8.9 6.29 9.29 5.9 9.68 5.9 10.32 6.29 10.71L11.29 15.71C11.68 16.1 12.32 16.1 12.71 15.71L17.71 10.71C18.1 10.32 18.1 9.68 17.71 9.29z"/></svg>',
  userOutline: '<svg viewBox="0 0 24 24"><path d="M17.5 8c.828 0 1.5.672 1.5 1.5S18.328 11 17.5 11 16 10.328 16 9.5s.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5S11.328 11 10.5 11 9 10.328 9 9.5s.672-1.5 1.5-1.5zm3.5 8.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/></svg>',
  heartOutline: '<svg viewBox="0 0 24 24"><path d="M16.697 5.5c-1.222 0-2.395.51-3.281 1.386l-.709.706-.709-.706C10.112 5.51 8.94 5 7.717 5 5.21 5 3.177 7.025 3.177 9.517c0 2.941 2.631 5.984 5.83 8.589 1.163.94 2.434 1.885 3.663 2.63.616.373 1.26.742 1.846 1.067.586-.325 1.23-.694 1.846-1.067 1.229-.745 2.5-1.69 3.663-2.63 3.199-2.605 5.83-5.648 5.83-8.589C20.855 7.025 18.821 5 16.697 5zm-4.99 14.518c-.426.25-.8.458-1.134.637l-.574.31-.574-.31c-.334-.179-.708-.387-1.134-.637-1.17-.71-2.39-1.614-3.502-2.516C1.348 14.737 0 12.537 0 10.055 0 6.507 2.87 3.63 6.413 3.63c1.756 0 3.09.72 4.146 1.668L12 6.453l1.44-1.155c1.057-.948 2.39-1.668 4.146-1.668 3.543 0 6.413 2.877 6.413 6.425 0 2.482-1.348 4.682-3.387 6.947-1.112.902-2.332 1.806-3.502 2.516z"/></svg>',
  comment: '<svg viewBox="0 0 24 24"><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42 5.71-5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/></svg>',
  search: '<svg viewBox="0 0 24 24"><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/></svg>',
  more: '<svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7-2c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/></svg>',
  delete: '<svg viewBox="0 0 24 24"><path d="M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 14.23C4.95 23.32 5.97 24 7.07 24h9.86c1.1 0 2.12-.68 2.2-1.77L19.94 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V6h-4V4.5z"/></svg>',
  image: '<svg viewBox="0 0 24 24"><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zM18 10.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM7 16l4-8 3 6 2.5-3 2.5 5H7z"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000 1.41.996.996 0 001.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06z"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>',
  send: '<svg viewBox="0 0 24 24"><path d="M3.5 12.01v-.02c0-.16.08-.3.2-.39l14-10c.17-.12.4-.12.56.01.16.13.22.35.14.54l-5 14c-.06.17-.21.27-.38.28-.18.01-.34-.08-.43-.23l-3.03-4.83L3.88 12.4c-.16-.06-.38 0-.38.61zm6.29-1.17l2.49 3.96 3.8-10.63-10.63 3.8 3.96 2.49.38-.62z"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M9.64 18.952l-5.55-4.861 1.317-1.504 4.115 3.601 8.744-8.184 1.373 1.465-9.999 9.483z"/></svg>',
  error: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>',
  info: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M18.85 2.99L21.14 5.28 19.13 7.29 16.84 5 18.85 2.99zM13.19 9.15L15.48 11.44 8.28 18.64 4.5 19.5 5.36 15.72 12.56 8.52 13.19 9.15z"/></svg>',
  logout: '<svg viewBox="0 0 24 24"><path d="M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75zm0 15c-3.721 0-6.75-3.029-6.75-6.75S8.279 5.25 12 5.25s6.75 3.029 6.75 6.75-3.029 6.75-6.75 6.75zM17 12c0 .276-.224.5-.5.5h-9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9c.276 0 .5.224.5.5z"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-3c0 .28-.22.5-.5.5h-1.54c-.17 1.1-1.07 2.06-2.25 2.24-.24.04-.47-.06-.59-.27-.12-.21-.08-.47.09-.64.17-.17.43-.22.65-.17.65-.14 1.14-.69 1.14-1.36 0-.76-.62-1.38-1.38-1.38-.76 0-1.38.62-1.38 1.38 0 .26.07.5.2.71.13.21.1.47-.07.64-.17.17-.43.22-.64.09-.57-.36-.96-.96-1.04-1.65-.03-.24.13-.47.37-.5.18-.02.36-.04.54-.04h1.54c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.54c-.17-1.1-1.07-2.06-2.25-2.24-.24-.04-.47.06-.59.27-.12.21-.08.47.09.64.17.17.43.22.65.17.65.14 1.14.69 1.14 1.36 0 .76-.62 1.38-1.38 1.38-.76 0-1.38-.62-1.38-1.38 0-.26.07-.5.2-.71.13-.21.1-.47-.07-.64-.17-.17-.43-.22-.64-.09-.57.36-.96.96-1.04 1.65-.03.24.13.47.37.5.18.02.36.04.54.04h1.54c.28 0 .5.22.5.5z"/></svg>'
};

// ===== DATA MANAGEMENT =====

function getUsers() {
  const data = localStorage.getItem(STORAGE_KEYS.USERS);
  return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getPosts() {
  const data = localStorage.getItem(STORAGE_KEYS.POSTS);
  return data ? JSON.parse(data) : [];
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts));
}

function getCurrentUser() {
  const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
}

function getNotifications() {
  const data = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
  return data ? JSON.parse(data) : [];
}

function saveNotifications(notifications) {
  localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
}

function getFollowing() {
  const data = localStorage.getItem(STORAGE_KEYS.FOLLOWING);
  return data ? JSON.parse(data) : {};
}

function saveFollowing(following) {
  localStorage.setItem(STORAGE_KEYS.FOLLOWING, JSON.stringify(following));
}

function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// ===== UTILITY FUNCTIONS =====

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'now';
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===== TOAST SYSTEM =====

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type} fade-in`;
  
  const iconMap = { success: ICONS.check, error: ICONS.error, info: ICONS.info };
  toast.innerHTML = `${iconMap[type] || ICONS.info}<span>${escapeHtml(message)}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== THEME TOGGLE =====

function toggleTheme() {
  const current = getTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.innerHTML = getTheme() === 'light' ? ICONS.moon : ICONS.sun;
    btn.title = getTheme() === 'light' ? 'Dark mode' : 'Light mode';
  }
}

function initTheme() {
  setTheme(getTheme());
  updateThemeIcon();
}

// ===== USER MENU =====

function toggleUserMenu() {
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

function closeUserMenu(e) {
  const dropdown = document.getElementById('userDropdown');
  const btn = document.querySelector('.user-menu-btn');
  if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
    dropdown.classList.remove('show');
  }
}

// ===== AUTH FUNCTIONS =====

function register(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'Email already registered' };
  }

  const newUser = {
    id: generateId(),
    name,
    email,
    password,
    handle: '@' + name.toLowerCase().replace(/\s+/g, ''),
    bio: '',
    avatar: `avatar${(users.length % 5) + 1}.jpg`,
    createdAt: Date.now()
  };

  users.push(newUser);
  saveUsers(users);
  
  // Follow demo users automatically
  const following = getFollowing();
  following[newUser.id] = ['demo1', 'demo2', 'demo3', 'demo4', 'demo5'];
  saveFollowing(following);
  
  return { success: true, user: newUser };
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  setCurrentUser(user);
  return { success: true, user };
}

function logout() {
  setCurrentUser(null);
  window.location.href = 'login.html';
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

// ===== POST FUNCTIONS =====

function createPost(content, imageUrl = '') {
  const user = getCurrentUser();
  if (!user) return null;

  const post = {
    id: generateId(),
    userId: user.id,
    username: user.name,
    handle: user.handle,
    avatar: user.avatar,
    content,
    image: imageUrl,
    likes: [],
    comments: [],
    shares: 0,
    createdAt: Date.now()
  };

  const posts = getPosts();
  posts.unshift(post);
  savePosts(posts);

  // Notify followers
  addNotification('post', user, null, post.id);

  return post;
}

function deletePost(postId) {
  let posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return false;

  const user = getCurrentUser();
  if (!user || post.userId !== user.id) return false;

  posts = posts.filter(p => p.id !== postId);
  savePosts(posts);
  return true;
}

function toggleLike(postId) {
  const user = getCurrentUser();
  if (!user) {
    showToast('Please login to like posts', 'error');
    return null;
  }

  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return null;

  const index = post.likes.indexOf(user.id);
  if (index > -1) {
    post.likes.splice(index, 1);
  } else {
    post.likes.push(user.id);
    // Notify post owner
    if (post.userId !== user.id) {
      addNotification('like', user, null, post.id);
    }
  }

  savePosts(posts);
  return post.likes.length;
}

function isLiked(postId) {
  const user = getCurrentUser();
  if (!user) return false;
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  return post ? post.likes.includes(user.id) : false;
}

function addComment(postId, text) {
  const user = getCurrentUser();
  if (!user) {
    showToast('Please login to comment', 'error');
    return null;
  }

  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return null;

  const comment = {
    id: generateId(),
    userId: user.id,
    username: user.name,
    avatar: user.avatar,
    text,
    createdAt: Date.now()
  };

  post.comments.push(comment);
  savePosts(posts);

  // Notify post owner
  if (post.userId !== user.id) {
    addNotification('comment', user, text, post.id);
  }

  return comment;
}

function toggleFollow(userId) {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast('Please login to follow', 'error');
    return null;
  }

  if (userId === currentUser.id) return null;

  const following = getFollowing();
  const myFollowing = following[currentUser.id] || [];
  const index = myFollowing.indexOf(userId);

  if (index > -1) {
    myFollowing.splice(index, 1);
  } else {
    myFollowing.push(userId);
    // Notify followed user
    const users = getUsers();
    const targetUser = users.find(u => u.id === userId);
    if (targetUser) {
      addNotification('follow', currentUser, null, null, targetUser.id);
    }
  }

  following[currentUser.id] = myFollowing;
  saveFollowing(following);
  return index === -1; // true if now following
}

function isFollowing(userId) {
  const currentUser = getCurrentUser();
  if (!currentUser) return false;
  const following = getFollowing();
  const myFollowing = following[currentUser.id] || [];
  return myFollowing.includes(userId);
}

function getFollowerCount(userId) {
  const following = getFollowing();
  let count = 0;
  for (const key in following) {
    if (following[key].includes(userId)) count++;
  }
  return count;
}

function getFollowingCount(userId) {
  const following = getFollowing();
  return (following[userId] || []).length;
}

// ===== NOTIFICATIONS =====

function addNotification(type, actor, text = '', postId = null, targetUserId = null) {
  const notifications = getNotifications();
  const notification = {
    id: generateId(),
    type,
    actorId: actor.id,
    actorName: actor.name,
    actorAvatar: actor.avatar,
    text,
    postId,
    targetUserId: targetUserId || (postId ? getPosts().find(p => p.id === postId)?.userId : null),
    read: false,
    createdAt: Date.now()
  };

  notifications.unshift(notification);
  // Keep max 100 notifications
  if (notifications.length > 100) {
    notifications.pop();
  }
  saveNotifications(notifications);
}

function getUnreadCount() {
  const notifications = getNotifications();
  const user = getCurrentUser();
  if (!user) return 0;
  return notifications.filter(n => !n.read && n.targetUserId === user.id).length;
}

function markNotificationsRead() {
  const notifications = getNotifications();
  const user = getCurrentUser();
  if (!user) return;
  notifications.forEach(n => {
    if (n.targetUserId === user.id) n.read = true;
  });
  saveNotifications(notifications);
  updateNotificationBadge();
}

function updateNotificationBadge() {
  const badges = document.querySelectorAll('.notification-badge');
  const count = getUnreadCount();
  badges.forEach(badge => {
    if (count > 0) {
      badge.textContent = count > 99 ? '99+' : count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

// ===== RENDERING =====

function renderNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const user = getCurrentUser();
  const unreadCount = getUnreadCount();

  navbar.innerHTML = `
    <div class="nav-container">
      <a href="${user ? 'index.html' : 'login.html'}" class="nav-logo">
        <img src="logo.png" alt="SocialConnect" style="width:32px;height:32px;">
        <span>SocialConnect</span>
      </a>
      ${user ? `
        <div class="nav-links">
          <a href="index.html" class="nav-link ${getPage() === 'home' ? 'active' : ''}">
            ${getPage() === 'home' ? ICONS.home : ICONS.homeOutline}
            <span>Home</span>
          </a>
          <a href="notifications.html" class="nav-link ${getPage() === 'notifications' ? 'active' : ''}">
            ${getPage() === 'notifications' ? ICONS.bell : ICONS.bellOutline}
            <span>Notifications</span>
            ${unreadCount > 0 ? `<span class="badge">${unreadCount > 99 ? '99+' : unreadCount}</span>` : ''}
          </a>
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">
            ${getTheme() === 'light' ? ICONS.moon : ICONS.sun}
          </button>
          <div class="user-menu">
            <button class="user-menu-btn" onclick="toggleUserMenu()">
              <img src="${user.avatar}" alt="${user.name}">
              <span>${user.name}</span>
            </button>
            <div class="user-dropdown" id="userDropdown">
              <a href="profile.html" class="dropdown-item">
                ${ICONS.userOutline}
                <span>Profile</span>
              </a>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" onclick="logout()">
                ${ICONS.logout}
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      ` : `
        <div class="nav-actions">
          <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">
            ${getTheme() === 'light' ? ICONS.moon : ICONS.sun}
          </button>
          <a href="login.html" class="btn-outline">Login</a>
          <a href="register.html" class="btn-primary">Sign Up</a>
        </div>
      `}
    </div>
  `;

  // Close dropdown on outside click
  document.addEventListener('click', closeUserMenu);
}

function renderBottomNav() {
  const nav = document.getElementById('bottomNav');
  if (!nav) return;

  const user = getCurrentUser();
  if (!user) {
    nav.style.display = 'none';
    return;
  }

  const unreadCount = getUnreadCount();
  const page = getPage();

  nav.innerHTML = `
    <div class="bottom-nav-inner">
      <a href="index.html" class="bottom-link ${page === 'home' ? 'active' : ''}">
        ${page === 'home' ? ICONS.home : ICONS.homeOutline}
        <span>Home</span>
      </a>
      <a href="index.html" class="bottom-link ${page === 'explore' ? 'active' : ''}">
        ${ICONS.search}
        <span>Explore</span>
      </a>
      <a href="notifications.html" class="bottom-link ${page === 'notifications' ? 'active' : ''}">
        ${page === 'notifications' ? ICONS.bell : ICONS.bellOutline}
        <span>Alerts</span>
        ${unreadCount > 0 ? `<span class="badge">${unreadCount > 99 ? '99+' : unreadCount}</span>` : ''}
      </a>
      <a href="profile.html" class="bottom-link ${page === 'profile' ? 'active' : ''}">
        ${ICONS.user}
        <span>Profile</span>
      </a>
    </div>
  `;
}

function renderLeftSidebar() {
  const sidebar = document.getElementById('leftSidebar');
  if (!sidebar) return;

  const user = getCurrentUser();
  if (!user) {
    sidebar.innerHTML = `
      <div class="sidebar-card">
        <div class="sidebar-card-header">Welcome</div>
        <div style="padding:0 16px 16px;">
          <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">Join SocialConnect to share your thoughts and connect with others.</p>
          <a href="register.html" class="btn-primary" style="display:block;text-align:center;width:100%;">Sign Up</a>
          <a href="login.html" class="btn-outline" style="display:block;text-align:center;width:100%;margin-top:8px;">Login</a>
        </div>
      </div>
    `;
    return;
  }

  sidebar.innerHTML = `
    <div class="sidebar-menu">
      <a href="index.html" class="sidebar-link ${getPage() === 'home' ? 'active' : ''}">
        ${getPage() === 'home' ? ICONS.home : ICONS.homeOutline}
        <span>Home</span>
      </a>
      <a href="index.html" class="sidebar-link">
        ${ICONS.explore}
        <span>Explore</span>
      </a>
      <a href="notifications.html" class="sidebar-link ${getPage() === 'notifications' ? 'active' : ''}">
        ${getPage() === 'notifications' ? ICONS.bell : ICONS.bellOutline}
        <span>Notifications</span>
      </a>
      <a href="profile.html" class="sidebar-link ${getPage() === 'profile' ? 'active' : ''}">
        ${ICONS.userOutline}
        <span>Profile</span>
      </a>
    </div>
    <button class="btn-primary sidebar-btn" onclick="openPostModal()">
      <span>Post</span>
    </button>
  `;
}

function renderRightSidebar() {
  const sidebar = document.getElementById('rightSidebar');
  if (!sidebar) return;

  // Trending topics
  const trends = [
    { category: 'Technology', title: '#WebDevelopment', posts: '12.5K posts' },
    { category: 'Trending', title: '#JavaScript', posts: '8.2K posts' },
    { category: 'Design', title: '#UIUXDesign', posts: '5.1K posts' },
    { category: 'News', title: '#TechNews', posts: '3.7K posts' },
    { category: 'Programming', title: '#CodingLife', posts: '2.9K posts' }
  ];

  // Suggestions
  const allUsers = getUsers();
  const currentUser = getCurrentUser();
  const suggestions = allUsers
    .filter(u => u.id !== (currentUser?.id) && !isFollowing(u.id))
    .slice(0, 3);

  sidebar.innerHTML = `
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Search posts..." oninput="handleSearch(this.value)">
      ${ICONS.search}
    </div>
    <div class="sidebar-card">
      <div class="sidebar-card-header">Trending for you</div>
      ${trends.map(t => `
        <div class="trend-item">
          <div class="trend-category">${t.category}</div>
          <div class="trend-title">${t.title}</div>
          <div class="trend-posts">${t.posts}</div>
        </div>
      `).join('')}
    </div>
    <div class="sidebar-card">
      <div class="sidebar-card-header">Who to follow</div>
      ${suggestions.length > 0 ? suggestions.map(u => `
        <div class="suggestion-item">
          <img src="${u.avatar}" alt="${u.name}">
          <div class="suggestion-info">
            <div class="name">${u.name}</div>
            <div class="handle">${u.handle}</div>
          </div>
          <button class="btn-outline" onclick="handleFollow('${u.id}', this)">Follow</button>
        </div>
      `).join('') : '<div style="padding:12px 16px;color:var(--text-secondary);font-size:14px;">No suggestions right now</div>'}
    </div>
  `;
}

function handleFollow(userId, btn) {
  const result = toggleFollow(userId);
  if (result !== null) {
    btn.textContent = result ? 'Following' : 'Follow';
    btn.className = result ? 'btn-primary' : 'btn-outline';
    btn.style.padding = '6px 16px';
    btn.style.fontSize = '13px';
    showToast(result ? 'Now following!' : 'Unfollowed', 'success');
    // Refresh profile stats if on profile page
    if (getPage() === 'profile') {
      renderProfilePage();
    }
  }
}

function handleSearch(query) {
  const feed = document.getElementById('feed');
  if (!feed) return;

  if (!query.trim()) {
    renderFeed();
    return;
  }

  const posts = getPosts();
  const users = getUsers();
  const searchTerm = query.toLowerCase();

  const filtered = posts.filter(p => 
    p.content.toLowerCase().includes(searchTerm) ||
    p.username.toLowerCase().includes(searchTerm) ||
    p.handle.toLowerCase().includes(searchTerm)
  );

  if (filtered.length === 0) {
    feed.innerHTML = `
      <div class="empty-state">
        ${ICONS.search}
        <h3>No results found</h3>
        <p>Try searching for something else</p>
      </div>
    `;
    return;
  }

  feed.innerHTML = filtered.map(post => renderPostCard(post)).join('');
  attachPostListeners();
}

function renderPostCard(post) {
  const user = getCurrentUser();
  const liked = user ? post.likes.includes(user.id) : false;
  const isOwner = user && post.userId === user.id;
  const comments = post.comments || [];
  const commentCount = comments.length;

  return `
    <div class="post-card" data-post-id="${post.id}">
      <img src="${post.avatar}" alt="${post.username}" class="post-avatar" onclick="event.stopPropagation();viewProfile('${post.userId}')">
      <div class="post-content">
        <div style="display:flex;justify-content:space-between;align-items:start;">
          <div class="post-header">
            <span class="post-author">${escapeHtml(post.username)}</span>
            <span class="post-handle">${post.handle}</span>
            <span class="post-time">${formatTime(post.createdAt)}</span>
          </div>
          ${isOwner ? `
            <div class="post-menu">
              <button class="post-menu-btn" onclick="event.stopPropagation();togglePostMenu('${post.id}')">
                ${ICONS.more}
              </button>
              <div class="post-menu-dropdown" id="postMenu-${post.id}">
                <button class="dropdown-item" onclick="event.stopPropagation();confirmDeletePost('${post.id}')">
                  ${ICONS.delete}
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ` : ''}
        </div>
        <div class="post-text">${escapeHtml(post.content)}</div>
        ${post.image ? `<div class="post-image"><img src="${post.image}" alt="Post image"></div>` : ''}
        <div class="post-actions-bar">
          <button class="post-action" onclick="event.stopPropagation();toggleComments('${post.id}')">
            ${ICONS.comment}
            <span>${commentCount || ''}</span>
          </button>
          <button class="post-action ${liked ? 'liked' : ''}" onclick="event.stopPropagation();handleLike('${post.id}')">
            ${liked ? ICONS.heart : ICONS.heartOutline}
            <span>${post.likes.length > 0 ? formatNumber(post.likes.length) : ''}</span>
          </button>
          <button class="post-action" onclick="event.stopPropagation();handleShare('${post.id}')">
            ${ICONS.share}
            <span>${post.shares > 0 ? formatNumber(post.shares) : ''}</span>
          </button>
        </div>
        <div class="comments-section hidden" id="comments-${post.id}">
          ${comments.map(c => `
            <div class="comment-item">
              <img src="${c.avatar}" alt="${c.username}">
              <div class="comment-body">
                <div class="comment-author">${escapeHtml(c.username)}</div>
                <div class="comment-text">${escapeHtml(c.text)}</div>
              </div>
            </div>
          `).join('')}
          ${user ? `
            <div class="comment-input-area" style="margin-top:8px;">
              <img src="${user.avatar}" alt="${user.name}">
              <div class="comment-input-wrapper">
                <input type="text" id="commentInput-${post.id}" placeholder="Write a comment..." onkeypress="if(event.key==='Enter')submitComment('${post.id}')">
                <button class="comment-submit-btn" onclick="submitComment('${post.id}')">
                  ${ICONS.send}
                </button>
              </div>
            </div>
          ` : '<p style="font-size:13px;color:var(--text-secondary);margin-top:8px;"><a href="login.html">Login</a> to comment</p>'}
        </div>
      </div>
    </div>
  `;
}

function attachPostListeners() {
  // Post menu listeners are handled inline
}

function togglePostMenu(postId) {
  const menu = document.getElementById(`postMenu-${postId}`);
  if (menu) {
    // Close all other menus
    document.querySelectorAll('.post-menu-dropdown').forEach(m => {
      if (m !== menu) m.classList.remove('show');
    });
    menu.classList.toggle('show');
  }
}

function closeAllPostMenus(e) {
  if (!e.target.closest('.post-menu')) {
    document.querySelectorAll('.post-menu-dropdown').forEach(m => m.classList.remove('show'));
  }
}

function confirmDeletePost(postId) {
  if (confirm('Delete this post? This action cannot be undone.')) {
    if (deletePost(postId)) {
      showToast('Post deleted', 'success');
      renderFeed();
    }
  }
}

function handleLike(postId) {
  const result = toggleLike(postId);
  if (result !== null) {
    renderFeed();
  }
}

function toggleComments(postId) {
  const section = document.getElementById(`comments-${postId}`);
  if (section) {
    section.classList.toggle('hidden');
  }
}

function submitComment(postId) {
  const input = document.getElementById(`commentInput-${postId}`);
  if (!input || !input.value.trim()) return;

  const comment = addComment(postId, input.value.trim());
  if (comment) {
    input.value = '';
    renderFeed();
    // Keep comments open
    setTimeout(() => {
      const section = document.getElementById(`comments-${postId}`);
      if (section) section.classList.remove('hidden');
    }, 50);
    showToast('Comment posted!', 'success');
  }
}

function handleShare(postId) {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.shares++;
    savePosts(posts);
    renderFeed();
    showToast('Post shared!', 'success');
  }
}

function viewProfile(userId) {
  const user = getCurrentUser();
  if (user && user.id === userId) {
    window.location.href = 'profile.html';
  } else {
    // For demo users, store selected user and go to profile
    sessionStorage.setItem('viewUserId', userId);
    window.location.href = 'profile.html?view=' + userId;
  }
}

function renderFeed() {
  const feed = document.getElementById('feed');
  if (!feed) return;

  const posts = getPosts();
  if (posts.length === 0) {
    feed.innerHTML = `
      <div class="empty-state">
        ${ICONS.homeOutline}
        <h3>Welcome to SocialConnect!</h3>
        <p>Be the first to share something with the community.</p>
      </div>
    `;
    return;
  }

  feed.innerHTML = posts.map(post => renderPostCard(post)).join('');
  document.addEventListener('click', closeAllPostMenus);
}

// ===== CREATE POST =====

function initCreatePost() {
  const textarea = document.getElementById('postContent');
  const charCount = document.getElementById('charCount');
  const submitBtn = document.getElementById('submitPost');

  if (!textarea) return;

  textarea.addEventListener('input', function() {
    const len = this.value.length;
    if (charCount) charCount.textContent = len;
    if (submitBtn) submitBtn.disabled = len === 0 || len > 280;
    
    // Auto-resize
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 300) + 'px';
  });
}

function submitPost() {
  const textarea = document.getElementById('postContent');
  if (!textarea || !textarea.value.trim()) return;

  const content = textarea.value.trim();
  if (content.length > 280) {
    showToast('Post must be under 280 characters', 'error');
    return;
  }

  createPost(content);
  textarea.value = '';
  const charCount = document.getElementById('charCount');
  if (charCount) charCount.textContent = '0';
  const submitBtn = document.getElementById('submitPost');
  if (submitBtn) submitBtn.disabled = true;

  renderFeed();
  showToast('Post created!', 'success');
  
  // Close modal if open
  closePostModal();
}

function openPostModal() {
  const overlay = document.getElementById('postModal');
  if (overlay) {
    overlay.classList.add('show');
    setTimeout(() => {
      const textarea = document.getElementById('modalPostContent');
      if (textarea) textarea.focus();
    }, 100);
  }
}

function closePostModal() {
  const overlay = document.getElementById('postModal');
  if (overlay) {
    overlay.classList.remove('show');
    const textarea = document.getElementById('modalPostContent');
    if (textarea) {
      textarea.value = '';
      const charCount = document.getElementById('modalCharCount');
      if (charCount) charCount.textContent = '0';
    }
  }
}

function submitModalPost() {
  const textarea = document.getElementById('modalPostContent');
  if (!textarea || !textarea.value.trim()) return;

  const content = textarea.value.trim();
  if (content.length > 280) {
    showToast('Post must be under 280 characters', 'error');
    return;
  }

  createPost(content);
  renderFeed();
  showToast('Post created!', 'success');
  closePostModal();
}

function initModalPost() {
  const textarea = document.getElementById('modalPostContent');
  const charCount = document.getElementById('modalCharCount');
  const submitBtn = document.getElementById('modalSubmitPost');

  if (!textarea) return;

  textarea.addEventListener('input', function() {
    const len = this.value.length;
    if (charCount) charCount.textContent = len;
    if (submitBtn) submitBtn.disabled = len === 0 || len > 280;
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 300) + 'px';
  });
}

// ===== PROFILE PAGE =====

function renderProfilePage() {
  const user = getCurrentUser();
  if (!user) return;

  const urlParams = new URLSearchParams(window.location.search);
  const viewUserId = urlParams.get('view') || sessionStorage.getItem('viewUserId');
  sessionStorage.removeItem('viewUserId');

  let profileUser = user;
  let isOwnProfile = true;

  if (viewUserId && viewUserId !== user.id) {
    const users = getUsers();
    const found = users.find(u => u.id === viewUserId);
    if (found) {
      profileUser = found;
      isOwnProfile = false;
    }
  }

  // Update profile header
  const profileName = document.getElementById('profileName');
  const profileHandle = document.getElementById('profileHandle');
  const profileBio = document.getElementById('profileBio');
  const profileAvatar = document.getElementById('profileAvatar');
  const profileFollowers = document.getElementById('profileFollowers');
  const profileFollowing = document.getElementById('profileFollowing');
  const profileActions = document.getElementById('profileActions');

  if (profileName) profileName.textContent = profileUser.name;
  if (profileHandle) profileHandle.textContent = profileUser.handle;
  if (profileBio) profileBio.textContent = profileUser.bio || 'No bio yet.';
  if (profileAvatar) profileAvatar.src = profileUser.avatar;
  if (profileFollowers) profileFollowers.textContent = formatNumber(getFollowerCount(profileUser.id));
  if (profileFollowing) profileFollowing.textContent = formatNumber(getFollowingCount(profileUser.id));

  if (profileActions) {
    if (isOwnProfile) {
      profileActions.innerHTML = `
        <button class="btn-outline" onclick="editProfile()">Edit Profile</button>
      `;
    } else {
      const following = isFollowing(profileUser.id);
      profileActions.innerHTML = `
        <button class="${following ? 'btn-outline' : 'btn-primary'}" onclick="handleFollow('${profileUser.id}', this)" style="min-width:100px;">
          ${following ? 'Following' : 'Follow'}
        </button>
      `;
    }
  }

  // Render user posts
  const postsContainer = document.getElementById('profilePosts');
  if (postsContainer) {
    const posts = getPosts().filter(p => p.userId === profileUser.id);
    if (posts.length === 0) {
      postsContainer.innerHTML = `
        <div class="empty-state">
          ${ICONS.homeOutline}
          <h3>No posts yet</h3>
          <p>${isOwnProfile ? 'Share your first post!' : 'This user hasn\'t posted yet.'}</p>
        </div>
      `;
    } else {
      postsContainer.innerHTML = posts.map(post => renderPostCard(post)).join('');
    }
  }
}

function editProfile() {
  const user = getCurrentUser();
  if (!user) return;

  const newName = prompt('Enter your name:', user.name);
  if (newName === null) return;
  
  const newBio = prompt('Enter your bio:', user.bio || '');
  if (newBio === null) return;

  if (newName.trim()) {
    user.name = newName.trim();
    user.bio = newBio.trim();
    
    // Update in users list
    const users = getUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index > -1) {
      users[index] = user;
      saveUsers(users);
    }
    
    setCurrentUser(user);
    renderProfilePage();
    renderNavbar();
    showToast('Profile updated!', 'success');
  }
}

// ===== NOTIFICATIONS PAGE =====

function renderNotifications() {
  const container = document.getElementById('notificationsList');
  if (!container) return;

  const user = getCurrentUser();
  if (!user) {
    container.innerHTML = `
      <div class="empty-state">
        ${ICONS.bellOutline}
        <h3>Login to see notifications</h3>
        <p><a href="login.html">Login</a> to view your notifications</p>
      </div>
    `;
    return;
  }

  const notifications = getNotifications();
  const myNotifications = notifications.filter(n => n.targetUserId === user.id);

  if (myNotifications.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        ${ICONS.bellOutline}
        <h3>No notifications yet</h3>
        <p>When someone interacts with your posts, you'll see it here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = myNotifications.map(n => {
    let message = '';
    let iconClass = '';
    let icon = '';

    switch(n.type) {
      case 'like':
        message = `<strong>${n.actorName}</strong> liked your post`;
        iconClass = 'like';
        icon = ICONS.heart;
        break;
      case 'comment':
        message = `<strong>${n.actorName}</strong> commented: "${escapeHtml(n.text)}"`;
        iconClass = 'comment';
        icon = ICONS.comment;
        break;
      case 'follow':
        message = `<strong>${n.actorName}</strong> started following you`;
        iconClass = 'follow';
        icon = ICONS.user;
        break;
      case 'post':
        message = `<strong>${n.actorName}</strong> shared a new post`;
        iconClass = 'comment';
        icon = ICONS.home;
        break;
    }

    return `
      <div class="notification-item ${n.read ? '' : 'unread'}" onclick="handleNotificationClick('${n.id}', '${n.postId}')">
        <div class="notification-icon ${iconClass}">${icon}</div>
        <img src="${n.actorAvatar}" alt="${n.actorName}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;flex-shrink:0;">
        <div class="notification-text">
          ${message}
          <div class="notification-time">${formatTime(n.createdAt)}</div>
        </div>
      </div>
    `;
  }).join('');

  markNotificationsRead();
}

function handleNotificationClick(notifId, postId) {
  if (postId) {
    window.location.href = 'index.html#post-' + postId;
  }
}

// ===== AUTH PAGES =====

function initLoginPage() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorEl = document.getElementById('loginError');

    if (!email || !password) {
      errorEl.textContent = 'Please fill in all fields';
      errorEl.classList.add('show');
      return;
    }

    const result = login(email, password);
    if (result.success) {
      showToast('Welcome back!', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 500);
    } else {
      errorEl.textContent = result.message;
      errorEl.classList.add('show');
    }
  });
}

function initRegisterPage() {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorEl = document.getElementById('registerError');

    if (!name || !email || !password) {
      errorEl.textContent = 'Please fill in all fields';
      errorEl.classList.add('show');
      return;
    }

    if (password !== confirmPassword) {
      errorEl.textContent = 'Passwords do not match';
      errorEl.classList.add('show');
      return;
    }

    if (password.length < 6) {
      errorEl.textContent = 'Password must be at least 6 characters';
      errorEl.classList.add('show');
      return;
    }

    const result = register(name, email, password);
    if (result.success) {
      showToast('Account created! Please login.', 'success');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000);
    } else {
      errorEl.textContent = result.message;
      errorEl.classList.add('show');
    }
  });
}

// ===== PAGE ROUTING =====

function getPage() {
  const path = window.location.pathname;
  if (path.includes('index') || path.endsWith('/')) return 'home';
  if (path.includes('login')) return 'login';
  if (path.includes('register')) return 'register';
  if (path.includes('profile')) return 'profile';
  if (path.includes('notifications')) return 'notifications';
  return 'home';
}

// ===== DEMO DATA =====

function initDemoData() {
  // Check if already initialized
  if (localStorage.getItem('sc_initialized')) return;

  const demoUsers = [
    { id: 'demo1', name: 'Sarah Chen', email: 'sarah@demo.com', password: 'demo123', handle: '@sarahchen', bio: 'UX Designer & Coffee enthusiast ☕ | Building beautiful experiences', avatar: 'avatar1.jpg', createdAt: Date.now() - 86400000 * 30 },
    { id: 'demo2', name: 'Marcus Johnson', email: 'marcus@demo.com', password: 'demo123', handle: '@mjohnson', bio: 'Full-stack developer | Open source contributor | JavaScript lover', avatar: 'avatar2.jpg', createdAt: Date.now() - 86400000 * 25 },
    { id: 'demo3', name: 'Emily Roberts', email: 'emily@demo.com', password: 'demo123', handle: '@emilyroberts', bio: 'Tech journalist | Sharing stories that matter | DM for collaborations', avatar: 'avatar3.jpg', createdAt: Date.now() - 86400000 * 20 },
    { id: 'demo4', name: 'David Kim', email: 'david@demo.com', password: 'demo123', handle: '@davidkim', bio: 'Frontend engineer | React & Vue | Building the future of web', avatar: 'avatar4.jpg', createdAt: Date.now() - 86400000 * 15 },
    { id: 'demo5', name: 'Isabella Martinez', email: 'bella@demo.com', password: 'demo123', handle: '@bellaart', bio: 'Digital artist & Creative director | Color is my language 🎨', avatar: 'avatar5.jpg', createdAt: Date.now() - 86400000 * 10 }
  ];

  const demoPosts = [
    {
      id: 'post1',
      userId: 'demo1',
      username: 'Sarah Chen',
      handle: '@sarahchen',
      avatar: 'avatar1.jpg',
      content: 'Just launched our new design system! 🎨 It\'s amazing how much consistency improves the user experience. What design principles do you swear by?',
      image: 'post3.jpg',
      likes: ['demo2', 'demo3', 'demo4'],
      comments: [
        { id: 'c1', userId: 'demo2', username: 'Marcus Johnson', avatar: 'avatar2.jpg', text: 'This looks incredible! Great work Sarah 👏', createdAt: Date.now() - 3600000 }
      ],
      shares: 5,
      createdAt: Date.now() - 7200000
    },
    {
      id: 'post2',
      userId: 'demo2',
      username: 'Marcus Johnson',
      handle: '@mjohnson',
      content: 'The sunset today was absolutely breathtaking. Sometimes you need to step away from the screen and appreciate nature\'s beauty. 🌅',
      image: 'post1.jpg',
      likes: ['demo1', 'demo3', 'demo4', 'demo5'],
      comments: [
        { id: 'c2', userId: 'demo5', username: 'Isabella Martinez', avatar: 'avatar5.jpg', text: 'Nature is the best artist! 😍', createdAt: Date.now() - 5400000 },
        { id: 'c3', userId: 'demo1', username: 'Sarah Chen', avatar: 'avatar1.jpg', text: 'Where is this? I need to visit!', createdAt: Date.now() - 4800000 }
      ],
      shares: 12,
      createdAt: Date.now() - 10800000
    },
    {
      id: 'post3',
      userId: 'demo5',
      username: 'Isabella Martinez',
      handle: '@bellaart',
      content: 'Homemade poke bowl for lunch today! 🍣 Fresh salmon, avocado, edamame, and all the good stuff. Healthy eating doesn\'t have to be boring!',
      image: 'post2.jpg',
      likes: ['demo1', 'demo2'],
      comments: [],
      shares: 3,
      createdAt: Date.now() - 18000000
    },
    {
      id: 'post4',
      userId: 'demo4',
      username: 'David Kim',
      handle: '@davidkim',
      content: 'Just pushed a major update to our open-source component library. 50+ new components, better accessibility, and improved TypeScript support. Check it out! 🚀',
      image: '',
      likes: ['demo1', 'demo2', 'demo3', 'demo5'],
      comments: [
        { id: 'c4', userId: 'demo3', username: 'Emily Roberts', avatar: 'avatar3.jpg', text: 'This is exactly what the community needed!', createdAt: Date.now() - 14400000 }
      ],
      shares: 28,
      createdAt: Date.now() - 21600000
    },
    {
      id: 'post5',
      userId: 'demo3',
      username: 'Emily Roberts',
      handle: '@emilyroberts',
      content: 'The future of AI in content creation is both exciting and challenging. As creators, we need to find the balance between leveraging technology and maintaining authenticity. What are your thoughts? 🤖✍️',
      image: '',
      likes: ['demo1', 'demo4', 'demo5'],
      comments: [
        { id: 'c5', userId: 'demo2', username: 'Marcus Johnson', avatar: 'avatar2.jpg', text: 'Great point! AI should enhance creativity, not replace it.', createdAt: Date.now() - 28800000 },
        { id: 'c6', userId: 'demo5', username: 'Isabella Martinez', avatar: 'avatar5.jpg', text: 'Couldn\'t agree more. The human touch is irreplaceable.', createdAt: Date.now() - 25200000 }
      ],
      shares: 15,
      createdAt: Date.now() - 32400000
    },
    {
      id: 'post6',
      userId: 'demo1',
      username: 'Sarah Chen',
      handle: '@sarahchen',
      content: '5 UX principles every designer should know:\n\n1. Consistency is key\n2. Less is more\n3. Feedback matters\n4. Know your users\n5. Test, iterate, repeat\n\nWhat would you add to this list? 💭',
      image: '',
      likes: ['demo2', 'demo3', 'demo4', 'demo5'],
      comments: [
        { id: 'c7', userId: 'demo4', username: 'David Kim', avatar: 'avatar4.jpg', text: 'Accessibility first! Always design for everyone 🙌', createdAt: Date.now() - 43200000 }
      ],
      shares: 42,
      createdAt: Date.now() - 46800000
    }
  ];

  saveUsers(demoUsers);
  savePosts(demoPosts);

  // Set up following relationships
  const following = {
    'demo1': ['demo2', 'demo4', 'demo5'],
    'demo2': ['demo1', 'demo3', 'demo5'],
    'demo3': ['demo1', 'demo2', 'demo4'],
    'demo4': ['demo1', 'demo2', 'demo3', 'demo5'],
    'demo5': ['demo1', 'demo3', 'demo4']
  };
  saveFollowing(following);

  // Create some notifications
  const notifications = [
    { id: 'n1', type: 'follow', actorId: 'demo2', actorName: 'Marcus Johnson', actorAvatar: 'avatar2.jpg', text: '', postId: null, targetUserId: 'demo1', read: false, createdAt: Date.now() - 3600000 },
    { id: 'n2', type: 'like', actorId: 'demo3', actorName: 'Emily Roberts', actorAvatar: 'avatar3.jpg', text: '', postId: 'post1', targetUserId: 'demo1', read: false, createdAt: Date.now() - 7200000 },
    { id: 'n3', type: 'comment', actorId: 'demo4', actorName: 'David Kim', actorAvatar: 'avatar4.jpg', text: 'This is amazing work!', postId: 'post1', targetUserId: 'demo1', read: false, createdAt: Date.now() - 10800000 },
    { id: 'n4', type: 'like', actorId: 'demo1', actorName: 'Sarah Chen', actorAvatar: 'avatar1.jpg', text: '', postId: 'post2', targetUserId: 'demo2', read: true, createdAt: Date.now() - 14400000 }
  ];
  saveNotifications(notifications);

  localStorage.setItem('sc_initialized', 'true');
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();

  // Initialize demo data
  initDemoData();

  // Render shared components
  renderNavbar();
  renderBottomNav();
  renderLeftSidebar();
  renderRightSidebar();
  updateNotificationBadge();

  // Page-specific initialization
  const page = getPage();
  
  switch(page) {
    case 'home':
      if (requireAuth()) {
        renderFeed();
        initCreatePost();
        initModalPost();
      }
      break;
    case 'profile':
      if (requireAuth()) {
        renderProfilePage();
      }
      break;
    case 'notifications':
      if (requireAuth()) {
        renderNotifications();
      }
      break;
    case 'login':
      initLoginPage();
      if (isLoggedIn()) {
        window.location.href = 'index.html';
      }
      break;
    case 'register':
      initRegisterPage();
      if (isLoggedIn()) {
        window.location.href = 'index.html';
      }
      break;
  }

  // Update theme icon after render
  updateThemeIcon();
});
