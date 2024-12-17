function insertIcon() {
    // Check if the icon already exists to prevent duplicates
    const existingIcon = document.querySelector('img[alt="ERCAS Logo"]');
    if (existingIcon) {
        return; // Exit if icon already exists
    }

    const newIcon = document.createElement('div');
    newIcon.className = 'x1i10hfl x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x6s0dn4 xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x78zum5 xl56j7k x1y1aw1k x1sxyh0 xwib8y2 xurb0ha xcdnw81';
    newIcon.setAttribute('role', 'button');
    newIcon.setAttribute('tabindex', '0');
    newIcon.id = 'ercas-extension-icon'; // Add an ID for easier selection

    newIcon.innerHTML = `
      <div class="x6s0dn4 x78zum5 xdt5ytf xl56j7k">
        <img src="https://i.ibb.co/Tg8fj4X/logo-ercas.png" 
             alt="ERCAS Logo" 
             style="width: 24px; height: 24px; object-fit: contain;"
        />
      </div>
    `;

    // Add click event listener to show popup
    newIcon.addEventListener('click', () => {
        const existingPopup = document.getElementById('ercas-popup');
        if (existingPopup) {
            existingPopup.remove();
        } else {
            createPopup(newIcon);
        }
    });

    // Find the Send button
    const sendButton = Array.from(document.querySelectorAll('[role="button"]')).find(el =>
        el.textContent === 'Send'
    );

    if (sendButton) {
        // Get the container that comes after the Send button
        const actionContainer = sendButton.nextElementSibling;

        if (actionContainer && actionContainer.classList.contains('x6s0dn4') && actionContainer.classList.contains('x78zum5')) {
            // Find the Voice Clip button
            const voiceClipButton = actionContainer.querySelector('div[role="button"]:has(svg[aria-label="Voice Clip"])');

            if (voiceClipButton) {
                // Insert before the Voice Clip button
                voiceClipButton.parentNode.insertBefore(newIcon, voiceClipButton);
            } else {
                console.error('Voice clip button not found');
            }
        } else {
            console.error('Action container not found');
        }
    } else {
        console.error('Send button not found');
    }
}

function createPopup(anchorElement) {
    const popup = document.createElement('div');
    popup.id = 'ercas-popup';
    popup.classList.add('ercas-popup');
    popup.style.cssText = `
        position: absolute;
        background-color: #000000;
        color: white;
        width: 300px;
        height: 350px;
        z-index: 9999;
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;

    // Get the current window width and position the popup within the window and above the icon
    const windowWidth = window.innerWidth;
    const rect = anchorElement.getBoundingClientRect();
    popup.style.top = `${rect.top - 370}px`; // Position 20px above the icon
    popup.style.left = `${Math.max(rect.left - 300 - 20, 20)}px`; // Position within the window

    popup.innerHTML = `
        <div class="ercas-popup-header">
            <div class="ercas-tab-container">
                <div class="ercas-tab-buttons">
                    <button class="ercas-tab-button active" data-tab="billings">Billings</button>
                    <button class="ercas-tab-button" data-tab="history">History</button>
                </div>
            </div>
            <div class="ercas-top-icons">
                <div class="ercas-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                    </svg>
                </div>
                <div class="ercas-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18"></path>
                        <path d="M6 6L18 18"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ercas-popup-content" id="billings-content">
            <div class="ercas-currency-info">
                <div class="ercas-currency-label">
                    <img src="https://flagcdn.com/w20/ng.png" alt="NGN" />
                    <span>NGN 🇳🇬</span>
                </div>
                <div class="ercas-currency-value">0</div>
            </div>
            <div class="ercas-input-group">
                <div class="gradient-border">
                    <div style="position: relative;">
                        <span class="input-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </span>
                        <input class="ercas-input" type="email" id="email" placeholder="Enter Email Address" />
                    </div>
                </div>
            </div>
            <div class="ercas-input-group">
                <div class="gradient-border">
                    <div style="position: relative;">
                        <span class="input-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                </path>
                            </svg>
                        </span>
                        <input class="ercas-input" type="tel" id="phone" placeholder="Enter Phone Number" />
                    </div>
                </div>
            </div>
            <div class="gradient-border">
                <button class="ercas-button transition-colors" id="generateTransaction">Generate Transaction</button>
            </div>
        </div>
        <div class="ercas-popup-content" id="history-content" style="display: none;">
            <p>History content goes here.</p>
        </div>
    `;

    // Prevent popup from interfering with scrolling
    popup.addEventListener('wheel', (e) => {
        e.stopPropagation();
    });

    document.body.appendChild(popup);

    // Tab switching logic
    const tabButtons = popup.querySelectorAll('.ercas-tab-button');
    const tabContents = popup.querySelectorAll('.ercas-popup-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');

            // Update active state for buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide content
            tabContents.forEach(content => {
                if (content.id === `${tabName}-content`) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Close popup when clicking outside
    const closePopup = (e) => {
        if (!popup.contains(e.target) && e.target !== anchorElement) {
            popup.remove();
            document.removeEventListener('click', closePopup);
        }
    };

    // Small delay to prevent immediate closure
    setTimeout(() => {
        document.addEventListener('click', closePopup);
    }, 0);
}



// Modify the checkAndInsertIcon function to include the check
function checkAndInsertIcon() {
    if (window.location.href.includes('instagram.com/direct/')) {
        // Check if icon already exists
        const existingIcon = document.querySelector('img[alt="ERCAS Logo"]');
        if (!existingIcon) {
            setTimeout(() => {
                insertIcon();
            }, 2000);
        }
    }
}

// Initial check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndInsertIcon);
} else {
    checkAndInsertIcon();
}

// Modified observer to prevent multiple insertions
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        checkAndInsertIcon();
    }
}).observe(document, { subtree: true, childList: true });

// Remove the retry mechanism as it's no longer needed