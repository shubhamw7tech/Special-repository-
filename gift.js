document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Gift Box JS ---
    const box = document.getElementById('box');
    const popup = document.getElementById('popup');
    const closeGiftBtn = document.getElementById('closeBtn');

    // Open the box on click
    box.addEventListener('click', () => {
        box.classList.add('open');
        // Delay the popup slightly so the lid opens first
        setTimeout(() => {
            popup.classList.add('show');
        }, 300);
    });

    // Close the popup and reset the box
    closeGiftBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        // Delay closing the lid until the popup shrinks away
        setTimeout(() => {
            box.classList.remove('open');
        }, 300);
    });


    // --- 2. Badge Button JS ---
    const claimButton = document.getElementById("badge");
    const modal = document.getElementById("badge-modal");
    const badgeCloseButton = document.getElementById("close-modal");

    // Open popup after a short delay
    claimButton.addEventListener("click", () => {
        setTimeout(() => {
            modal.classList.add("show");
        }, 400);
    });

    // Close popup via button
    badgeCloseButton.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close popup by clicking on the dark background
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });


    // --- 3. Tasty Popup JS ---
    const ricePlateDiv = document.querySelector('.rice_plate');
    const popupOverlay = document.getElementById('popupOverlay');
    const closeTastyBtn = document.getElementById('closePopupBtn'); // Renamed variable

    // Open the popup when the div is clicked
    ricePlateDiv.addEventListener('click', () => {
        popupOverlay.style.display = 'flex';
    });

    // Close the popup when the "tasty 😋" button is clicked
    closeTastyBtn.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });

    // Close the popup if the user clicks anywhere outside the white box
    window.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});








// 1. Grab the unique elements from the DOM
    const gbxTrigger = document.getElementById('gbx-surprise-trigger');
    const gbxOverlay = document.getElementById('gbx-hidden-reveal');
    const gbxDismiss = document.getElementById('gbx-hide-trigger');

    // 2. Open popup when gift box is clicked
    gbxTrigger.addEventListener('click', () => {
      // Use flex to keep it centered when shown
      gbxOverlay.style.display = 'flex'; 
    });

    // 3. Close popup when 'X' is clicked
    gbxDismiss.addEventListener('click', () => {
      gbxOverlay.style.display = 'none';
    });

    // 4. Close popup if user clicks anywhere outside the white box
    window.addEventListener('click', (event) => {
      if (event.target === gbxOverlay) {
        gbxOverlay.style.display = 'none';
      }
    });