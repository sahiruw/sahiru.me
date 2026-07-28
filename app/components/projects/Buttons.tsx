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
      className="text-xs font-mono rounded-xl inline-flex items-center border font-medium py-2 px-4 transition-all duration-200 hover:opacity-80"
      style={{ background: 'var(--bg-muted)', borderColor: 'var(--border)', color: 'var(--text)' }}
    >
      <FaGithub className="mr-2 text-xl" />
      View Codebase
    </a>
  );
};

