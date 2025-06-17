# BetterLC - Unlock LeetCode Company Tags

**BetterLC** is a Chrome extension designed to enhance your experience on [LeetCode](https://leetcode.com) by unlocking and displaying company tags for coding problems, even if they're not natively visible. This helps users prepare more effectively for technical interviews by targeting problems asked by specific companies.

---

## 🚀 Production Extension on Chrome Web Store

You can install the latest production version of BetterLC directly from the Chrome Web Store:

[![Available in the Chrome Web Store](https://img.shields.io/chrome-web-store/v/debbebdlpbnpnnicofdpociejpmokdnm?label=Chrome%20Web%20Store&logo=google-chrome)](https://chromewebstore.google.com/detail/debbebdlpbnpnnicofdpociejpmokdnm?utm_source=item-share-cb)

[BetterLC - Unlock Leetcode company tags (Chrome Web Store)](https://chromewebstore.google.com/detail/debbebdlpbnpnnicofdpociejpmokdnm?utm_source=item-share-cb)

---

## Features

- **Unlock Company Tags:** Displays company tags for LeetCode problems directly on the problem page.
- **Floating Button UI:** A draggable, stylish floating button appears on LeetCode problem pages. Hovering over it reveals the associated company tags.
- **Popup Menu:** The extension popup provides quick links to support the developer, contribute to the project, or learn more about the author.
- **Minimal & Modern Design:** Uses a clean, modern UI with custom fonts and smooth transitions.
- **No User Data Collection:** The extension works entirely client-side and does not collect or transmit any user data.

---

## How It Works

- When you visit a LeetCode problem page, the extension injects a floating button.
- On hover, the button displays a tooltip listing all companies that have asked the current problem (based on a local dataset).
- The company tag data is sourced from a bundled `data.json` file, which maps LeetCode problem URLs to their respective company tags.

---

## File Structure

```
BetterLC/
│
├── manifest.json                # Chrome extension manifest (v3)
├── popup.html                   # HTML for the extension's popup window
├── popup.js                     # JS logic for popup actions (external links)
├── styles.css                   # Styles for the popup window
│
├── scripts/
│   ├── index.js                 # Main content script injected into LeetCode pages
│   └── index.css                # Styles for the floating button and tooltip
│
├── resources/
│   ├── data.json                # Large dataset mapping problems to company tags
│   └── icon.png                 # Extension icon (used in UI and manifest)
│
└── Production/                  # (Optional) Production build or deployment files
    ├── ...                      # (Mirrors main structure for production)
```

---

## Key Files Explained

- **manifest.json:** Declares extension metadata, permissions, content scripts, icons, and security policies.
- **popup.html / popup.js:** The extension popup with three buttons:
  - *Buy me a Coffee*: Support the developer.
  - *Contribute*: Link to the GitHub repository.
  - *About me*: Link to the developer's personal site.
- **scripts/index.js:** Injects a floating button into LeetCode problem pages, fetches company tags from `data.json`, and displays them in a tooltip.
- **resources/data.json:** Contains mappings of LeetCode problem URLs to their company tags (e.g., Google, Amazon, Facebook, etc.).
- **resources/icon.png:** The extension's icon, used in the browser toolbar and UI.

---

## Installation

### Option 1: Install from Chrome Web Store

[Install BetterLC from the Chrome Web Store](https://chromewebstore.google.com/detail/debbebdlpbnpnnicofdpociejpmokdnm?utm_source=item-share-cb)

### Option 2: Manual Installation (Development)

1. **Clone or Download the Repository:**
   ```sh
   git clone https://github.com/kaash04/BetterLC.git
   ```

2. **Load the Extension in Chrome:**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the `BetterLC` directory

3. **Usage:**
   - Visit any LeetCode problem page (e.g., `https://leetcode.com/problems/...`)
   - Look for the floating button on the right side of the page
   - Hover to see company tags for the current problem

---

## Development

- **Modify UI/UX:** Edit `scripts/index.css` and `styles.css` for styling changes.
- **Update Company Data:** Add or update entries in `resources/data.json`.
- **Popup Logic:** Update `popup.js` for popup button actions.

---

## Permissions

- **Host Permissions:** Only requests access to `https://leetcode.com/problems/*`
- **Web Accessible Resources:** Only the icon and data file are exposed to content scripts.

---

## Contributing

Contributions are welcome! Please open issues or pull requests on the [GitHub repository](https://github.com/kaash04/BetterLC).