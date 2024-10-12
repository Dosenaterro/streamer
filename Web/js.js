function toggleText(className) {
    const text = document.querySelector(`.${className}`);
    text.style.display = text.style.display === 'block' ? 'none' : 'block';
  }
  
  // Usage:
  // <div onclick="toggleText('text1')">Toggle Text 1</div>
  // <div class="text1" style="display: none;">Text 1 content</div>
  