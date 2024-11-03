import React from 'react';

const Deprecation = () => {
  return (
    <div className="w-full bg-red-500 border-b border-white-500/30 text-white py-2 px-4 text-center">
      <p>
        This URL is no longer maintained. Please use{' '}
        <a 
          href="https://sylvester-sila.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline font-medium hover:text-yellow-400 transition-colors"
        >
          this one
        </a>{"."}
      </p>
    </div>
  );
};

export default Deprecation;
