# Security Policy

## Supported Versions

This is a static portfolio website built with React and Vite. Security updates will be applied as needed.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Considerations

### ✅ Security Features Implemented

1. **No API Keys or Secrets**: This is a static frontend-only application with no backend. No API keys, tokens, or secrets are stored in the codebase.

2. **Input Sanitization**: 
   - Contact form uses `encodeURIComponent()` to prevent XSS attacks
   - All user inputs are properly escaped before use

3. **Dependencies**: 
   - All dependencies are regularly updated
   - No known vulnerabilities (verified with `npm audit`)

4. **Safe Practices**:
   - No use of `dangerouslySetInnerHTML`
   - No `eval()` or similar dangerous functions
   - React's built-in XSS protection is utilized

5. **Git Security**:
   - `.gitignore` properly configured to exclude sensitive files
   - No environment variables or secrets committed

### 🔒 Security Best Practices

- **Contact Form**: Uses client-side `mailto:` links. For production use, consider implementing a backend service to handle form submissions securely.

- **External Links**: All external links use `rel="noopener noreferrer"` to prevent security issues.

- **Dependencies**: Regularly run `npm audit` to check for vulnerabilities.

## Reporting a Vulnerability

If you discover a security vulnerability, please email: zamanib50@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact

## Updates

Security updates will be applied as needed. This is a personal portfolio site with minimal security risk, but best practices are still followed.

