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
        </div>
    );
};

export default Blogs;