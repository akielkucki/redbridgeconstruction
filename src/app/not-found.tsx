import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-5 text-center">
            <div className="max-w-lg">
                <h1 className="text-9xl font-bold text-gray-200 leading-none m-0">404</h1>
                <h2 className="text-4xl font-semibold mt-4 mb-2 tracking-tight text-gray-900">Page Not Found</h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <a
                    href="/"
                    className="inline-block px-7 py-3 bg-gray-900 text-white rounded-lg font-medium text-base hover:bg-gray-800 transition-colors duration-200"
                >
                    Return to Homepage
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;