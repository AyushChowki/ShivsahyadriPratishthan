document.addEventListener("DOMContentLoaded", () => {
  // Select DOM Elements
  const hamburgerTrigger = document.querySelector(".hamburger");
  const closeTrigger = document.querySelector(".close");
  const mobileSidebar = document.querySelector("aside");
  const bodyElement = document.body;

  /**
   * Helper function to open the sidebar menu cleanly
   */
  const openMenu = () => {
    mobileSidebar.classList.add("open");
    bodyElement.classList.add("hidden"); // Prevents underlying page scroll
  };

  /**
   * Helper function to close the sidebar menu cleanly
   */
  const closeMenu = () => {
    mobileSidebar.classList.remove("open");
    bodyElement.classList.remove("hidden"); // Restores standard document scroll
  };

  // Event Listeners for UI triggers
  if (hamburgerTrigger) {
    hamburgerTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      openMenu();
    });
  }

  if (closeTrigger) {
    closeTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Premium UX: Close sidebar automatically when clicking anywhere outside of it
  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = mobileSidebar.contains(event.target);
    const isClickOnHamburger = hamburgerTrigger.contains(event.target);

    if (mobileSidebar.classList.contains("open") && !isClickInsideSidebar && !isClickOnHamburger) {
      closeMenu();
    }
  });

  // Premium UX: Safely close menu if the user hits the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileSidebar.classList.contains("open")) {
      closeMenu();
    }
  });
});