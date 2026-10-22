| Tool Name | Provider | Short Description | Ref Links (Checklist Items Covered) | Industry Ranking | Platform | NPM/CI/CD Ready | Highlighted Advantages | Highlighted Disadvantages | Difficulty Rating |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **axe-core** | [Deque Systems](https://www.deque.com/axe/) | The engine behind most modern a11y tools; highly customizable. | [^a11y-1]...[^a11y-20] | Gold Standard | Linux/macOS/Web | Yes (`axe-core` npm) | Extensive rule set, headless support, active maintenance. | Requires setup for custom reporting; verbose output. | Medium |
| **Pa11y** | [Pa11y Team](https://pa11y.org/) | CLI tool running axe-core for automated CI/CD accessibility checks. | [^a11y-1]...[^a11y-20] | High (CI/CD) | Linux/macOS | Yes (`pa11y` npm) | Easy CI integration, JSON/HTML reports, supports multiple URLs. | Limited to automated rules (misses semantic logic). | Low |
| **WAVE (CLI/API)** | [WebAIM](https://wave.webaim.org/) | Visual and programmatic evaluation of web content. | [^a11y-1]...[^a11y-20] | High (Visual) | Linux/macOS/Web | Yes (API/Wrapper) | Excellent visual overlay for debugging; strong documentation. | API rate limits on free tier; less flexible than axe-core. | Medium |
| **ARC Toolkit** | [TPGi](https://arc.tpgi.com/) | Advanced ARIA and complex component testing. | [^a11y-1]...[^a11y-20] | Specialized | Linux/macOS/Web | No (Browser Ext) | Best-in-class for complex ARIA patterns and live regions. | Primarily browser-based; harder to automate in pure CI. | Medium |
| **Lighthouse (OSS)** | [Community Fork](https://github.com/GoogleChrome/lighthouse) | Accessibility audit engine (avoid official Google version). | [^a11y-1]...[^a11y-20] | Moderate | Linux/macOS | Yes (`lighthouse` npm) | Familiar interface, good performance metrics alongside a11y. | Must use open-source fork to avoid Google telemetry. | Low |

| Checklist Item Name | WCAG Standard | Short Description | Ref Links (Tools to Fix) | Priority | Highlighted Steps | Difficulty Rating |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Missing Alt Text** | [WCAG 1.1.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) | Images lack text alternatives for screen readers. | [^a11y-1-tools] | Critical | [Alt Text Guide](https://www.w3.org/WAI/tutorials/images/) | Low |
| **2. Keyboard Traps** | [WCAG 2.1.2](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html) | Focus gets stuck in a component, blocking navigation. | [^a11y-2-tools] | Critical | [Keyboard Trap Fix](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42) | Medium |
| **3. Low Color Contrast** | [WCAG 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) | Text/background contrast ratio too low (<4.5:1). | [^a11y-3-tools] | High | [Contrast Checker](https://webaim.org/resources/contrastchecker/) | Low |
| **4. Missing Form Labels** | [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | Inputs lack associated `<label>` elements. | [^a11y-4-tools] | Critical | [Form Labels Guide](https://dequeuniversity.com/rules/axe/4.4/label) | Low |
| **5. Heading Order** | [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | Headings skip levels (e.g., h1 to h3). | [^a11y-5-tools] | High | [Heading Order Guide](https://dequeuniversity.com/rules/axe/4.4/heading-order) | Low |
| **6. Missing Focus Indicator** | [WCAG 2.4.7](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) | No visible outline for focused elements. | [^a11y-6-tools] | High | [Focus Styles Guide](https://www.w3.org/WAI/tutorials/keyboard/focus/) | Low |
| **7. Missing Language** | [WCAG 3.1.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html) | Page or content language not declared. | [^a11y-7-tools] | Medium | [Language Attribute Guide](https://www.w3.org/International/questions/qa-html-language-declarations.en) | Low |
| **8. Invalid ARIA** | [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | ARIA roles/states used incorrectly or missing. | [^a11y-8-tools] | High | [ARIA APG](https://www.w3.org/WAI/ARIA/apg/) | High |
| **9. Missing Error Identification** | [WCAG 3.3.1](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html) | Errors not described in text. | [^a11y-9-tools] | High | [Error Identification Guide](https://dequeuniversity.com/rules/axe/4.4/empty-form) | Medium |
| **10. Missing Error Suggestion** | [WCAG 3.3.3](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html) | No suggestion provided for correcting errors. | [^a11y-10-tools] | Medium | [Error Suggestion Guide](https://www.w3.org/WAI/WCAG21/Techniques/guidelines/G173) | Medium |
| **11. Missing Link Purpose** | [WCAG 2.4.4](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html) | Link text is vague (e.g., "click here"). | [^a11y-11-tools] | High | [Link Purpose Guide](https://www.w3.org/WAI/tutorials/page/links/) | Low |
| **12. Missing Table Headers** | [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | Data tables lack `<th>` or scope attributes. | [^a11y-12-tools] | Medium | [Table Headers Guide](https://dequeuniversity.com/rules/axe/4.4/table-header) | Medium |
| **13. Missing Audio Captions** | [WCAG 1.2.2](https://www.w3.org/WAI/WCAG21/Understanding/captions.html) | Pre-recorded audio lacks captions. | [^a11y-13-tools] | Critical | [Captions Guide](https://www.w3.org/WAI/tutorials/video/captions/) | Medium |
| **14. Missing Video Transcripts** | [WCAG 1.2.1](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html) | Video lacks transcripts for deaf-blind users. | [^a11y-14-tools] | High | [Transcripts Guide](https://www.w3.org/WAI/tutorials/video/transcripts/) | Medium |
| **15. Missing Audio Descriptions** | [WCAG 1.2.5](https://www.w3.org/WAI/WCAG21/Understanding/audio-description.html) | Video lacks descriptions for blind users. | [^a11y-15-tools] | Medium | [Audio Description Guide](https://www.w3.org/WAI/tutorials/video/audio-description/) | High |
| **16. Missing Button Names** | [WCAG 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | Buttons lack accessible names. | [^a11y-16-tools] | Critical | [Button Names Guide](https://dequeuniversity.com/rules/axe/4.4/button-name) | Low |
| **17. Missing Image Map Alt** | [WCAG 1.1.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html) | Image maps lack text alternatives. | [^a11y-17-tools] | Medium | [Image Map Guide](https://www.w3.org/WAI/tutorials/images/image-maps/) | Medium |
| **18. Missing Frame Titles** | [WCAG 2.4.1](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) | Frames/iframes lack titles. | [^a11y-18-tools] | Medium | [Frame Titles Guide](https://dequeuniversity.com/rules/axe/4.4/frame-title) | Low |
| **19. Missing Skip Links** | [WCAG 2.4.1](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) | No mechanism to skip repeated content. | [^a11y-19-tools] | Medium | [Skip Links Guide](https://www.w3.org/WAI/tutorials/page/skip-nav/) | Low |
| **20. Responsive Zoom** | [WCAG 1.4.4](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) | Content breaks or scrolls horizontally at 200%. | [^a11y-20-tools] | Medium | [Resize Text Guide](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) | Medium |

### Reference Key: Accessibility
[^a11y-1]: [W3C Alt Text Guide](https://www.w3.org/WAI/tutorials/images/)
[^a11y-2]: [W3C Keyboard Trap Fix](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42)
[^a11y-3]: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
[^a11y-4]: [Deque Form Labels](https://dequeuniversity.com/rules/axe/4.4/label)
[^a11y-5]: [Deque Heading Order](https://dequeuniversity.com/rules/axe/4.4/heading-order)
[^a11y-6]: [W3C Focus Styles](https://www.w3.org/WAI/tutorials/keyboard/focus/)
[^a11y-7]: [W3C Language Attributes](https://www.w3.org/International/questions/qa-html-language-declarations.en)
[^a11y-8]: [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/)
[^a11y-9]: [Deque Error Messages](https://dequeuniversity.com/rules/axe/4.4/empty-form)
[^a11y-10]: [W3C Error Suggestion](https://www.w3.org/WAI/WCAG21/Techniques/guidelines/G173)
[^a11y-11]: [W3C Link Purpose](https://www.w3.org/WAI/tutorials/page/links/)
[^a11y-12]: [Deque Table Headers](https://dequeuniversity.com/rules/axe/4.4/table-header)
[^a11y-13]: [W3C Captions](https://www.w3.org/WAI/tutorials/video/captions/)
[^a11y-14]: [W3C Transcripts](https://www.w3.org/WAI/tutorials/video/transcripts/)
[^a11y-15]: [W3C Audio Description](https://www.w3.org/WAI/tutorials/video/audio-description/)
[^a11y-16]: [Deque Button Names](https://dequeuniversity.com/rules/axe/4.4/button-name)
[^a11y-17]: [W3C Image Maps](https://www.w3.org/WAI/tutorials/images/image-maps/)
[^a11y-18]: [Deque Frame Titles](https://dequeuniversity.com/rules/axe/4.4/frame-title)
[^a11y-19]: [W3C Skip Links](https://www.w3.org/WAI/tutorials/page/skip-nav/)
[^a11y-20]: [W3C Resize Text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)

[^a11y-1-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/), [WAVE](https://wave.webaim.org/)
[^a11y-2-tools]: [axe-core](https://www.deque.com/axe/), [ARC Toolkit](https://arc.tpgi.com/)
[^a11y-3-tools]: [axe-core](https://www.deque.com/axe/), [WAVE](https://wave.webaim.org/)
[^a11y-4-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-5-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-6-tools]: [axe-core](https://www.deque.com/axe/), [ARC Toolkit](https://arc.tpgi.com/)
[^a11y-7-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-8-tools]: [axe-core](https://www.deque.com/axe/), [ARC Toolkit](https://arc.tpgi.com/)
[^a11y-9-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-10-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-11-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-12-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-13-tools]: [axe-core](https://www.deque.com/axe/), [WAVE](https://wave.webaim.org/)
[^a11y-14-tools]: [axe-core](https://www.deque.com/axe/), [WAVE](https://wave.webaim.org/)
[^a11y-15-tools]: [axe-core](https://www.deque.com/axe/), [WAVE](https://wave.webaim.org/)
[^a11y-16-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-17-tools]: [axe-core](https://www.deque.com/axe/), [WAVE](https://wave.webaim.org/)
[^a11y-18-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-19-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)
[^a11y-20-tools]: [axe-core](https://www.deque.com/axe/), [Pa11y](https://pa11y.org/)