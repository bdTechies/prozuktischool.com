---
slug: 'রিয়েক্ট-হুক-ব্যবহার-করে-back-to-top-বাটন-কম্পোনেন্ট-তৈরি-করা'
title: 'রিয়েক্ট হুক ব্যবহার করে Back To Top বাটন কম্পোনেন্ট তৈরি করা'
author: 'sh4hids'
excerpt: ''
series: ''
language: 'React'
date: '2020-08-10'
published: true
tags:
  - 'রিয়েক্ট'
  - 'স্টাইল্‌ড কম্পোনেন্ট'
cover: ''
---

আসসালামু আলাইকুম। আশা করি সবাই ভালো আছেন। মাঝে মাঝে ওয়েবে সার্ফিং করার সময় কিছু ওয়েবসাইটে ছোট ছোট কিছু ফিচার চোখে পড়ে, যার কারণে এক্সপেরিয়েন্সটা হয় অসাধারণ। এমনি একটি ছোট্ট ফিচার হচ্ছে Back To Top বাটন। লম্বা ওয়েব পেইজে অনেকদূর স্ক্রল করার পর মাঝে মাঝে পেইজের শুরুতে যাওয়ার প্রয়োজন হয়। এমন পরিস্থিতিতে আবার স্ক্রল করে উপরে যাওয়াটা খুবই বিরক্তিকর।

Back To Top বাটন থাকলে মাত্র এক ক্লিকেই কাজটা করে ফেলা যায়। এই টিউটোরিয়ালটিতে আমরা শিখবো কীভাবে ReactJS হুক (🪝) এবং স্টাইল্‌ড কম্পোনেন্ট ব্যবহার করে Back To Top বাটন তৈরি করা যায়। আমাদের বাটনে যে ফিচারগুলো থাকছে:

- শুরুতে বাটনটি হিডেন থাকবে। একটি নির্দিষ্ট উচ্চতা পর্যন্ত স্ক্রল করলে তা দেখানো শুরু করবে
- বাটনে ক্লিক করলে তা আমাদের পেইজের শুরুতে নিয়ে যাবে এবং বাটনটি আবার হাইড হয়ে যাবে

### বাটন ডিজাইন

প্রথমেই আপনার প্রজেক্টের কম্পোনেন্ট ফোল্ডারে `BackToTopButton.js` নামে একটি ফাইল তৈরি করুন। বাটনটি ডিজাইন করার জন্য নিচের কোডটুকু কপি করে আপনার ফাইলে পেস্ট করুন। স্টাইলিং এর জন্য আমরা স্টাইল্‌ড কম্পোনেন্ট ব্যবহার করবো।

```javascript
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  right: 32px;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: #3b3b98;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: flex;

  &:hover {
    opacity: 1;
  }
`;

const BackToTopButton = () => {
  return (
    <ButtonContainer>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;
```

<div class="notice-box tips">
  <p>যেকোনো svg ফাইলকে রিয়েক্ট কম্পোনেন্টে কনভার্ট করতে পারবেন <a href="https://react-svgr.com/playground/">react-svgr.com</a> সাইটে।</p>
</div>

### শো/হাইড ও স্ক্রল ফিচার

শো/হাইড ও স্ক্রল ফিচার ইমপ্লিমেন্ট করার জন্য আমরা রিয়েক্টের দুটি বিল্ট-ইন হুক ব্যবহার করবো।

১। [useState](https://reactjs.org/docs/hooks-state.html) হুক: ফাংশনাল কম্পোনেন্টে স্টেইট ম্যানেজ করার জন্য ব্যবহৃত হয়।

২। [useEffect](https://reactjs.org/docs/hooks-effect.html) হুক: ফাংশনাল কম্পোনেন্টে সাইড ইফেক্ট পারফর্ম করার জন্য ব্যবহৃত হয়।

#### শো/হাইড করা

স্ক্রল বাটনটি শো বা হাইড করার জন্য `ButtonContainer` এ আমরা CSS `display` প্রপার্টি ব্যবহার করবো। এর ভ্যালু `isScrollButtonVisible` এই ভ্যারিয়েবলটির উপর নির্ভর করে `flex` অথবা `none`
হবে।

```javascript
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.span`
  ... // other styles
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
`;
```

যেহেতু স্ক্রলের উপর নির্ভর করে বাটনটি শো অথবা হাইড করা হবে, তাই রিয়েক্টের বিল্ট-ইন `useEffect` হুুুকটি ব্যবহার করে স্ক্রলের সময় বর্তমান স্ক্রল হাইটটি আমাদের জানতে হবে। স্ক্রল হাইট ৪০০ পিক্সেলের সমান বা কম হলে `isScrollButtonVisible` ভ্যারিয়েবলটির ভ্যালু আমরা `true` করে দেবো। আর এর চাইতে বেশি হলেই `isScrollButtonVisible` ভ্যারিয়েবলের ভ্যালু আবার `false` করে দিব।

```javascript
const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight)
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);

  }, [showButton]);

  return (
    <ButtonContainer isScrollButtonVisible={showButton}>
      ...
    </ButtonContainer>
  );
};

export default BackToTopButton;
```

#### স্ক্রল ফিচার

এখন আমাদের বাটনটিকে পুরোপুরি কার্যকর করার জন্য `scrollToTop` নামে ছোট্ট একটি ফাংশন লিখে তা `ButtonContainer` এর `onClick` এ বসিয়ে দিতে হবে। এই ফাংশনটির কাজ হবে `window` এর স্ক্রল পজিশন শূণ্য করে দেয়া।

```javascript
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

এখন আমাদের কোডের বিভিন্ন অংশগুলো এক করলে Back To Top বাটনের পূর্ণাঙ্গ কোড হবে নিচের মতো:

```javascript
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  right: 32px;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: #3b3b98;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;
```

আপনার প্রজেক্টের যেই পেইজেই Back To Top Button ব্যবহার করতে চান সেই পেইজেই এই কম্পোনেন্টটি ইমপোর্ট করে অন্য যেকোনো রিয়েক্ট কম্পোনেন্টের মতো ব্যবহার করতে পারেন।

[এখানে](https://codesandbox.io/s/back-top-button-with-react-hook-jh8zv) কম্পোনেন্টটির একটি লাইভ ডেমো দেখতে পাবেন।
