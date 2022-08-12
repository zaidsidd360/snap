# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://styled-components.com/) - For styles

### What I learned

I learned how you can add different utility classes to elements using a ternary operator when some state changes.

```js
import { useState } from "react";

const foo = (props) => {
  const [bar, setBar] = useState(false);
  return (
    <div className={bar ? "pl-3 text-medium-gray" : "hidden"}>
      {props.value}
    </div>
  );
};
```

Also, for some reason, tailwind doesn't have class chaining at breakpoints.

So instead of simply doing something like this

```js
<div className="md:(w-full h-full flex flex-row-reverse)">foo</div>
```

you have to add the <code>md:</code> breakpoint prefix to every class like this

```js
<div className="md:w-full md:h-full md:flex md:flex-row-reverse">foo</div>
```

### Useful resources

- [Kevin Powell](https://www.example.com) - Hats off to this guy, best CSS instructor in the game. A must watch for every FE developer.

## Author

- Frontend Mentor - [@zaidsidd360](https://www.frontendmentor.io/profile/zaidsidd360)
- Twitter - [@zaidsidd360](https://www.twitter.com/zaidsidd360)
