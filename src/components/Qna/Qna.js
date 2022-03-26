import React from 'react';
import './Qna.css';
const Qna = () => {
    return (
        <div className='qna-area'>
           <h2>Questions</h2>
           <div className='qna-container'>
                <h5 className='question'>How React Works?</h5>    
                <p className='ans'>
                    React ES6 import Syntax ব্যবহার করে একটা Library কে একটি Variable এ Contain করে এবং সেই Variable এর সকল Feature variable এর মাধ্যমে ব্যবহার যোগ্য। Website এর প্রতিটি অংশ মূলত এক একটি Component । একটি Component এর ভিতরে একাধিক Nested Component থাকতে পারে এবং সবগুলো Components Root Component এর under থাকে। এছাড়া কম্পোনেন্ট সমূহ JSX দিয়ে লিখা হয় । যা দেখতে HTML মত হলেও এটি HTML নয়। শর্বশেষ সবগুলো component কে webpack এর মাধ্যমেএকটি Bundle.js ফাইলে রুপান্তর করা হয়, যা ব্রাউজার সহজেই বুঝতে পারে, যা মূলত Vanilla JS। যখন কোন DOM এ পরিবর্তন করা হয় তখন React এর তৈরী করা Virtual Dom এবং Algorithom এর মাধম্য সহযে রিয়েল ডোমের সাথে কম্পেয়ার করে পরিবর্তন যোগ্য DOM কেই শুধু পরিবর্তন করে থাকে । এছারা Component properties আকারে Data প্রেরন করতে পারে এবং এটি One way data binding যে কোন একদিক  ডাটা ফ্লো করতে পাড়ে Reverse প্রক্রিয়ায় Data Flow করতে পাড়ে  না  । এছারা State Dynamic Storage প্রদান করে, এর মাধ্যমে যদি কোন Data এর পরিবর্তন ঘটে তবে তা নতুন করে Render হবে। যখন কোন Component mount, update, unmount  তখন UseEffect Hook use হয়ে থাকে।
                </p>
           </div>
           <div className='qna-container'>
                <h5 className='question'>Props vs State difference?</h5>    
                <div className="difference two">
                    <div className='ans'>
                        <h3>Props</h3>
                        <p>React এর Element সমূহ মূলত কোন HTML Element নয়। React Element সমূহ হলো Valid JavaScript Object। Props  Properties এর Short Form, Component এর মাধ্যমে Props আকারে Data প্রেরন করা থাকে, যা মূলত Object হিসাবে পাওয়া যায় এবং তা পরতবর্তীতে উক্ত Component এ ব্যাবহার করা বা Data সমূহকে Manipulation করার কাজে ব্যবহার করা বা Child Component এ Data প্রেরনের মত কাজ গুলো করার সুবিধা প্রাদান করে থাকে।</p>
                    </div>
                    <div className='ans'>
                        <h3>State</h3>
                        <p>State হলো React Hook যা state Variable গুলোকে Functional Component রাখতে দেয়। এখানে একটি Initial Value এবং একটি SetterValue Function প্রদান করে থাকে। Setter Function এর মাধ্যমে Initial Value কে পরিবর্তন করা হয়ে থাকে। অর্থাৎ যদি পরবর্তিতে Setter Function এর মাধ্যমে কোন মান প্রাদান করা হয় তা Initial Value কে  Update করে। পরিবর্তন যোগ্য মান/ভ্যালুর জন্য State ব্যবহার করা হয়ে থাকে। State Asynchronous ভাবে কাজ করে থাকে, যার ফলে Line by Line Code Compile না করে State এর Initial মান প্রদান করে দেয়, পরবর্তীতে ইনিশিয়াল মান Update/Code Compile করে New Value/Data প্রদান করে থাকে। ডাটা ফেচ, একটি ডাটার উপর নির্ভর করে ডাটা শো করানো, অর্থাৎ একটি ডাটার মান পাওয়ার পর অপর ডাটা শো করানো ইত্যাদি কাজ সম্পূর্ন করে থাকে।</p>
                    </div>
                </div>
           </div>
           <div className='qna-container'>
                <h5 className='question'>How useState Works ?</h5>    
                <p className='ans'>useState একটি React Hook যা state Variable গুলোকে Functional Component রাখতে দেয়। এখানে একটি Initial Value এবং একটি SetterValue Function প্রদান করে থাকে। Setter Function এর মাধ্যমে Initial Value কে পরিবর্তন করা হয়ে থাকে। অর্থাৎ যদি পরবর্তিতে Setter Function এর মাধ্যমে কোন মান প্রাদান করা হয় তা Initial Value কে  Update করে। পরিবর্তন যোগ্য মান/ভ্যালুর জন্য useState ব্যবহার করা হয়ে থাকে। useState Asynchronous ভাবে কাজ করে থাকে, যার ফলে Line by Line Code Compile না করে useState এর Initial মান প্রদান করে দেয়, পরবর্তীতে ইনিশিয়াল মান Update/Code Compile করে New Value/Data প্রদান করে থাকে। </p>
           </div>
        </div>
    );
};

export default Qna;