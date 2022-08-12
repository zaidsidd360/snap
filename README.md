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

![](https://user-images.githubusercontent.com/87397035/184444529-9024b528-6edb-433f-838d-d63e24df8e39.png)
![](https://user-images.githubusercontent.com/87397035/184444771-395642b2-cbb4-43f2-8ffb-e01a6e413589.png)
![](https://user-images.githubusercontent.com/87397035/184445729-c7549575-7c3d-4320-b0ba-3b3a6005cf5f.png)

#### Active/Hover states

![](https://user-images.githubusercontent.com/87397035/184444529-9024b528-6edb-433f-838d-d63e24df8e39.png)
![](https://user-images.githubusercontent.com/87397035/184444771-395642b2-cbb4-43f2-8ffb-e01a6e413589.png)
![](https://user-images.githubusercontent.com/87397035/184445729-c7549575-7c3d-4320-b0ba-3b3a6005cf5f.png)


### Links

- Solution URL: (https://github.com/zaidsidd360/snap)
- Live Site URL: (https://zaidsidd360.github.io/snap/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

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

So instead of doing something like this

```js
<div className="md:(w-full h-full flex flex-row-reverse)">foo</div>
```

you have to add the <code>md:</code> breakpoint prefix to every class like this

```js
<div className="md:w-full md:h-full md:flex md:flex-row-reverse">foo</div>
```

### Useful resources

- [Kevin Powell](https://www.youtube.com/kepowob) - Hats off to this guy, best CSS instructor in the game. A must watch for every FE developer.

## Author

- Frontend Mentor - [@zaidsidd360](https://www.frontendmentor.io/profile/zaidsidd360)
- Twitter - [@zaidsidd360](https://www.twitter.com/zaidsidd360)
