\# N1cePrivacy



\*\*A lightweight browser extension designed to prevent websites from detecting when you switch tabs or lose window focus.\*\*



N1cePrivacy automatically injects JavaScript into supported websites to override certain browser visibility signals.



\## Features



\- Prevents websites from reading the actual `document.hidden` value.

\- Overrides `document.visibilityState` to return `"visible"`.

\- Overrides `document.hasFocus()` to return `true`.

\- Attempts to block certain visibility and focus event listeners.

\- Automatically runs on supported websites.

\- Lightweight and simple.

\- No accounts or registration required.



\## Browser Compatibility



\*\*IMPORTANT: ONLY WORKS WITH CHROMIUM-BASED BROWSERS.\*\*



| Browser | Compatibility |

|---|---|

| Google Chrome | Y Supported |

| Opera GX | Y Supported |

| Opera | Y Supported |

| Microsoft Edge | Y Chromium-compatible |

| Brave | Y Chromium-compatible |

| Vivaldi | Y Chromium-compatible |

| Mozilla Firefox | N Not supported |

| Safari | N  Not supported |



\*Compatibility with Chromium-based browsers does not guarantee identical behavior on every website.\*



\## Installation



\### Step 1 - Download



1\. Download the project from GitHub using \*\*Code → Download ZIP\*\*, or download a release archive.

2\. Extract the ZIP file to a folder on your computer.



\### Step 2 - Google Chrome



1\. Open Google Chrome.

2\. Navigate to `chrome://extensions/`.

3\. Enable \*\*Developer mode\*\*.

4\. Click \*\*Load unpacked\*\*.

5\. Select the extracted project folder containing `manifest.json`.

6\. Make sure \*\*N1cePrivacy\*\* is enabled.



\### Step 3 - Opera GX



1\. Open Opera GX.

2\. Navigate to `opera://extensions/`.

3\. Enable \*\*Developer mode\*\*.

4\. Click \*\*Load unpacked\*\*.

5\. Select the extracted project folder containing `manifest.json`.

6\. Make sure \*\*N1cePrivacy\*\* is enabled.



\### Step 4 - Done!



The extension will automatically run on supported websites.



Refresh any already-open tabs to apply the extension.



\## 🔍 How It Works



N1cePrivacy modifies certain JavaScript properties and attempts to intercept browser events commonly used to detect tab switching.



The extension makes the following properties return fixed values:



```javascript

document.hidden          // false

document.visibilityState // "visible"

document.hasFocus()      // true

```



It also attempts to stop propagation of selected visibility and focus events.



\## Limitations



\- Some websites may still detect tab switching through other techniques.

\- The extension does not prevent all forms of tracking.

\- Certain websites may experience functionality issues.

\- Chromium restricts extensions from running on some internal browser pages.

\- Browser-level tab throttling and background execution restrictions are not disabled.



\## Privacy



N1cePrivacy is designed to run locally in your browser.



The provided implementation does not include analytics, user accounts, or data collection.



\## License



A license has not yet been specified. Add a `LICENSE` file if you want to define how others may use, modify, and distribute this project.



\---



\*\*N1cePrivacy 

