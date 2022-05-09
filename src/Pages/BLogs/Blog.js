import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
        <h2 className='text-center mt-3'>BLog</h2>

        <div className='blog-txt'>
            <p><b>Node Js</b></p>
            <p>
            NodeJS হল একটি ক্রস-প্ল্যাটফর্ম এবং ওপেনসোর্স জাভাস্ক্রিপ্ট রানটাইম environment যা সার্ভার-সাইডে জাভাস্ক্রিপ্ট চালানোর অনুমতি দেয়। Nodejs জাভাস্ক্রিপ্ট কোড ব্রাউজারের বাইরে চালানোর অনুমতি দেয়। Nodejs অনেকগুলো মডিউল নিয়ে আসে।
            </p>
            <p><b>JavaScript</b></p>
            <p>
            জাভাস্ক্রিপ্ট একটি স্ক্রিপ্টিং ভাষা। এটি বেশিরভাগই JS হিসাবে সংক্ষিপ্ত হয়। এটা বলা যেতে পারে যে জাভাস্ক্রিপ্ট ECMA স্ক্রিপ্টের আপডেট সংস্করণ। জাভাস্ক্রিপ্ট একটি উচ্চ-স্তরের প্রোগ্রামিং ভাষা যা Oops concenpts এর উপর ব্যবহার করে এবং এটি prototype inheritance এর উপর ভিত্তি করে চলে।
            </p>

        </div>

        <div className='blog-txt'>
            <p><b>SQL</b></p>
            <p>
                1. These database have predefined  schema
                2. They are vertically scalable
                3. They follow ACID property
            </p>
            <p><b>NoSQL</b></p>
            <p>
                1. They have dynamic schema
                2. They are horizontally scalable
                3. They doesn't follow ACID property they follow CAP
            </p>
        </div>

        <div className='blog-txt'>
            <p><b>What is the purpose of jwt and how does it work?
</b></p>
            <p>JSON Web Token is know as JWT is an s an open standard used to share information between two parties securely a client and a server.</p>
            <p>একটি JWT হল একটি স্ট্রিং যা তিনটি অংশ নিয়ে গঠিত, বিন্দু (.) দ্বারা পৃথক করা হয় এবং base64 ব্যবহার করে ক্রমিক করা হয়। সবচেয়ে সাধারণ সিরিয়ালাইজেশন ফরম্যাটে, কমপ্যাক্ট সিরিয়ালাইজেশন, JWT দেখতে এইরকম কিছু: xxxxx.yyyyy.zzzzz।</p>
        </div>

    </div>

    );
};

export default Blog;