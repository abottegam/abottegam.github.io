document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather Icons
  feather.replace()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Typewriter effect
  const typewriterElement = document.getElementById("typewriter")
  const fullText = "Adriana R. Bottega"
  let displayText = ""
  let index = 0

  function typeWriter() {
    if (index < fullText.length) {
      displayText += fullText.charAt(index)
      typewriterElement.textContent = displayText
      index++
      setTimeout(typeWriter, 150)
    }
  }

  typeWriter()

  // Cursor blinking
  const cursor = document.querySelector(".cursor")
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0"
  }, 500)

  // Mobile navigation toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileNav = document.querySelector(".mobile-nav")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active")

    // Toggle between menu and X icon
    const icon = menuToggle.querySelector("svg")
    if (icon.getAttribute("data-feather") === "menu") {
      icon.setAttribute("data-feather", "x")
    } else {
      icon.setAttribute("data-feather", "menu")
    }
    feather.replace()
  })

  // Close mobile nav when clicking a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      const icon = menuToggle.querySelector("svg")
      icon.setAttribute("data-feather", "menu")
      feather.replace()
    })
  })

  // Skills tabs
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      // Remove active class from all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked trigger and corresponding content
      trigger.classList.add("active")
      const tabId = trigger.getAttribute("data-tab")
      document.getElementById(`${tabId}-content`).classList.add("active")
    })
  })

  // Project details toggle
  const projectButtons = document.querySelectorAll(".project-btn")

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.getAttribute("data-project")
      const buttonText = button.textContent

      if (buttonText === "View Details") {
        button.textContent = "Hide Details"
      } else {
        button.textContent = "View Details"
      }

      // In a real implementation, you would show/hide additional project details here
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // In a real implementation, you would send this data to a server
    console.log("Form submitted:", { name, email, message })

    // Reset form
    contactForm.reset()

    // Show success message
    alert("Thank you for your message! I'll get back to you soon.")
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
})

// Declare feather variable to avoid errors
const feather = require("feather-icons")

