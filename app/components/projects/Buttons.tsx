import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

interface GithubButtonProps {
  url: string;
}

export const GithubButton: React.FC<GithubButtonProps> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm rounded-xl inline-flex items-center bg-gray-800 text-white font-medium py-2 px-4 hover:bg-gray-700 transition-all duration-300"
    >
      <FaGithub className="mr-2 text-xl" />
      View Codebase
    </a>
  );
};

