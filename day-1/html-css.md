## 📌 HTML Basics

- `<!DOCTYPE html>` → Defines the document type
- `<html>` → Root of the page
- `<head>` → Contains meta info, title, styles
- `<body>` → Everything visible to the user

### Page Structure
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>

✍️ Common HTML Tags
Headings: <h1> to <h6>

Paragraph: <p>Text</p>

Line break: <br>

Horizontal line: <hr>

Bold/Italic: <strong>, <em>

Links: <a href="url">Link</a>

Images: <img src="image.jpg" alt="desc">

Lists:
<ul>
  <li>Item</li>
</ul>

<ol>
  <li>First</li>
</ol>

Forms:

<form>
  <input type="text">
  <button>Submit</button>
</form>


🎨 CSS Basics
CSS = Style language for HTML

Applied in 3 ways:

Inline: <h1 style="color:red">Hi</h1>

Internal: In <style> inside <head>

External: Link CSS file with <link href="style.css">

Syntax
selector {
  property: value;
}
Example:

p {
  color: blue;
  font-size: 16px;
}
🧷 CSS Selectors
* → All elements

p → All paragraphs

.class → Class

#id → ID

a:hover → On hover

div p → All <p> inside <div>

div > p → Direct <p> child

📦 Box Model
Every element has:

Content

Padding (space inside)

Border

Margin (space outside)


div {
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}
💡 Display & Position
display: block | inline | flex | grid | none

position: static | relative | absolute | fixed

z-index: Controls layer stacking

top, left, right, bottom: For positioned elements

🧲 Flexbox (1D Layout)
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
flex-direction: row | column

justify-content: space-between, center, etc.

align-items: center, flex-start, etc.

📊 Grid (2D Layout)

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
📱 Responsive Design
Use media queries to adjust layout on smaller screens:

@media (max-width: 600px) {
  body {
    background: lightgray;
  }
}
📚 Useful CSS Properties
Property	Example Value
color	red, #000, rgb()
background	#eee, url()
font-size	16px, 1em
text-align	center, left
padding	10px, 10px 20px
margin	auto, 10px
border	1px solid black
width/height	100%, 200px

✅ HTML5 Semantic Tags
Use for better structure & SEO:

<header>, <footer>

<nav>

<section>

<article>

<main>
