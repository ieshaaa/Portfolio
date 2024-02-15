'use client';

import React,{useState} from "react";
import { CodeIcon, EyeIcon } from '@heroicons/react/outline';
import toast from 'react-hot-toast';


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack }) => {
  const [showMessage, setShowMessage] = useState(true);

  const handlePreviewClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of opening the link immediately

    if (showMessage) {
      toast.success('Opening preview. Please wait...', { duration: 7000 });
      setTimeout(() => {
        setShowMessage(false);
        window.open(previewUrl, '_blank');
      }, 3000); // 30 seconds delay
    } else {
      window.open(previewUrl, '_blank');
    }
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={imgUrl} alt={title} />
        <div className="overlay">
          <a href={gitUrl} className="icon-link">
            <CodeIcon className="icon" />
          </a>
          <a href={previewUrl} className="icon-link" onClick={handlePreviewClick}>
            <EyeIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="project-details">
        <h5 className="project-title">{title}</h5>
        <p className="project-description">{description}</p>
        <p className="project-techStack"><span>Stacks: </span>{techStack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
