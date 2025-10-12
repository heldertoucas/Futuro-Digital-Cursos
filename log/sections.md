# Website Section Catalog

This document provides a technical reference for all the modular UI sections created for the Futuro Digital website. Use these names to request the assembly of new pages.

---

## Global Components

These components appear on most or all pages.

### `header`
- **Description:** The main site navigation bar. It is sticky at the top of the page.
- **Content:** Contains the site logo, a list of navigation links, and a primary "Inscrever-me" call-to-action button.
- **Features:** Fully responsive, collapsing into a "burger menu" on tablet and mobile devices.

### `footer`
- **Description:** The main site footer.
- **Content:** A multi-column layout containing the logo, an "About" paragraph, lists of navigation and course links, and contact information. Includes a bottom bar with the copyright notice.

### `preview-nav-bar`
- **Description:** A special navigation bar for the development environment only.
- **Content:** A thin bar fixed to the bottom of the screen with links to all existing HTML pages.
- **Features:** Only visible when the site is not running on the production domain (`github.io`). Uses JavaScript to load page content dynamically, avoiding the AI Studio preview's navigation limitations.

---

## Homepage Sections (`index.html`)

### `hero`
- **Description:** The main introduction section at the top of the homepage.
- **Content:** A two-column layout with a large headline (H1), descriptive paragraph, and a call-to-action button on the left, opposite a large illustrative image on the right.

### `course-grid`
- **Description:** A section to display the available courses.
- **Content:** Features a centered section header (H2, paragraph) followed by a 2x2 responsive grid. Each item in the grid is a horizontal `course-card` with an image, a tag (e.g., duration), a title, a short description, and a "Saber mais" button.

### `about-program`
- **Description:** A two-column informational section.
- **Content:** A large image on the left with a headline (H2), descriptive text, and a call-to-action button on the right.

### `testimonial-slider`
- **Description:** A section to display user feedback dynamically.
- **Content:** A centered section header followed by an auto-playing slider. Each slide contains a star rating, a review text, and the author's name. Includes dot navigation and a link to view more reviews on Google.

### `registration-cards`
- **Description:** A call-to-action section for user registration.
- **Content:** A centered section header followed by a two-column grid. Each card is aimed at a different audience (e.g., "Trabalhadores", "Cidadãos") and contains a title, description, and a specific registration button.

---

## Course Detail Page Sections (`wordloop.html`)

### `course-hero`
- **Description:** The main introduction for a specific course page.
- **Content:** A centered layout featuring a prominent course image on top, followed by the main course title (H1) and a descriptive paragraph.

### `session-intro`
- **Description:** A simple header to introduce a specific session or module.
- **Content:** A centered H2 title preceded by a colored, rounded "pill" element that displays the session number (e.g., "Sessão 1").

### `content-slide`
- **Description:** A flexible two-column section for presenting detailed content.
- **Content:** Consists of a text block (with headings, paragraphs, lists) on one side and a large image on the other.
- **Variations:** Supports a reversed layout (using the `alt-layout` class) to alternate the position of the image and text.

### `feature-columns`
- **Description:** A section designed to highlight key features or concepts side-by-side.
- **Content:** A centered section header followed by a two-column grid. Each column contains an SVG icon, a feature title (H4), and a descriptive paragraph.

### `accordion`
- **Description:** An interactive section to display detailed information in a compact way.
- **Content:** A centered section header followed by a series of vertically stacked accordion items. Each item has a clickable header that reveals or hides its content panel.

### `final-cta`
- **Description:** A strong, concluding call-to-action section.
- **Content:** A full-width section with a dark background, a compelling headline (H2), a short paragraph, and a prominent call-to-action button.
