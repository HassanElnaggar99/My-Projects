const re2 = /(<dd><a href="https:\/\/github.com\/HassanElnaggar99\/)([-_a-zA-Z]*)(">)()(<\/a>) (<a href="https:\/\/hassanelnaggar99.github.io\/()">Live Preview<\/a>)(<\/dd>)/g
const re3 = /(<dd><a href="https:\/\/github\.com\/HassanElnaggar99\/)([-_a-zA-Z]*)(">)(.*)(<\/a>)(<\/dd>)/g
let msg = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Projects</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>My Projects</h1>

  <h2>AppAcademy</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/hello-html">hello-html</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/html-tags-cheat-sheet">html-tags-cheat-sheet</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/surveyForm">surveyForm</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/practice-for-week-02-pojo"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Callbacks-Project">Callbacks-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Scope-Project">Scope-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Recursion-Problems">Recursion-Problems</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Timeout-Project-Phase1"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Timeout-Project-Phase2"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/guessing-game-project">guessing-game-project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/practice-for-week-04-common-js-modules"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Long-Practice-Rock-Paper-Scissors-Refactor">Long-Practice-Rock-Paper-Scissors-Refactor</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/practice-for-week-04-class-employee-manager-long-practice"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/practice-for-week-04-class-dragons-long-practice"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Adventure-Project">Adventure-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Adventure-Project-p2"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Long-Practice-Context">Long-Practice-Context</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/tic-tac-toe">tic-tac-toe</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Connect-Four">Connect-Four</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/TDD-style-long-practice">TDD-style-long-practice</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Tic-Tac-Toe-TDD-Project">Tic-Tac-Toe-TDD-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/tic-tac-toe-refresh-starter">tic-tac-toe-refresh-starter</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/connect-four-refresh-starter">connect-four-refresh-starter</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/ttt-tdd-project">ttt-tdd-project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/bejeweled-starter">bejeweled-starter</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Linked-Lists-and-Queues-Project">Linked-Lists-and-Queues-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Whiteboarding-Problems">Whiteboarding-Problems</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Hash-Tables-Project">Hash-Tables-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Custom-Sorting-Project">Custom-Sorting-Project</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Social-Graph">Social-Graph</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Land-Size-Graphs-Practice-">Land-Size-Graphs-Practice-</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Counting-Islands-Graphs-Practice">Counting-Islands-Graphs-Practice</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/HTML-from-Wireframes-Long-Practice">HTML-from-Wireframes-Long-Practice</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Modernize-Craigslist-Long-Practice">Modernize-Craigslist-Long-Practice</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Recreate-Trello-Long-Practice">Recreate-Trello-Long-Practice</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Project-CSS-Media-Queries">Project-CSS-Media-Queries</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/practice-for-week-08-html-templating"></a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/practice-for-week-08-adventure-game-navigation-long-practice"></a></dd>
  </dl>

  <h2>The Odin Project</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/git-test">git-test</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/css-exercises">css-exercises</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/javascript-exercises">javascript-exercises</a></dd>
    <dt>HTML Foundations</dt>
    <dd><a href="https://github.com/HassanElnaggar99/odin-recipes">Project: Recipes</a></dd>
    <dt>CSS: Flexbox</dt>
    <dd><a href="https://github.com/HassanElnaggar99/landing-page">Project: Landing Page</a></dd>
    <dt>JavaScript Basics</dt>
    <dd><a href="https://github.com/HassanElnaggar99/Project-Rock-Paper-Scissors">Project: Rock Paper Scissors</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Project-Etch-a-Sketch">Project: Etch-a-Sketch</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Project-Calculator">Project: Calculator</a></dd>
    <dt>CSS: Forms</dt>
    <dd><a href="https://github.com/HassanElnaggar99/Project-Sign-up-Form">Project: Sign-up Form</a></dd>
    <dt>CSS: Grid</dt>
    <dd><a href="https://github.com/HassanElnaggar99/Project-Admin-Dashboard">Project: Admin Dashboard</a></dd>
    <dt>JS: Asynchronous JavaScript and APIs</dt>
    <dd><a href="https://github.com/hassanelnaggar99/Project-Weather-App/">Project: Weather App</a></dd>
    <dt>React: States And Effects</dt>
    <dd><a href="https://github.com/HassanElnaggar99/CV-Application">Project: CV Application</a></dd>
  </dl>

  <h2>Frontend Mentor</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/QR-code-component">QR-code-component</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Product-preview-card-component">Product-preview-card-component</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Blog-preview-card">Blog-preview-card</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Results-summary-component">Results-summary-component</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/NFT-preview-card-component">NFT-preview-card-component</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Social-links-profile">Social-links-profile</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Social-proof-section">Social-proof-section</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Recipe-Page">Recipe-Page</a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
  </dl>

  <h2>elzero challenges</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/Company-Team-With-Grid">Company-Team-With-Grid</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/HTML-and-CSS-Template-One">HTML-and-CSS-Template-One</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/HTML-And-CSS-Template-Two">HTML-And-CSS-Template-Two</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/EL-Letters-Animations">EL-Letters-Animations</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/To-Do-App-With-Local-Storage">To-Do-App-With-Local-Storage</a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
  </dl>

  <h2>Net Ninja</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/PSD-to-HTML-CSS-unresponsive-">PSD-to-HTML-CSS-unresponsive-</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/PSD-to-HTML-CSS-Responsive">PSD-to-HTML-CSS-Responsive</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Mobile-First-Responsive-Build-with-CSS-Grid">Mobile-First-Responsive-Build-with-CSS-Grid</a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
  </dl>

  <h2>Scrimba React</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/Digital-Business-Card">Digital-Business-Card</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Travel-Journal">Travel-Journal</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Quizzical">Quizzical</a></dd>
    <dd><a href=""></a></dd>
  </dl>

  <h2>Free Code Camp</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/Survey-Form">Survey-Form</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Tribute-Page">Tribute-Page</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Technical-Documentation-Page">Technical-Documentation-Page</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Product-Landing-Page">Product-Landing-Page</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Personal-Portfolio-Page">Personal-Portfolio-Page</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Palindrome-Checker">Palindrome-Checker</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Roman-Numeral-Converter">Roman-Numeral-Converter</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Telephone-Number-Validator">Telephone-Number-Validator</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Cash-Register">Cash-Register</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Pokemon-Search-App">Pokemon-Search-App</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/World-Cup-Database">World-Cup-Database</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Celestial-Bodies-Database">Celestial-Bodies-Database</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Salon-Appointment-Scheduler">Salon-Appointment-Scheduler</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Periodic-Table-Database">Periodic-Table-Database</a></dd>
    <dd><a href="https://github.com/HassanElnaggar99/Number-Guessing-Game">Number-Guessing-Game</a></dd>
  </dl>

  <h2>AAST College of Engineering</h2>
  <dl>
    <dd><a href="https://github.com/HassanElnaggar99/Bank-Queue-System">Bank-Queue-System</a></dd>
    <dd><a href=""></a></dd>
    <dd><a href=""></a></dd>
  </dl>

  <script src="main.js"></script>
</body>
</html>`
console.log(msg.replaceAll(re3, '$1$2$3$2$5 <a href="https://hassanelnaggar99.github.io/$2">Live Preview<\/a>$6'))