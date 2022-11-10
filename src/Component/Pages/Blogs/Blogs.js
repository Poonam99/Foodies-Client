import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-lg mx-auto'>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">Difference between SQL and NoSQL?</h2>
                </div>
                <p className="dark:text-gray-100">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.There are five practical differences between SQL and NoSQL: Language, Scalability, Structure, Properties, Support and communities</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">What is JWT, and how does it work?</h2>
                </div>
                <p className="dark:text-gray-100">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider.
                    Each JWT contains encoded JSON objects, including a set of claims.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">What is the difference between javascript and NodeJS?</h2>
                </div>
                <p className="dark:text-gray-100">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.
                    Node. js,  is an interpreter or execution environment for the JavaScript programming language.
                    *Javascript is a programming language that is used for writing scripts on the website.
                    *NodeJS is a Javascript runtime environment.
                    *Javascript can only be run in the browsers.
                    *We can run Javascript outside the browser with the help of NodeJS.
                    *It is basically used on the client-side.
                    *It is mostly used on the server-side.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">How does NodeJS handle multiple requests at the same time?</h2>
                </div>
                <p className="dark:text-gray-100">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide"></h2>
                </div>
                <p className="dark:text-gray-100"></p>
            </div>
        </div>
    );
};

export default Blogs;