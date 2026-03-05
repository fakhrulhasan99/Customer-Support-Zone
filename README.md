# React Basic Questions

## 1️⃣ What is JSX and why is it used?

JSX means JavaScript XML.
It allows us to write HTML-like code inside JavaScript.

## 2️⃣ Difference between State and Props

Props are used to pass data from a parent component to a child component. Props cannot be changed by the child component.
State is data that can change over time. When state changes, React re-renders the component.

## 3️⃣ What is useState hook?

useState is a React hook that lets us add state to a functional component.

## 4️⃣ How to share state between components?

To share state between components, we usually move the state to their common parent component. The parent keeps the state and sends it to child components using props.

## 5️⃣ How event handling works in React?

Event handling in React is similar to HTML but the naming style is different. React uses camelCase for events.