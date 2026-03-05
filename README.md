# React Basic Questions

## 1️⃣ What is JSX and why is it used?

JSX means JavaScript XML.
It allows us to write HTML-like code inside JavaScript.

## 2️⃣ Difference between State and Props

Props are used to pass data from a parent component to a child component. Props cannot be changed by the child component.
State is data that can change over time. When state changes, React re-renders the component.

## 3️⃣ What is the useState hook, and how does it work?

useState is a React hook that lets us add state to a functional component.
It returns two things: the current state value and a function to update that state.

## 4️⃣ How can you share state between components in React?

To share state between components, we usually move the state to their common parent component. The parent keeps the state and sends it to child components using props.

## 5️⃣ How is event handling done in React?

Event handling in React is similar to HTML but the naming style is different. React uses camelCase for events.