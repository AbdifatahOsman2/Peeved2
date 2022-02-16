# Peeved
A top pet peeves blog application

## Members
- Rick Hertel   
- John Tran
- Abdi Osman

## Group Expectations
<img src="./images/group-expectations.png" alt="Group expectations" />
<img src="./images/group-expectations2.png" alt="Group expectations" />


## MVP Goals

- Create MERN application and deploy via Heroku and Netlify
- Application will have full front-end and back-end CRUD functionality
- Application will have collections for both User and Posts
- Application will have JWT authorization, 
- Render application in browser
- The Peeved repo has a README.md that documents the project in detail

## Post-MVP Goals
- Allow users to make comments on any post if they are logged in
- Add Likes
- Hamburger menu
- Add dropdown/pop-up login on hover/click etc.
- Additional styling, animations
- Posts Search

## Database Schemas
```
userSchema
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true }
  }

postSchema
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" }
  }
```

## MERN Chart
<img src="./MERN-chart.jpg" alt="MERN chart"/>

## Wireframes
<img src="./images/home.jpg" alt="wireframe">
<img src="./images/register.jpg" alt="wireframe">
<img src="./images/logged-in-page.jpg" alt="wireframe">
<img src="./images/new-post.jpg" alt="wireframe">
<img src="./images/edit.jpg" alt="wireframe">
<img src="./images/home.rsp.jpg" alt="wireframe">
<img src="./images/register.rsp.jpg" alt="wireframe">
<img src="./images/logged-in-page.rsp.jpg" alt="wireframe">
<img src="./images/new-post.rsp.jpg" alt="wireframe">
<img src="./images/edit.rsp.jpg" alt="wireframe">

## Component Hierarchy
<img src="./images/component-hierarchy.png" alt="component hierarchy" />
# Peeved2
