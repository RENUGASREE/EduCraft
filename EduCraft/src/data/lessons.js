export const lessons = [
  {
    id: 'html-basics',
    title: 'HTML Basics',
    level: 'Beginner',
    duration: '20 min',
    thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    content: `
### What is HTML?
HTML (HyperText Markup Language) is the standard language for creating web pages.

**Core building blocks**
- Elements & tags
- Attributes
- Document structure

**Try it**
\`\`\`html
<!DOCTYPE html>
<html>
  <head><title>Hello</title></head>
  <body><h1>Hello EduCraft!</h1></body>
</html>
\`\`\`
`
  },
  {
    id: 'css-layouts',
    title: 'CSS Layouts',
    level: 'Beginner',
    duration: '25 min',
    thumb: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200&auto=format&fit=crop',
    content: `
### Flexbox & Grid
Use Flexbox for 1D layouts and Grid for 2D layouts.

**Flexbox snippet**
\`\`\`css
.container { display:flex; gap: 12px; }
.item { flex: 1; }
\`\`\`
`
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    level: 'Intermediate',
    duration: '30 min',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    content: `
### useState & useEffect
Hooks let you use state and lifecycle in functional components.

**Counter**
\`\`\`jsx
function Counter(){
  const [n,setN] = React.useState(0)
  return <button onClick={()=>setN(n+1)}>Clicked {n}</button>
}
\`\`\`
`
  }
]
