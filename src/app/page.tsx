export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        A personal finance tracker with budgeting features
      </h1>
      <p className="text-lg text-gray-600">
        Welcome to your new Next.js application!
      </p>
      <pre className="mt-4 p-4 bg-gray-100 rounded">{`{
    "project_name": "personal-finance-tracker",
    "description": "A personal finance tracker with budgeting features built with Next.js",
    "tech_stack": "Next.js",
    "files": [
        {
            "path": "package.json",
            "content": `{
                "name": "personal-finance-tracker",
                "version": "1.0.0",
                "description": "A personal finance tracker with budgeting features built with Next.js",
                "main": "index.js",
                "scripts": {
                  "dev": "next dev",
                  "build": "next build",
                  "start": "next start"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "dependencies": {
                  "react": "^17.0.2",
                  "react-dom": "^17.0.2",
                  "next": "11.1.2",
                  "axios": "^0.21.1",
                  "styled-components": "^5.3.1"
                },
                "devDependencies": {
                  "@types/node": "^16.7.13",
                  "@types/react": "^17.0.20",
                  "typescript": "^4.4.3"
                }
            }`
        },
        {
            "path": "pages/index.tsx",
            "content": `import React from 'react';

            // This is the landing page of the application
            const IndexPage: React.FC = () => {
              return (
                <div>
                  <h1>Welcome to Personal Finance Tracker</h1>
                </div>
              )
            }

            export default IndexPage;`
        },
        {
            "path": "components/Budget.tsx",
            "content": `import React from 'react';

            // This is a simple budget component
            const Budget: React.FC = () => {
              return (
                <div>
                  <h2>Your Budget</h2>
                  // ... more code for displaying budget
                </div>
              )
            }

            export default Budget;`
        },
        {
            "path": "styles/global.ts",
            "content": `import { createGlobalStyle } from 'styled-components';
            
            // Global style for the entire app
            const GlobalStyle = createGlobalStyle\`
              body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
            \`;

            export default GlobalStyle;`
        },
        {
            "path": "README.md",
            "content": `# Personal Finance Tracker

            This is a personal finance tracker with budgeting features built with Next.js

            ## Setup Instructions

            - Clone the repository
            - Run \`npm install\` to install dependencies
            - Run \`npm run dev\` to start the development server`
        }
    ],
    "setup_instructions": [
        "Clone the repository",
        "npm install",
        "npm run dev"
    ]
}
This JSON structure represents a minimalist project structure for a personal finance tracker application using Next.js. The project includes a `package.json` with the necessary dependencies, a landing page (index.tsx), a budget component (Budget.tsx), global styles for the application (global.ts), and a README.md with setup instructions.

Bear in mind that this structure is a basic starting point. A real-world application would likely be more complex, with a variety of components, state management (using Redux or Context API, for example), routing (Next.js file-based routing), tests (using Jest and React Testing Library), and more.`}</pre>
    </main>
  )
}