import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">

                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">Difference between SQL and NoSQL?</h2>
                </div>
                <p className="dark:text-gray-100">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                    There are five practical differences between SQL and NoSQL:Language,Scalability,Structure,Properties,Support and communities</p>
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
        </div>
    );
};

export default Blogs;