export const ROADMAP_TITLE = "Front-End Development (Security By Design)";

export const frontEndRoadmap = [
  {
    phase: 1,
    title: "Introduction HTML",
    target: "Build a simple personal Portfolio page using HTML fundamentals.",
    tools: "",
    project: "Portfolio",
    details: `Project: Portfolio
Details:
- **Page Structure:** Create organized code containing the <head> section, with the page title set to your name (e.g., *Islam Ghazi's Portfolio*).
- **Introduction:** Use appropriate tags and paragraphs to include:
    - A main heading (<h1>) displaying your name.
    - A subheading (<h3>) stating your specialization or what you are currently learning (e.g., *Front-End Developer*).
    - A paragraph (<p>) providing a brief overview of your passion and goals.
- **Personal Touch:** Add your personal photo to the page using the <img> tag; ensure the file path is correct and configure the alt attribute for accessibility and SEO purposes.`,
    steps: [
      {
        id: "p1_s1_1",
        number: "1.1",
        title: "Create your first digital profile and appear on the platform",
        duration: "3 Days",
        target:
          "Build a simple personal Portfolio page using HTML fundamentals.",
        description:
          "Create your first digital profile and appear on the platform",
        assignment:
          "Watch all resources, complete the task for step 1.1, and apply it to your Portfolio.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/dVgTBEYCseU?si=faSElNXMtDfkBQvh",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/sBFemL2Mfj4?si=tX_f_5TLuiLEHa51",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/XxkX8wnRq3s?si=99mQIHmbR-mxFKsR",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/S58smWj5Yn0?si=vAHOKHPIuHdV4Uwf",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/Fpibp-291xQ?si=QqWzvhL8FaZXWHyw",
          },
        ],
        notes:
          "The Way To how Write a comment In Html is : <--! This is a Comment --> ",
      },
      {
        id: "p1_s1_2",
        number: "1.2",
        title: "Writing headings and paragraphs for your page",
        duration: "3 Days",
        target:
          "Build a simple personal Portfolio page using HTML fundamentals.",
        description: "Writing headings and paragraphs for your page",
        assignment: "Complete step 1.2.",
        resources: [
          {
            name: "Headings Tutorial 1",
            link: "https://youtu.be/XxkX8wnRq3s?si=99mQIHmbR-mxFKsR",
          },
          {
            name: "Headings Tutorial 2",
            link: "https://youtu.be/S58smWj5Yn0?si=vAHOKHPIuHdV4Uwf",
          },
          {
            name: "Headings Tutorial 3",
            link: "https://youtu.be/Fpibp-291xQ?si=QqWzvhL8FaZXWHyw",
          },
        ],
        notes: `1 - Html : Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.`,
        notes2: `2 - It defines the content and structure of web content autocomplete="off": Apply this attribute to sensitive input fields—such as those for passwords or payment details—to prevent the browser from saving them. This ensures that if someone else uses the same device, they cannot view the previous user's data.`,
      },

      {
        id: "p1_s1_3",
        number: "1.3",
        title: "Formatting text and adding your own personal touch ✨",
        duration: "3 Days",
        target:
          "Build a simple personal Portfolio page using HTML fundamentals.",
        description: "Formatting text and adding your own personal touch ✨",
        assignment:
          "Watch all resources, complete the task for step 1.3, and apply it to your Portfolio.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/nCpNsMgyzh4?si=SCaVkzzhOl6vu3JO",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/zhwqvfoi50Q?si=mMQ5AEDjBVXwbjVY",
          },
        ],
        notes: `name: This is the most important attribute for any input; without it, the data won't even reach the server.`,
        notes2: `required: This attribute specifies that an input field must be filled out before submitting the form.`,
      },
      {
        id: "p1_s1_4",
        number: "1.4",
        title: "s Adding your profile picture and managing paths 🖼",
        duration: "3 Days",
        target:
          "Build a simple personal Portfolio page using HTML fundamentals.",
        description: "s Adding your profile picture and managing paths 🖼",
        assignment:
          "Watch all resources, complete the task for step 1.4, and apply it to your Portfolio.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/FmIUk3bWGmU?si=KCSrl7oI6alDWfjP",
          },
        ],
        notes: `Using the correct input type is a security best practice: ensure the password field is set to \`type="password"\` rather than \`text\` so that the characters appear as dots, preventing others from seeing them as they are typed (protecting against \\"shoulder surfing").`,
        notes2: `A security tip regarding links (\`target="_blank"\`): When having a student add a link that opens in a new tab, you must teach them to always include the attribute \`rel="noopener noreferrer\\"\`. Why? Because without it, the site being opened could compromise the student's page or steal its data (a vulnerability known as "Reverse Tabnabbing").`,
      },
    ],
  },
  {
    phase: 2,
    title: "HTML Semantic & Forms",
    target:
      "Upgrade Portfolio with Navigation, Sections, and Contact Form using Semantic HTML.",
    tools: "",
    project: "Portfolio",
    details: ``,
    steps: [
      {
        id: "p2_s2_1",
        number: "2.1",
        title: "Linking pages and creating smart menus 🔗",
        duration: "3 Days",
        target:
          "Upgrade Portfolio with Navigation, Sections, and Contact Form using Semantic HTML.",
        description: "Linking pages and creating smart menus 🔗",
        assignment:
          "Search About : ( Text - Decoration And Transform , Text - Overflow And Use Cases )",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/7TQhxAOjd1w?si=iVCevbeSdDs4wvPz",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/8Z7zR\u0000UGjcQ?si=FiktbTsX5NoJixrc",
          },
        ],
        notes: `There is a property called outline that is exactly like border, but it has two magical features:
1. It is drawn completely **outside** the box's boundaries.
2. It takes up no space on the page; meaning, if you use it, it will never shift other elements or mess up your layout.`,
        notes2: `> 👥 Quick Note: Multiple Selectors (Saving Code)
Instead of writing the same color or font style for each element individually and repeating the code, you can call up multiple elements together on the same line and separate them with a comma (,).

>
> - Code Example: Instead of repeating the same code for headings and paragraphs:
h1, h2, p {
color: #333;
font-family: sans-serif;
}`,
      },
      {
        id: "p2_s2_2",
        number: "2.2",
        title: "Building containers and setting up contact forms 📦",
        duration: "3 Days",
        target:
          "Upgrade Portfolio with Navigation, Sections, and Contact Form using Semantic HTML.",
        description: "Building containers and setting up contact forms 📦",
        assignment:
          "Search About : ( Inheritance , Dimensions - Width And Height , Overflow - Overflow-X And Overflow-Y)",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/IGeh2mlM9Rg?si=GY7ZXimxicPvj8gR",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/inC9gWjNMJI?si=ia4DOnHiCAuGtnj2",
          },
        ],
        notes: `Quick Note: Hiding Elements (Visibility vs. Display)
If you want to hide an element on a page, you have two methods, and the difference between them is significant:

1. display: none ; This hides the element and removes it completely from its location, as if it doesn't exist in the HTML, and the elements below it appear in its place.
2. visibility: hidden; This hides the element but leaves its location empty (reserved). It's like a ghost element, present and affecting the space, but not visible.`,
        notes2: `⚠️ Dangerous note: !important feature (forcing the browser)
If you have an item and it takes such and such a style from such and such place, and you do not have the code and it does not want to apply the color or size that you write, you go next to the property value and write !important.
This means: “Hey browser, whatever is written elsewhere, follow this line and good luck!”`,
      },
      {
        id: "p2_s2_3",
        number: "2.3",
        title: "Structuring the site using professional semantic divisions",
        duration: "3 Days",
        target:
          "Upgrade Portfolio with Navigation, Sections, and Contact Form using Semantic HTML.",
        description:
          "Structuring the site using professional semantic divisions",
        assignment:
          "Search About : ( Table Styling  , CSS Variables And Trainings , Gradients ,  Transform 3D)",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/xlQwlfvrDuI?si=sfhZlcHOJuMHzEV4",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/uj5lC\u0000GQPEw?si=sNsWnoicfJCmpyCV",
          },
        ],
        notes: `🎯 CSS Selectors in 4 Lines:

1. element: This directly calls the tag name (like p or h1). This applies the style to all the tags on the page.

2. .class: This is written before the class name (like .btn). This is used for any element you want to style, and you can repeat it as often as you like. (Most commonly used).

3. #id: This is written before the name (like #header). This is very special and is written for only one element on the page; it doesn't repeat.

4. (Universal): This asterisk means "all elements on the page without exception," and we often use it at the beginning of the code to reset the spacing.`,
      },
    ],
  },
  {
    phase: 3,
    title: "CSS Fundamentals",
    target:
      "Style your Portfolio with CSS — selectors, box model, and typography.",
    tools: "",
    project: "Portfolio (Phase 3 Upgrade)",
    details: "",
    steps: [
      {
        id: "p3_s3_1",
        number: "3.1",
        title: "Styling Elements & Rules of naming id or class",
        duration: "3 Days",
        target:
          "Style your Portfolio with CSS — selectors, box model, and typography.",
        description: "Styling Elements & Rules of naming id or class",
        assignment:
          "Search About : ( Text - Overflow And Use Cases , Inheritance )",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/66sjwQ-hB64?si=ppFUEkFsZ6T6Azf7",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/xkNpIsbxMuo?si=6_Vy28KUnrijD2Iq",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/-srybsn3YDM?si=arBDA\u00001VVq_AFvYy",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/8sooTBY5C4w?si=7JEWvfDsT97Uqko-",
          },
        ],
        notes: `Quick Tip (Micro-Tip):
There is a property called outline that is very similar to border, but it has two magical features:

1. It is drawn outside the element's box boundaries.
2. It takes up no space on the page; using it won't shift other elements or break your layout.
- Quick example: We often use it to indicate focus when a user interacts with an input field..`,
      },
      {
        id: "p3_s3_2",
        number: "3.2",
        title: "Padding,Margin & Border",
        duration: "3 Days",
        target:
          "Style your Portfolio with CSS — selectors, box model, and typography.",
        description: "Padding,Margin & Border",
        assignment:
          "Watch all resources, complete the task for step 3.2, and apply it to your Portfolio (Phase 3 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/-wdlA-wFv9A?si=vf6w4ed7yBdAEu_R",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/LEJkJ0AiKDw?si=hqPDkdAEWIxGDgGe",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/XE7d1OoljyI?si=PPJrX7Vth3nXLciL",
          },
        ],
        notes: `Secret Code: The Skill of the Top 1% of Pros (Smart Searching)
 
- Listen up, champ: a skilled programmer isn't someone who has memorized every single tag and line of code. A true coding wizard is someone who knows how to search effectively and find the information they need in seconds!
 
- This course won't spoon-feed you everything; doing so would actually hold you back and leave you constantly dependent on others for guidance. So, whenever you see me write "(search for it)" next to a specific element, consider it a challenge for the pros!
 
The Secret Search Formula:
 
 1. Open Google and type the tag name followed by "MDN" or "W3Schools" (these are our go-to references).
 2. If you want answers from real engineers, type your problem followed by "Stack Overflow."
 3. Try the code yourself and make mistakes. A mistake you fix yourself through research is one you’ll never forget!
 
- Also, you don't need to be fluent in English to get started. Don't wait for the perfect conditions to begin learning.`,
      },
      {
        id: "p3_s3_3",
        number: "3.3",
        title: "Typography",
        duration: "3 Days",
        target:
          "Style your Portfolio with CSS — selectors, box model, and typography.",
        description: "Typography",
        assignment:
          "Watch all resources, complete the task for step 3.3, and apply it to your Portfolio (Phase 3 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/ftjKy7AAjVU?si=-FcXqqpQXCxHlsxR",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/LDGfu6O5mI8?si=HAAu5GyByxSXtLv1",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 3.3 before moving to the next step.",
      },
      {
        id: "p3_s3_4",
        number: "3.4",
        title: "Styling Elements 2",
        duration: "3 Days",
        target:
          "Style your Portfolio with CSS — selectors, box model, and typography.",
        description: "Styling Elements 2",
        assignment:
          "Watch all resources, complete the task for step 3.4, and apply it to your Portfolio (Phase 3 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/P3xdm7md7AE?si=FkV0rkVhoURo2Dch",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/IqCXELTTymo?si=XoEOuSyukCMKcf4F",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/Hphs2vBjmQs?si=Q8V371CXcKKjntFA",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 3.4 before moving to the next step.",
      },
    ],
  },
  {
    phase: 4,
    title: "CSS Layout & Effects",
    target: "Master CSS layout, positioning, flexbox, and visual effects.",
    tools: "",
    project: "Portfolio (Phase 4 Upgrade)",
    details: "",
    steps: [
      {
        id: "p4_s4_1",
        number: "4.1",
        title: "Display & Nesting",
        duration: "3 Days",
        target: "Master CSS layout, positioning, flexbox, and visual effects.",
        description: "Display & Nesting",
        assignment:
          "Watch all resources, complete the task for step 4.1, and apply it to your Portfolio (Phase 4 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/-qbGxua98To?si=pi0UgzMeTcjcyEP5",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/wo_S_Mfl3yg?si=7tU4gR4YXera3fth",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 4.1 before moving to the next step.",
      },
      {
        id: "p4_s4_2",
        number: "4.2",
        title: "Opacity & Position & ZIndex & List Styling",
        duration: "3 Days",
        target: "Master CSS layout, positioning, flexbox, and visual effects.",
        description: "Opacity & Position & ZIndex & List Styling",
        assignment:
          "Watch all resources, complete the task for step 4.2, and apply it to your Portfolio (Phase 4 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/\u00003Q7sjYxStM?si=QSkhxG9ffDcosYNU",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/-q5IyjKkKSc?si=yM6iE3MKLDDo6ogr",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/Parqs9bbRMY?si=Dx70jtZjwcYFrReP",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/8VH59jP5s1M?si=Ocgsdi41aREqZjsa",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 4.2 before moving to the next step.",
      },
      {
        id: "p4_s4_3",
        number: "4.3",
        title: "pseudo Elments & classes & Border Radius",
        duration: "3 Days",
        target: "Master CSS layout, positioning, flexbox, and visual effects.",
        description: "pseudo Elments & classes & Border Radius",
        assignment:
          "Watch all resources, complete the task for step 4.3, and apply it to your Portfolio (Phase 4 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/vEAPPfJfpk0?si=irJoHbfJ95EEc0A7",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/6bZCaDyimCI?si=iJ2C0B10YssoLP6Q",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/OIWZ4EXwlnA?si=p7EHI3TuCgjDuc1J",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/76-r7wWCdkM?si=SNdCw44Dkjk_dp2Y",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 4.3 before moving to the next step.",
      },
      {
        id: "p4_s4_4",
        number: "4.4",
        title: "Box Shadow & Transition & Flex box",
        duration: "3 Days",
        target: "Master CSS layout, positioning, flexbox, and visual effects.",
        description: "Box Shadow & Transition & Flex box",
        assignment:
          "Watch all resources, complete the task for step 4.4, and apply it to your Portfolio (Phase 4 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/QGdK5Lrqxcg?si=O3BWSnwEAnQxfzns",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/B9wYvMHLCVE?si=3U3HUO-lH6ZHlO9d",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/JkCLL1CzNZk?si=BWBR6rf4J81SGLJw",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/_ScoBsCdJ7U?si=Y3f-395wsVPk_Cml",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/Nn-tFHepLoo?si=ERPjYoeEwf0V3\u000037",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/F5a6wj3hfbg?si=TQrl_eVOy96FBE7u",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 4.4 before moving to the next step.",
      },
    ],
  },
  {
    phase: 5,
    title: "CSS Grid & Responsive",
    target: "Complete CSS with Grid, animations, and responsive design.",
    tools: "",
    project: "Portfolio (Phase 5 Upgrade)",
    details: `Project: Portfolio (Grand CSS Upgrade)
Details & Steps across this Phase:

1. Linking Identity and Text Formatting (Milestone 1):
- Start by linking an external CSS file and converting the IDs and classes from mere names to actual formatting (.nav-links, .section-title, .contact-input).

- Remove the underlines under the links (text-decoration: none) and adjust the font-weight and size of the headings (font-weight) for a smooth visual flow.

2. Structuring Spaces and the Box Model (Milestone 2):
- Use Margin to center the page content in the middle of the screen (margin: auto).

- Adjust the padding within the navbar and sections so the text "breathes" and doesn't feel stuck at the edges, and add a smooth border around cards and forms.

3. Modern Layout and Navbar Stability (Milestone 3):
- Use \`position: fixed\` or \`sticky\` to keep the navbar at the top of the page so it remains visible during scrolling, adjusting the z-index.

- Change the navbar and project cards to \`display: flex\` and use \`justify-content\` and \`align-items\` to intelligently distribute elements.

- Address the issue of text or images extending beyond the card boundaries using \`overflow-x\` and \`overflow-y\`.

4. Grid Structure and Artistic Touches (Milestone 4):
- Rebuild the entire Projects Gallery or Service Cards section using CSS Grid (\`grid-template-columns\`) and distribute the cards with professional spacing using \`gap\`.

- Use \`border-radius\` to create cards and profile pictures with attractive rounded corners, and use Gradients for the Hero section background. - Use pseudo-elements (like ::before and ::after) to create a visually appealing line effect under the main section headings.

5. Infuse the site with dynamism and full responsiveness (Milestone 5):
- Implement 2D Transforming (like \`translateY\` to smoothly raise the card during hovering) with transitions.

- Incorporate Keyframes Animation to create a welcome animation when the site loads (a fade-in or slide effect for the developer's name).

- Challenge the 3D Transform: Use search to create a cool interactive effect (a card that rotates 180 degrees on the Y-axis, displaying project details on the back: \transform: rotateY(180deg)\` with perspective).

- Secure the site with Media Queries to ensure that the Grid and Flex elements flip to a comfortable vertical orientation, perfectly suited for mobile and tablet screens. - Organize your project using Global Variables (CSS Variables) to define colors and fonts in the root directory, making it easier to modify the entire project from one place.`,
    steps: [
      {
        id: "p5_s5_1",
        number: "5.1",
        title: "Grid",
        duration: "3 Days",
        target: "Complete CSS with Grid, animations, and responsive design.",
        description: "Grid",
        assignment:
          "Watch all resources, complete the task for step 5.1, and apply it to your Portfolio (Phase 5 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/wYSAjaB3mL8?si=iTAVz41URmmzR4lS",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/gZ3XNPelC5Y?si=11c-zQjOEdLga_xA",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/IsXAEilbm64?si=g4Zhsceh28huzd7h",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/q6VtSllQHHo?si=RE\u0000SI__6XitwThtq",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/7RZr_1qvR2g?si=xmXaW2C_UCH_vUai",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/BJupwn_ii8g?si=S3f8Ypks9Glb9u6d",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 5.1 before moving to the next step.",
      },
      {
        id: "p5_s5_2",
        number: "5.2",
        title: "Transforming",
        duration: "3 Days",
        target: "Complete CSS with Grid, animations, and responsive design.",
        description: "Transforming",
        assignment:
          "Watch all resources, complete the task for step 5.2, and apply it to your Portfolio (Phase 5 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/9KQP22oVCMg?si=HeZEo70gZI2TSQwF",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/AtOB_b0Cjyo?si=zzj5pBPWh2sPrGKM",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/PklNgYpJSXs?si=uh2o1MMVFCh2pE8L",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/N2G8JUK7kJs?si=si1RPiGHwIJXzQ8Z",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/OsypTHsvnVI?si=Adxc_JOWPynBIDR3",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 5.2 before moving to the next step.",
      },
      {
        id: "p5_s5_3",
        number: "5.3",
        title: "Animation",
        duration: "3 Days",
        target: "Complete CSS with Grid, animations, and responsive design.",
        description: "Animation",
        assignment:
          "Watch all resources, complete the task for step 5.3, and apply it to your Portfolio (Phase 5 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/cfq7u52lvfI?si=EFeXqRr2PnFzKL1f",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/NPy2GGDX-kg?si=3XYAEdFkQdMgCVr5",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/P2QAAXONOac?si=_MEjl80kkbTVdZ43",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/9Q8W2YK3dyk?si=SZh5jMIJ2EF3SE1q",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 5.3 before moving to the next step.",
      },
      {
        id: "p5_s5_4",
        number: "5.4",
        title: "Media query & Global varibles",
        duration: "3 Days",
        target: "Complete CSS with Grid, animations, and responsive design.",
        description: "Media query & Global varibles",
        assignment:
          "Watch all resources, complete the task for step 5.4, and apply it to your Portfolio (Phase 5 Upgrade).",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/F9FAcVwSV4c?si=bg-nS1vewR3hk-t7",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/b2rWjPIZDT0?si=R9rQTPdm4DL7PSVj",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/QdXQ0Wa9oPY?si=wHhVDRtzwTJP_IL4",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/iueBHixQyX0?si=2y8vppUlvFjPadOZ",
          },
        ],
        notes:
          "Focus on understanding core concepts in step 5.4 before moving to the next step.",
      },
    ],
  },
  {
    phase: 6,
    title: "JavaScript Basics",
    target: "Learn JavaScript fundamentals — variables, data types, strings.",
    tools: "",
    project: "JS Practice",
    details: "",
    steps: [
      {
        id: "p6_s6_1",
        number: "6.1",
        title: "Intoduction To Js",
        duration: "3 Days",
        target:
          "Learn JavaScript fundamentals — variables, data types, strings.",
        description: "Intoduction To Js",
        assignment:
          "Search about ( Concatenation ,Template Literals Template Strings,  Arithmetic Operators )",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/5wAtDN_CLgI?si=GO3uF_bqMdM8UBxr",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/ig_1bvufUPo?si=_5S\u0000YPI0t7SloSZc",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/XQCG-zf71Mk?si=G\u0000XlcGMN0ieAqwPa",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/x6kJMXxqmNo?si=t82HzRuuPhFG7jvh",
          },
        ],
        notes: `Quick note: What is ECMAScript (ES)?

- In short, ECMAScript is the "rulebook and set of standard specifications," while JavaScript is the "language that implements those rules.`,
        notes2: `Rules 🛑 (If you break these rules, the code will throw an error)

- Start: Must begin with a letter, $, or _. It cannot begin with a number (e.g., 1user ❌).

- Spaces and symbols: Do not use spaces or special characters such as @, #.

- Reserved words: Do not name a variable with command names (e.g., let, if, function).

- Character sensitivity: The name user is completely different from User.`,
      },
      {
        id: "p6_s6_2",
        number: "6.2",
        title: "Varibales & Datat types",
        duration: "3 Days",
        target:
          "Learn JavaScript fundamentals — variables, data types, strings.",
        description: "Varibales & Datat types",
        assignment:
          "Search about ( Assignment Operators , Comparison Operators , Logical Operators , Conditional Ternary Operator ) ",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/WaMYDuohE1A?si=H3mA7ISgKaX-p80f",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/NgLgguhL2to?si=RwZ53qMgfhwH8zyl",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/gyWwPypW4OU?si=c_IAeUDuGDXnM2ZA",
          },
        ],
        notes: `Conventions 🤝 (For professional-looking code)

- CamelCase: Start the first word with a lowercase letter, and the rest with a capital letter (e.g., userAge, totalPrice).

- Descriptive names: Name the variable with a name that reflects its function (avoid let x = 5; and use let points = 5;).`,
        notes2: `1. String Writing Methods 📝

You can write the text between:

- Single quote: 'Islam'
- Double quote: "Islam"
- Backticks: (\`Islam\`) (This is the most powerful because it allows you to insert variables within the text and write across multiple lines).`,
      },
      {
        id: "p6_s6_3",
        number: "6.3",
        title: "Numper & String",
        duration: "3 Days",
        target:
          "Learn JavaScript fundamentals — variables, data types, strings.",
        description: "Numper & String",
        assignment:
          "Search about ( Nullish Coalescing Operator And Logical Or , Joining Arrays )",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/7dMp1Iwtf24?si=L7BmrFK-a04aA8h-",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/ECs2mCrS8Sc?si=U43SSdnewkTYhG4n",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/xBNM5Zbnh8Q?si=JCYvS7pEGcDJk8l0",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/GtmsTGAq64s?si=aXVCl-66eM5iJHBq",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/3h2FBrcNOMQ?si=9NpvKJNDk0PLvWAn",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/_vg-kxWEubk?si=jKImOML7I_mXC2N2",
          },
        ],
        notes: `2. Character Escape Symbols

We use the inverted slash ( "\\" ) when we need to write special characters within the text without the code breaking:

• \` ' \` or \` " \`: To insert quotes within the text (example: 'It\\'s ok').
• \` \\n \`: To start a new line.
• \` \\\\ \`: To insert the slash itself (\\) within the text.`,

        notes2: `1. Information Disclosure (Data Disclosure via the Console)

• Threat: Allowing \`console.log()\` statements to print objects or strings containing sensitive data (such as API keys, tokens, or personal user data).

• Professional Solution: Prevent the printing of any sensitive data in the console and use tools such as`,
      },
    ],
  },
  {
    phase: 7,
    title: "JS Logic & Functions",
    target: "Control flow, arrays, loops, and functions in JavaScript.",
    tools: "",
    project: "JS Practice",
    details: "",
    steps: [
      {
        id: "p7_s7_1",
        number: "7.1",
        title: "If Condition & Switch",
        duration: "3 Days",
        target: "Control flow, arrays, loops, and functions in JavaScript.",
        description: "If Condition & Switch",
        assignment:
          "Watch all resources, complete the task for step 7.1, and apply it to your JS Practice.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/rUa4NQQn7Zc?si=IZhTpIXE0kO0U2ai",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/Innbt6DX64A?si=OI9CezdIunfdBGyw",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/1\u00005bIDFybDk?si=A8\u00004mIE88sHmADBY",
          },
        ],
        notes: `XSS via String Injection (Malicious Script Injection)

- Threat: Receiving strings from the user and displaying them directly in the browser. For example, if an attacker writes a string containing JavaScript code such as: \`<script>steal()</script>\`.

- Professional Solution: Completely avoid using \`element.innerHTML\` when dealing with strings received from the user.

- Always use \`element.textContent\` or \`element.innerText\`; because the browser treats the input as a "safe string" and not executable code..`,
        notes2:
          `Number Overflows & Type Coercion (Number Type Manipulation)

- Threat: JavaScript is a dynamic language. If it receives a number from the user as a string (e.g., \`"10"\`) and performs addition, the JS will perform \`Concatenation\`, resulting in \`"105"\` instead of adding them. This can cause disastrous pricing or budgeting errors (Business Logic Vulnerability).

- Professional Solution: Always perform validation using \`Number.isSafeInteger()\` to ensure the number doesn't exceed the JavaScript safe limit of 2^{53} - 1$.

- Always use Strict Equality (` ===
          `) for comparison to prevent the browser from automatically converting types (type coercion) when comparing text to numbers.`,
      },
      {
        id: "p7_s7_2",
        number: "7.2",
        title: "Array",
        duration: "3 Days",
        target: "Control flow, arrays, loops, and functions in JavaScript.",
        description: "Array",
        assignment:
          "Watch all resources, complete the task for step 7.2, and apply it to your JS Practice.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/MLVJhya1CV0?si=dQqTJgdAVsEZH_cW",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/VvPxe6qj5XY?si=bqWpf-K7vaAM7GXJ",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/ss75DBXkZ4Y?si=B9jFSGg9feS6E0lK",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/MLcZ\u000012YW0U?si=SjFVMChkCfKgPMlR",
          },
        ],
        notes: `Quick Note: Array ".length" Property

- Primary Use: The ".length" property is used to determine the number of elements in an array.

- Counting System (Index vs. Length): Always remember that Length returns the actual number of elements (starting from 1), while Index starts from \`0\`. Therefore, to get the last element in the array, we use: array[array.length - 1]..`,
        notes2: `Quick Note: Sorting Arrays (".sort()")

- Primary Use: The ".sort()" function is used to sort the elements of an array.

- Hidden Default Behavior: The function sorts the elements as strings based on their ASCII code values, not as numbers!

- Example: If you sort "[10, 2, 5]" using the default ".sort()", the result will be "[10, 2, 5]" because the number 1 comes before 2 as a string!

- Correct Number Sort: To sort the numbers correctly, a comparison function must be passed.`,
      },
      {
        id: "p7_s7_3",
        number: "7.3",
        title: "loops",
        duration: "3 Days",
        target: "Control flow, arrays, loops, and functions in JavaScript.",
        description: "loops",
        assignment:
          "Watch all resources, complete the task for step 7.3, and apply it to your JS Practice.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/NnR4sYnnBoI?si=ehVNmTMjVFmCVpgl",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/cgr2f_wmxmY?si=ZJ_S4ce_GqKmKoSu",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/xPAk_2sed_M?si=sCIwLaiGJpmWFl1K",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/Z3fF7MrBPXc?si=ouq-zkrHZyyG\u0000ABa",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/CkTIcjLufCE?si=1nHFYqTjrSEnNOHu",
          },
        ],
        notes: `Quick Note: The \`do...while\` Loop

- Primary Use: Used to repeat a specific code snippet as long as the condition is met.

- Key Feature (Different from a Regular \`while\`): The \`do...while\` code is guaranteed to execute at least once, even if the initial condition is false, because the browser executes the code first and then checks the condition.`,
        notes2: `Quick Note: Function Default Parameters

- Primary Use: Used to set default values for function parameters in case the user doesn't pass values when calling the function, to prevent errors or the return of an \`undefined\` value.

// Setting "Guest" as the default value
function welcomeUser(name = "Guest"){
return \`Welcome, ${name}!\`;

}

console.log(welcomeUser()); // Output: Welcome, Guest!

console.log(welcomeUser("Islam")); // Output: Welcome, Islam!`,
      },
      {
        id: "p7_s7_4",
        number: "7.4",
        title: "Functions",
        duration: "3 Days",
        target: "Control flow, arrays, loops, and functions in JavaScript.",
        description: "Functions",
        assignment:
          "Watch all resources, complete the task for step 7.3, and apply it to your JS Practice.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/wJ7hjluDQHI?si=FHFJJt-kiJui60S7",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/QuO3APKjP7o?si=L1xSr2Pro29FZSt6",
          },
        ],
        notes: `Quick Note: Function Rest Parameters (\`...args\`)

- Primary Use: Used to sum any number of additional arguments sent to the function and instantly convert them into an array. This allows the function to accept an unlimited number of inputs with complete flexibility.

// Sum all sent numbers into an array named numbers
function sumAll(...numbers){
return numbers.reduce((total, num) => total + num, 0);

}

console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100`,
        notes2: `Quick Note: JavaScript Scope Types

A scope is the location or boundaries within which a variable resides and can be accessed and used by code. In JavaScript, we have three main scope types:

1. Global Scope

- Concept: The variable is defined outside of any function or block \`{}\`.

- Visibility: It is accessible and visible to all code in the entire file.

- Security Warning: Avoid using the Global Scope for sensitive variables, as they become exposed within the \`window\` object and can be easily tracked and modified by any external script.

2. Function Scope / Local Scope

- Concept: The variable is defined within a specific function (using \`var\`, \`let\`, or \`const\`).

- Visibility: The variable can only be accessed or viewed from within that function. Once the function finishes executing, it is removed from memory to ensure data privacy.

3. Block Scope

- Concept: A variable is defined within curly braces \`{}\`, such as \`if\` conditions or \`loops\`.

- Visibility: This scope applies only to variables defined with \`let\` and \`const\`, and they cannot be seen outside the \`{}\` boundaries. (Remember: \`var\` variables do not respect the Block Scope and spill over!).`,
      },
    ],
  },
  {
    phase: 8,
    title: "JS DOM & Objects",
    target: "Objects, DOM manipulation, and destructuring.",
    tools: "",
    project: "JS Practice",
    details: `🛠️ Portfolio Update (Themes & Storage Feature)

- Required: Add a button to switch the website to Dark Mode.

- Programming: Use the DOM to change the colors, and most importantly, use LocalStorage to save the user's choice; so that if they close the page and return, the website opens automatically in their chosen mode without needing to reset it.`,
    steps: [
      {
        id: "p8_s8_1",
        number: "8.1",
        title: "Object",
        duration: "3 Days",
        target: "Objects, DOM manipulation, and destructuring.",
        description: "Object",
        assignment:
          "Watch all resources, complete the task for step 8.1, and apply it to your JS Practice.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/9dkSSPWu_qY?si=veck--T8KRu0v72B",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/C9AWlPyd9lo?si=sWS_2IAcGzADJuAK",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/PbWkJcPrA1g?si=8RsV3V5GeB7aVEeO",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/XnK3JYPtAJI?si=h_laXne0nI8GcKx0",
          },
        ],
        notes: `1. Comparing Logical Data (\`if\` statement)

- Technical Risk Name: Business Logic Bypass via Type Coercion
Reason: The risk here is that using == makes JavaScript treat the number 0 and the empty text "" as exactly false, which allows an attacker to bypass security conditions and gain unauthorized privileges. ===, on the other hand, checks both the value and the data type to completely close this vulnerability. 🔒 - Vulnerable Code:
let userInput = 0;
if (userInput == false) {
console.log("Operation Complete!");

} Safe Code:
let userInput = 0;

if (userInput === false) {
console.log("Operation Complete!");

} else {
console.log("Invalid data 🔒");

}`,
        notes2: ` 2.- Technical risk name: Data corruption via in-place mutation (DATA CORruption) 
- Safe code:

let originalProducts = ["Laptop", "Mobile", "Camera"];

let safeSorted = [...originalProducts].sort();

console.log(originalProducts);

console.log(safeSorted);`,
      },
      {
        id: "p8_s8_2",
        number: "8.2",
        title: "Dom",
        duration: "3 Days",
        target: "Objects, DOM manipulation, and destructuring.",
        description: "Dom",
        assignment: "Search about ( Xss vulnerable , Dos Atack )",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/AOabnOI4vOQ?si=iOhtjf8_1bz44Um8",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/9j9XvUnWndI?si=v3KA3HnwWfqVwIeL",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/JNCu3XIjluk?si=_YhcvGJrMkmu11yL",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/DA3zF8Pm9Tc?si=meKEQhdB-vc9tjrR",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/BFd05UsHP48?si=3EkYUFREbTkW9lkv",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/Iq0K54HzdGs?si=60kjqGI7NrmRpigo",
          },
          {
            name: "Video 7",
            link: "https://youtu.be/ShSLbgFu4gg?si=C3-ml5AU5aag0ZYH",
          },
          {
            name: "Video 8",
            link: "https://youtu.be/OsrT0kxQCvA?si=yGQkrJot-A1jiG3d",
          },
        ],
        notes: `3. Safe Loop Control (Protection of Loops from Collapse)

- Technical Risk Name: Client-Side Denial of Service (DoS) Vulnerability - Safe Code:
let counter = 0;
while (counter < 5) {
console.log(counter);

counter++;

}`,
        notes2: `4. Functions and Input Validation

- Technical Risk Name: Type Crash via Missing Input Validation
- Risky Code:
function calculateTotal(price){
return price * 1.14;
}
calculateTotal(); // The code will crash and return NaN because the price is undefined

- Safe Code:
function calculateTotal(price = 0){
if (typeof price !== "number") return 0;
return price * 1.14; 🔒
}`,
      },
      {
        id: "p8_s8_3",
        number: "8.3",
        title: "Destructuring",
        duration: "3 Days",
        target: "Objects, DOM manipulation, and destructuring.",
        description: "Destructuring",
        assignment:
          "Watch all resources, complete the task for step 8.3, and apply it to your JS Practice.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/tR6VARwdmzA?si=t8cbS4IXWW8e-usp",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/cv3LaTelG3I?si=z2XF3jnlERuymkRK",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/NnTQs7dYVf0?si=ft1LVHCvEjP0jO72",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/4_McBh1NcAk?si=jAxDB5V\u0000435wxAlD",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/zq-ErjysJ84?si=4JPVnjinpbwyV96u",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/2WtdhvOkgcs?si=XfZeBmjU1O0Hcx-U",
          },
          {
            name: "Video 7",
            link: "https://youtu.be/I6mI4GW6Du4?si=g3vYdDpqdo_snbLV",
          },
        ],
        notes: `Quick Note: Create an Object With the \`new\` Keyword

- Primary Use: This is a method for creating a new, empty object using the \`new\` keyword followed by the built-in \`new Object()\` object constructor.

- Important Note: This method achieves the same result as a regular \`{}\` Object Literal, but it's always preferable to use \`{}\` because it's faster to type and performs better.`,
        notes2: `Quick Note: Create Object With \`Object.create()\`

- Primary Use: Used to create a new object and specify another object as its prototype (meaning the new object inherits all attributes and functions directly from the old object).`,
      },
    ],
  },
  {
    phase: 9,
    title: "JS Advanced & API",
    target: "Advanced JS — storage, OOP, and Fetch API.",
    tools: "",
    project: "API Project",
    details: `Portfolio Update (Real Contact Feature - EmailJS)

- Required: Activate the contact form on your website so it functions properly.

- Integration: Instead of making the submit buttons fake, read the EmailJS documentation and integrate it with your website using JavaScript. This way, anyone who writes a message on your website will instantly receive it as a real email in your personal inbox!`,
    steps: [
      {
        id: "p9_s9_1",
        number: "9.1",
        title: "local storage & session storage & advanced concepts",
        duration: "3 Days",
        target: "Advanced JS — storage, OOP, and Fetch API.",
        description: "local storage & session storage & advanced concepts",
        assignment:
          "Watch all resources, complete the task for step 9.1, and apply it to your API Project.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/n64yffJXsHY?si=_k3p1Td_22w-Pf78",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/QsGN8B8g8QE?si=2XDF4-dZ8_7-ss-u",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/lT-hZqsKfu4?si=iEIW2xelPQErcW7v",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/lsirOGbdWYA?si=f7IoWXLifbFJxRTN",
          },
        ],
        notes: `- Definition: DOM stands for Document Object Model. It's a browser interface or hierarchical map that transforms an entire HTML page into objects that JavaScript can view, modify, delete, and add.

- Main purpose: To transform a web page from a static, silent page into a dynamic, interactive page that responds to user actions.`,
        notes2: `Quick Note: DOM Attributes Management

- **Primary Use:** Used to control the attributes of HTML elements (such as \`href\` for links, \`src\` for images, and \`disabled\` for buttons) in terms of checking, fetching, modifying, or deleting them.

🛠️ Basic Methods:

1. \`hasAttribute(name)\`: To check if the attribute exists in the element (returns \`true\` or \`false\`).

2. \`getAttribute(name)\`: To fetch the current value of the attribute.

3. \`setAttribute(name, value)\`: To add a new attribute or modify the value of an existing attribute.

4. \`removeAttribute(name)\`: To completely remove the attribute from the element.`,
      },
      {
        id: "p9_s9_2",
        number: "9.2",
        title: "Advancded Concepts & oop",
        duration: "3 Days",
        target: "Advanced JS — storage, OOP, and Fetch API.",
        description: "Advancded Concepts & oop",
        assignment:
          "Watch all resources, complete the task for step 9.2, and apply it to your API Project.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/nrmA_yGlG0g?si=gtQ5SSDNCBHBiyiH",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/A\u0000Tb2nY1Kfo?si=1VldrSOikCiMTYQt",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/D9UdBHoAOzg?si=jDyooU\u00008vIg8ESP6",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/uv5OULDiCXg?si=q5slxuRvNXUBskuz",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/_zBImgVB3Pk?si=Z3NRmHmWpJ0WaPqN",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/QvE2IJxF2H4?si=dCIJ2L7FPnfEx4sy",
          },
          {
            name: "Video 7",
            link: "https://youtu.be/Rhjht0ATx-4?si=trZ8CyRV2sJW_tCf",
          },
        ],
        notes: `Quick Note: DOM Traversing

- **Primary Use:** This is a technique we use to access a specific element on the page based on its relationship to another element we are already working with (i.e., we move from it to the parent, child, or adjacent sibling) instead of creating a \`querySelector\` for each element individually.

🛠️ Basic Directions and Properties:

1. Upward (Accessing the parent): \`parentElement\`

2. Downward (Accessing the children): \`children\` (returns an array of all children) or \`firstElementChild\` / \`lastElementChild\`

3. Horizontally (Accessing siblings): \`nextElementSibling\` or \`previousElementSibling\``,
        notes2: `The BOM provides you with an object called \`window\` that contains all the properties that control the browser. The two most important features we use in real-world applications are:

1. Timers

- \`setTimeout(callback, ms)\`: Executes a specific code once after a specified time (e.g., hiding a welcome message after 3 seconds).

-\`setInterval(callback, ms)\`: Executes a code repeatedly at specified time intervals (e.g., setting a digital clock or automatically rotating images).

2. window.location (navigation and URL identification)

- We use this to tell the user which page they are currently on, or to automatically redirect them to another page (like when they click logout, we take them back to the login page).`,
      },
      {
        id: "p9_s9_3",
        number: "9.3",
        title: "API",
        duration: "3 Days",
        target: "Advanced JS — storage, OOP, and Fetch API.",
        description: "API",
        assignment:
          "Watch all resources, complete the task for step 9.3, and apply it to your API Project.",
        resources: [
          {
            name: "Video 1",
            link: "https://youtu.be/vZjHCcZJMi4?si=1HSAJoxmjoR6xORG",
          },
          {
            name: "Video 2",
            link: "https://youtu.be/oO0a7tQcGps?si=sGtsBW9DlpTeccYM",
          },
          {
            name: "Video 3",
            link: "https://youtu.be/OipVzp0R7zs?si=rOpJo1LxFGOiB0lP",
          },
          {
            name: "Video 4",
            link: "https://youtu.be/PI2zuNkELTs?si=h_pbHEP6jBul1Fmf",
          },
          {
            name: "Video 5",
            link: "https://youtu.be/5iLxtN4POts?si=cRI1NYzTsvONitxK",
          },
          {
            name: "Video 6",
            link: "https://youtu.be/nb3Hh-gAbM4?si=fVfNG8G24ZRNdTsj",
          },
          {
            name: "Video 7",
            link: "https://youtu.be/5hFTT8GX1fU?si=-B9fmw6iZ4iwDPET",
          },
          {
            name: "Video 8",
            link: "https://youtu.be/5hFTT8GX1fU?si=-B9fmw6iZ4iwDPET",
          },
        ],
        notes: `💡 Quick Note: Introduction to Regular Expressions (Regex)

- Definition: A Regex is a text pattern that you write in a specific way to search for a word or check the format of text (e.g., Is the email address spelled correctly? Is the phone number made up of only numbers?).

🛠️ Basic Structure (How do we write the pattern?)

Any Regex pattern in JavaScript is written between two slashes: \`/pattern/flags\`.

1. Modifiers (Flags): These are placed at the end, outside the slashes, to specify the search method:

- \`g\` (Global): Search the entire text, not just the first word.

- \`i\` (Case-insensitive): It doesn't matter if the letters are capital or lowercase (e.g., A is a).

- 2. Common Symbols and Combinations (Game Rules):**

- \`[A-Z]\`: This means search for any capital letter from A to Z.

- \`[0-9]\` or \`\\d\`: This means search for any number.

- \`+\`: This means that the letter or number can be repeated once or more consecutively.

- \`^\`: This means "start the search from the beginning of the line."

- \`$\`: This means "the line must end here."

// 1. Writing the Regex Pattern
// ^ means start the scan from the beginning, [a-z] is lowercase, {3,10} is the length, $ means close the text here
const usernamePattern = /^[a-z]{3,10}$/;

// 2. Texts to be Scanned
const user1 = "islam"; // Correct: lowercase letters and length 5
const user2 = "Is"; // Incorrect: Contains a capital letter and is less than 3 characters long
const user3 = "islamghazy123"; // Incorrect: Longer than 10 characters and contains numbers

// 3. Testing using .test()
console.log(usernamePattern.test(user1)); // Output: true
console.log(usernamePattern.test(user2)); // Output: false
console.log(usernamePattern.test(user3)); // Output: false`,
        notes2: `Quick Note: Date & Time Essentials

- Basic Use: The \`Date\` object provides ready-made directives for handling time and date. In real-world work, we rarely write complex time calculations in Vanilla JS and instead use pre-built libraries, but these basics are more than enough for any website`,
        notes3: `Quick Note: JavaScript Modules (Import & Export)

- Main Use: Modules allow you to split large code snippets into separate files (each file responsible for a specific function), and then import the functions or variables you need into another file. This prevents code overlap and makes maintenance easier.  ⚠️ Important note for HTML: In order for the browser to understand this code, when linking the main JavaScript file to the HTML, we must write the \`type\` class as follows:

<script type="module" src="main.js"></script>`,
        notes4: `Quick Note: JSON (JavaScript Object Notation)

- Primary Use: JSON is the standard format or "common language" used to transfer data between the server (back-end) and the browser (front-end).

- Data Format: Data is received from the server as plain text (strings), but written in the same way as a JavaScript object, with one crucial requirement: **All keys and strings must be enclosed in double quotes \`""\`.

🛠️ Two Essential Functions in the Job Market:

JavaScript provides a built-in object called \`JSON\`, which contains two functions used in all projects:

1. \`JSON.parse(jsonString)\`:

- Function: Converts the text coming from the server (JSON) into a real object so you can enter it and dynamically read its data on your page.

2. \`JSON.stringify(object)\`:

- Its function: Exactly the opposite; it takes the object in your code and converts it to a string so you can send and store it on the server or in LocalStorage.

💻 A clear practical example
// 1. Data coming from the server as text (note the double quotes)
const jsonFromServer = '{"name": "Islam", "role": "Admin", "skills": ["HTML", "JS"]}';

// 2. Converting the text to an object so we can work with it
const userObj = JSON.parse(jsonFromServer);

console.log(userObj.name); // Output: Islam
console.log(userObj.skills); // Output: ['HTML', 'JS']

// 3. Convert the Object to Text to Return it to the Server
const jsonToSend = JSON.stringify(userObj);

console.log(jsonToSend);

/ Output: '{"name":"Islam","role":"Admin","skills":["HTML","JS"]}'
console.log(typeof jsonToSend); // Output: string`,
        notes5: `🔒 Security Alert 1: Protecting Sensitive API Keys

A fundamental security concept: When you connect your site to external services like EmailJS or retrieve weather and location data, you are provided with a unique encryption key called your API Key. This key is like your credit card PIN; if it is leaked or uploaded exposed on GitHub, anyone can exploit your account, steal your data, use up your data allowance, and sabotage your project.

The Vulnerable Way

Writing the API Key directly and explicitly (hardcoded) within the core JavaScript file and uploading it to public repositories.

// Unsafe code snippet ❌
// The secret key is completely exposed to anyone who visits your GitHub account!

const myApiKey = "secret_api_key_1234567890xyz";


fetch(\`https://api.weather.com/data?key=\${myApiKey}\`);

Security Alert 2: Secure Error Handling and Technical Data Concealment

A fundamental security concept: When a server connection fails or a network outage occurs, the browser or server generates complex technical details about the error (Stack Trace). Displaying these sensitive details to the end user interface is a valuable opportunity for hackers, as it reveals the server infrastructure, filenames, and internal paths of your project (Information Disclosure Vulnerability).

❌ The Vulnerable Way:

Taking the technical error text from the \`catch\` and printing it directly into the user interface (DOM).

async function loadData(){
try {
const response = await fetch("https://api.example.com/data");

return await response.json();

} catch (error) {
// Security vulnerability: Displays full system details and technical error to the hacker!

document.querySelector("#error-box").textContent = error.stack;

}
}

// 100% safe code snippet
async function loadData(){
try {
const response = await fetch("https://api.example.com/data");

return await response.json();

} catch (error) {
/ Prints the error in the console for the developer only during development
console.error("Internal System Error:", error);

/ Displays a safe and ambiguous message to the end user to protect the system

document.querySelector("#error-box").textContent = "Sorry, there was an error connecting to the server. Please try again later.";

} }

}
📌 The Golden Rule of a Professional Developer: > "Technical errors are for developers only, and clear, concise messages for users. Don't give hackers a map of your system through error messages!"`,
      },
    ],
  },
  {
    phase: 10,
    title: "Git, GitHub & Deployment",
    target: "Version control with Git/GitHub and deploy your Portfolio live.",
    tools: "",
    project: "Final Deployment",
    details: "",
    steps: [
      {
        id: "p10_s10_1",
        number: "10.1",
        title: "Git & GitHub — Version Control & Deployment",
        duration: "3 Days",
        target:
          "Version control with Git/GitHub and deploy your Portfolio live.",
        description: "Git & GitHub — Version Control & Deployment",
        assignment:
          "Initialize a Git repo, commit your Portfolio, push to GitHub, and deploy via GitHub Pages.",
        resources: [
          {
            name: "Git & GitHub Guide",
            link: "https://youtu.be/L-yzKcfBUKI",
          },
        ],
        notes: `🏆 Final Project for this Phase: Integrated E-Commerce Web App

Description: This is your graduation project for the JavaScript phase. You won't be writing static, fake data; instead, you'll be building a real, dynamic online store that connects everything you've learned from beginner to expert.

🎯 Features to Implement (User Stories):

1. Data Fetching (Fetch API): Fetch products, their images, and prices from a real external server using \`Fetch\` and \`Async/Await\` (you can use a free server like FakeStoreAPI*).

2. Dynamic DOM Manipulation: Automatically display products based on data from the server without manually writing HTML for product tags.

3. Array Methods Control and Filtering: Add a search bar and a filter list to filter products by price or category.

4. Cart Logic: The "Add to Cart" button increases the counter, calculates the total price, and allows you to delete or add items.

5. Data Persistence: Cart items are saved in LocalStorage to ensure that user purchases are not lost when the page is refreshed.

💡 This project is your golden ticket to proving your programming skills in job interviews!`,
      },
    ],
  },
];
