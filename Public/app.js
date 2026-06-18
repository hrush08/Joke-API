<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Joke's Box - Clean Joke Management</title>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <style>
    :root {
      /* Clean, Neutral Palette */
      --bg-app: #f8f9fa;
      --bg-surface: #ffffff;
      --text-main: #212529;
      --text-muted: #6c757d;
      --border-color: #dee2e6;
      --border-focus: #4dabf7;
      
      /* Subtle Accent Colors */
      --color-primary: #339af0;     /* Clean Blue */
      --color-danger: #ff6b6b;      /* Soft Red */
      --color-success: #51cf66;     /* Soft Green */
      
      /* Utilities */
      --radius: 6px;
      --shadow-sm: 0 2px 4px rgba(0,0,0,0.04);
      --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
      --transition: all 0.2s ease;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-app);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 15px;
      line-height: 1.5;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Layout Header */
    .app-header {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
      padding: 1rem 2rem;
    }
    .header-container {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-main);
    }
    .logo i {
      color: var(--color-primary);
      font-size: 1.4rem;
    }
    .logo h1 {
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: -0.3px;
    }
    .user-nav {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .user-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .user-avatar {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #e9ecef;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 0.85rem;
    }
    .user-name {
      font-weight: 500;
      font-size: 0.9rem;
    }

    /* Minimalist Interactive Elements */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.55rem 1.1rem;
      border-radius: var(--radius);
      border: 1px solid var(--border-color);
      cursor: pointer;
      transition: var(--transition);
      background: var(--bg-surface);
      color: var(--text-main);
      text-decoration: none;
    }
    .btn:hover {
      background: #f1f3f5;
      border-color: #ced4da;
    }
    .btn-primary {
      background: var(--color-primary);
      color: #ffffff;
      border-color: var(--color-primary);
    }
    .btn-primary:hover {
      background: #228be6;
      border-color: #228be6;
    }
    .btn-accent {
      background: #e7f5ff;
      color: #1c7ed6;
      border-color: #d0ebff;
    }
    .btn-accent:hover {
      background: #d0ebff;
    }
    .btn-danger {
      background: #fff5f5;
      color: #c92a2a;
      border-color: #ffc9c9;
    }
    .btn-danger:hover {
      background: #ffe3e3;
    }
    .btn-block {
      width: 100%;
    }

    /* Main Container layout */
    .main-content {
      flex: 1;
      max-width: 1100px;
      width: 100%;
      margin: 2.5rem auto;
      padding: 0 1.5rem;
    }

    /* View 1: Clean Auth Panel */
    .auth-section {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
    }
    .auth-card {
      width: 100%;
      max-width: 400px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      box-shadow: var(--shadow-md);
      overflow: hidden;
    }
    .auth-tabs {
      display: flex;
      border-bottom: 1px solid var(--border-color);
      background: #f8f9fa;
    }
    .auth-tab {
      flex: 1;
      padding: 0.85rem;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--text-muted);
      font-weight: 500;
      font-size: 0.95rem;
      cursor: pointer;
      transition: var(--transition);
    }
    .auth-tab.active {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
      background: var(--bg-surface);
    }
    .auth-forms-container {
      padding: 2rem;
    }
    .auth-form {
      display: none;
      flex-direction: column;
      gap: 1.25rem;
    }
    .auth-form.active {
      display: flex;
    }
    .auth-form h2 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: -0.25rem;
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }

    /* Modern Minimalist Inputs */
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .form-row {
      display: flex;
      gap: 1rem;
    }
    .form-group.half {
      flex: 1;
    }
    label {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-main);
    }
    .input-wrapper {
      position: relative;
    }
    .input-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #adb5bd;
      font-size: 0.95rem;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    select,
    textarea {
      width: 100%;
      background-color: var(--bg-surface);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 0.55rem 0.75rem 0.55rem 2.2rem;
      border-radius: var(--radius);
      font-family: inherit;
      font-size: 0.9rem;
      outline: none;
      transition: var(--transition);
    }
    textarea {
      padding-left: 0.75rem;
      resize: vertical;
    }
    select {
      padding-left: 2.2rem;
    }
    input:focus, select:focus, textarea:focus {
      border-color: var(--border-focus);
      box-shadow: 0 0 0 3px rgba(77, 171, 247, 0.15);
    }

    /* Subtle Banner System */
    .alert-message {
      padding: 0.75rem 1rem;
      border-radius: var(--radius);
      font-size: 0.85rem;
      font-weight: 500;
      border: 1px solid transparent;
    }
    .alert-message.error {
      background: #fff5f5;
      color: #c92a2a;
      border-color: #ffc9c9;
    }
    .alert-message.success {
      background: #ebfbee;
      color: #2b8a3e;
      border-color: #b2f2bb;
    }

    /* View 2: Dashboard Interface */
    .dashboard-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .welcome-text h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    .welcome-text p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    .dashboard-actions {
      display: flex;
      gap: 0.75rem;
    }

    /* Grid Layout for Jokes */
    .jokes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    /* Elegant, Clean Joke Cards */
    .joke-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: var(--transition);
    }
    .joke-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
    .joke-card-header {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fdfdfd;
    }
    .joke-badge {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      background: #f1f3f5;
      color: var(--text-muted);
    }
    .joke-actions {
      display: flex;
      gap: 0.35rem;
    }
    .btn-icon {
      background: none;
      border: none;
      color: #adb5bd;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .btn-icon:hover {
      background: #f1f3f5;
      color: var(--text-main);
    }
    .btn-icon.delete-icon:hover {
      background: #fff5f5;
      color: var(--color-danger);
    }

    /* Card Layout Internals */
    .joke-card-body {
      padding: 1.25rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .joke-text {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-main);
    }
    .delivery-container {
      border-top: 1px dashed var(--border-color);
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .btn-reveal {
      align-self: flex-start;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--color-primary);
      background: #e7f5ff;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
      border: none;
      cursor: pointer;
    }
    .btn-reveal:hover {
      background: #d0ebff;
    }
    .joke-delivery {
      font-size: 1rem;
      color: #2b8a3e;
      background: #ebfbee;
      padding: 0.6rem 0.75rem;
      border-radius: var(--radius);
      font-weight: 500;
    }
    .joke-delivery.hidden {
      display: none;
    }
    .joke-card-image {
      width: 100%;
      border-radius: var(--radius);
      overflow: hidden;
      margin-top: 0.25rem;
      border: 1px solid var(--border-color);
    }
    .joke-card-image img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Light, Clean Modals */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 200;
      padding: 1rem;
    }
    .modal.hidden {
      display: none !important;
    }
    .modal-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(33, 37, 41, 0.4);
      backdrop-filter: blur(2px);
    }
    .modal-content {
      position: relative;
      background: var(--bg-surface);
      border-radius: var(--radius);
      width: 100%;
      max-width: 500px;
      box-shadow: var(--shadow-md);
      overflow: hidden;
      z-index: 10;
    }
    .modal-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header h3 {
      font-size: 1.15rem;
      font-weight: 600;
    }
    .btn-close {
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 1.25rem;
      cursor: pointer;
    }
    .modal-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .modal-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--border-color);
      background: #f8f9fa;
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }

    /* Image Upload & Handling Setup */
    .file-upload-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
      border: 1px dashed var(--border-color);
      background: #f8f9fa;
      padding: 1.25rem;
      border-radius: var(--radius);
      cursor: pointer;
      text-align: center;
      font-size: 0.85rem;
    }
    .file-upload-label:hover {
      background: #f1f3f5;
    }
    .file-input-hidden {
      display: none;
    }
    .upload-icon {
      font-size: 1.5rem;
      color: #adb5bd;
    }
    .file-size-limit {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .image-preview-container {
      position: relative;
      width: 100%;
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid var(--border-color);
    }
    .image-preview-container img {
      width: 100%;
      display: block;
    }
    .btn-remove-image {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: rgba(255,255,255,0.9);
      border: 1px solid var(--border-color);
      color: var(--color-danger);
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      border-radius: var(--radius);
      cursor: pointer;
    }

    /* Neutral Empty State */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3.5rem 1.5rem;
      text-align: center;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius);
      max-width: 500px;
      margin: 2rem auto;
    }
    .empty-icon {
      font-size: 2.5rem;
      color: #adb5bd;
      margin-bottom: 1rem;
    }
    .empty-state h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .empty-state p {
      color: var(--text-muted);
      font-size: 0.9rem;
      max-width: 360px;
      margin-bottom: 1.5rem;
    }
    .empty-actions {
      display: flex;
      gap: 0.75rem;
    }

    /* Loader Overlay */
    .global-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .spinner-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
    .circle-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid #e9ecef;
      border-top-color: var(--color-primary);
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }
    #loader-text {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-muted);
    }

    /* Footer layout */
    .app-footer {
      text-align: center;
      padding: 2rem 0;
      margin-top: auto;
      border-top: 1px solid var(--border-color);
      background: var(--bg-surface);
    }
    .app-footer p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    /* Core Utility class */
    .hidden {
      display: none !important;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Compact Layout Adjustments */
    @media (max-width: 600px) {
      .header-container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      .main-content {
        margin: 1.5rem auto;
      }
      .dashboard-header {
        flex-direction: column;
        align-items: flex-start;
      }
      .dashboard-actions, .empty-actions {
        width: 100%;
        flex-direction: column;
      }
      .form-row {
        flex-direction: column;
        gap: 1.25rem;
      }
    }
  </style>
</head>
<body>
  
  <header class="app-header">
    <div class="header-container">
      <div class="logo" id="app-logo">
        <i class="fa-solid fa-box-open"></i>
        <h1>Joke's Box</h1>
      </div>
      <nav class="user-nav">
        <div id="user-profile-badge" class="user-badge hidden">
          <span class="user-avatar" id="avatar-char">U</span>
          <span class="user-name" id="display-username">User</span>
        </div>
        <button id="btn-logout" class="btn hidden">
          <i class="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </nav>
    </div>
  </header>

  <main class="main-content">
    
    <section id="view-auth" class="auth-section">
      <div class="auth-card">
        <div class="auth-tabs">
          <button id="tab-login" class="auth-tab active" onclick="switchAuthTab('login')">Login</button>
          <button id="tab-register" class="auth-tab" onclick="switchAuthTab('register')">Register</button>
        </div>

        <div class="auth-forms-container">
          <form id="form-login" class="auth-form active" onsubmit="handleLogin(event)">
            <h2>Sign In</h2>
            <p class="subtitle">Access your preserved joke vault.</p>
            <div class="form-group">
              <label for="login-email">Email Address</label>
              <div class="input-wrapper">
                <i class="fa-solid fa-envelope input-icon"></i>
                <input type="email" id="login-email" placeholder="email@example.com" required>
              </div>
            </div>
            <div class="form-group">
              <label for="login-password">Password</label>
              <div class="input-wrapper">
                <i class="fa-solid fa-lock input-icon"></i>
                <input type="password" id="login-password" placeholder="••••••••" required>
              </div>
            </div>
            <div id="login-error" class="alert-message error hidden"></div>
            <button type="submit" id="btn-login-submit" class="btn btn-primary btn-block">
              Login
            </button>
          </form>

          <form id="form-register" class="auth-form" onsubmit="handleRegister(event)">
            <h2>Create Account</h2>
            <p class="subtitle">Get a personal container for your favorite laughs.</p>
            <div class="form-group">
              <label for="register-username">Username</label>
              <div class="input-wrapper">
                <i class="fa-solid fa-user input-icon"></i>
                <input type="text" id="register-username" placeholder="username" required>
              </div>
            </div>
            <div class="form-group">
              <label for="register-email">Email Address</label>
              <div class="input-wrapper">
                <i class="fa-solid fa-envelope input-icon"></i>
                <input type="email" id="register-email" placeholder="email@example.com" required>
              </div>
            </div>
            <div class="form-group">
              <label for="register-password">Password</label>
              <div class="input-wrapper">
                <i class="fa-solid fa-lock input-icon"></i>
                <input type="password" id="register-password" placeholder="••••••••" required>
              </div>
            </div>
            <div id="register-error" class="alert-message error hidden"></div>
            <button type="submit" id="btn-register-submit" class="btn btn-primary btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>

    <section id="view-dashboard" class="dashboard-section hidden">
      <div class="dashboard-header">
        <div class="welcome-text">
          <h2>Welcome back, <span id="welcome-username">User</span></h2>
          <p>You have compiled <span id="joke-count" style="font-weight: 600; color: var(--text-main);">0</span> jokes inside your box.</p>
        </div>
        <div class="dashboard-actions">
          <button id="btn-fetch-api" class="btn btn-accent" onclick="fetchJokeFromApi()">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Pull Random Joke
          </button>
          <button id="btn-open-create-modal" class="btn btn-primary" onclick="openJokeModal('create')">
            <i class="fa-solid fa-plus"></i> Add New Joke
          </button>
        </div>
      </div>

      <div id="dashboard-alert" class="alert-message success hidden"></div>

      <div class="jokes-container">
        <div id="jokes-grid" class="jokes-grid">
          </div>

        <div id="empty-state" class="empty-state hidden">
          <div class="empty-icon"><i class="fa-solid fa-box-open"></i></div>
          <h3>Your Box is Empty</h3>
          <p>Inject public jokes using the API tool or design custom entries directly into your profile setup.</p>
          <div class="empty-actions">
            <button class="btn btn-accent" onclick="fetchJokeFromApi()">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Import From API
            </button>
            <button class="btn btn-primary" onclick="openJokeModal('create')">
              <i class="fa-solid fa-plus"></i> Write Manually
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div id="joke-modal" class="modal hidden">
    <div class="modal-backdrop" onclick="closeJokeModal()"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="modal-title">Create New Joke</h3>
        <button id="btn-close-modal" class="btn-close" onclick="closeJokeModal()">&times;</button>
      </div>
      <form id="form-joke" class="modal-body" onsubmit="handleJokeSubmit(event)">
        <input type="hidden" id="joke-id">
        
        <div class="form-row">
          <div class="form-group half">
            <label for="joke-category">Category</label>
            <div class="input-wrapper">
              <i class="fa-solid fa-tags input-icon"></i>
              <input type="text" id="joke-category" placeholder="General, Coding, Pun" required>
            </div>
          </div>
          <div class="form-group half">
            <label for="joke-type">Format Type</label>
            <div class="input-wrapper">
              <i class="fa-solid fa-list-check input-icon"></i>
              <select id="joke-type" onchange="toggleJokeTypeFields()">
                <option value="single">Single Layout (One Liner)</option>
                <option value="twopart">Two-Part Layout (Setup & Punchline)</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="joke-setup" id="lbl-setup">Joke / Core Content</label>
          <textarea id="joke-setup" rows="3" placeholder="Enter joke context or setup premise here..." required></textarea>
        </div>

        <div class="form-group id-delivery-field hidden" id="field-delivery-container">
          <label for="joke-delivery">Delivery Line (Punchline)</label>
          <textarea id="joke-delivery" rows="2" placeholder="Enter punchline response details..."></textarea>
        </div>

        <div class="form-group">
          <label for="joke-image">Image Media Attachments (Optional)</label>
          <div class="image-upload-area">
            <input type="file" id="joke-image" accept="image/*" class="file-input-hidden" onchange="previewSelectedImage(event)">
            <label for="joke-image" class="file-upload-label" id="file-label-box">
              <i class="fa-solid fa-arrow-up-from-bracket upload-icon"></i>
              <span id="file-upload-text">Select a media image resource file</span>
              <span class="file-size-limit">Accepts standard images up to 5MB</span>
            </label>
            
            <div id="image-preview-container" class="image-preview-container hidden">
              <img id="image-preview" src="#" alt="Upload Resource Matrix File View Container">
              <button type="button" id="btn-remove-preview" class="btn-remove-image" onclick="removeImagePreview(event)">
                Remove Image
              </button>
            </div>
          </div>
        </div>

        <div id="joke-form-error" class="alert-message error hidden"></div>

        <div class="modal-footer">
          <button type="button" class="btn" onclick="closeJokeModal()">Cancel</button>
          <button type="submit" id="btn-joke-submit" class="btn btn-primary">Save Content</button>
        </div>
      </form>
    </div>
  </div>

  <div id="global-loader" class="global-loader hidden">
    <div class="spinner-box">
      <div class="circle-spinner"></div>
      <p id="loader-text">Processing...</p>
    </div>
  </div>

  <footer class="app-footer">
    <p>&copy; 2026 Joke's Box. Clean minimalist archiving.</p>
  </footer>

  <script src="app.js"></script>
</body>
</html>