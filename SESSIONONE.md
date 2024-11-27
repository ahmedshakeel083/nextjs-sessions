WHAT IS NEXTJS ?

Its a framework to create a full stack web application ready for production with 
File based Routing,
Optimized Rendering like SSR, SSG and CSR with cliend side and server side components
Data Fetching with an extended "fetch" API for request memoization, data caching and revalidation.
Styling support with Tailwind CSS, CSS Modules, CSS-in-JS
Optimizations of Images, Fonts and Scripts enhancing core web vitals and UX
Dev and Prod build system

### Check node version and use the latest one
- See the which version is getting used
```
node -v
```
- Check available versions
```
nvm list available
|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|    23.3.0    |   22.11.0    |   0.12.18    |   0.11.16    |
```
- Upgrade to the latest stable version
```
nvm install v22.11.0
```
- Use the installed version
```
nvm use 22.11.0
```

### Check the npm version and upgrade
```
npm -v
npm install -g npm@latest
```

### Walkthrough of All the Files
- public folder
- src/app folder
- layout.tsx
- page.tsx
- Server Components
  - ALL the COmponents are Server Components by default
  - Ability to run tasks, read file or fetching data from database
  - lack ability to handle user interactions and hooks
- Client Components
  - add "use client" at the top of the component
  - ability to interact and manage hooks

### Routing
- All routes must be placed under the "app" folder
- Any file which is supposed to be a route must be named page.js or page.tsx
- Each Folder corresponds to a path in the URL
- Scenarios
  - Root Route Eg.Landing Page (https://www.datamatics.com/) app/page.tsx
  - Static Routes Eg. About Page (https://www.datamatics.com/about) app/about/page.tsx
  - Dynamic Routes Eg. Posts (https://www.datamatics.com/blog/my-first-post) app/blog/[postid]/page.tsx
  - Nested Dynamic Routes Eg. Product Reviews (https://www.datamatics.com/products/1/reviews) app/product/[...slug]/page.tsx
  - Nested Dynamic Routes for All segments Eg. Comments (https://www.datamatics.com/products/1/comments/) app/[[...slug]]/page.tsx
  - Template.tsx to rerender the layout of the specific route as layout.tsx doesnt rerender
  - loading.tsx, It uses react suspense under the hood and basically creates a loading ui for the content of a route segment which is being loaded, its important for better UX as the user will be looking at a Skeleton UI as a loading indicatior instead of a blank page
  - global-error.tsx for global error UI that catches and handles errors at the root of app
  

