import React, { useState, useRef, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import ProjectPage from './components/ProjectPage';
import Pagination from './components/Pagination';
import './App.css';

const projects = [
  {
    title: 'ChatBot Agent',
    description:
      'An intelligent conversational agent capable of understanding and responding to user queries in real-time.',
    imageParts: [
      '/images/chatbot-agent.png',
      '/images/chatbot-agent.png',
      '/images/chatbot-agent.png',
    ],
  },
  {
    title: 'Customer Churn Predictions',
    description:
      'A predictive analytics model that forecasts customer churn using historical usage and engagement data.',
    imageParts: [
      '/images/churn-predictions.png',
      '/images/churn-predictions.png',
      '/images/churn-predictions.png',
    ],
  },
  {
    title: 'Fraud Detection',
    description:
      'A machine learning pipeline to detect fraudulent transactions with high accuracy and low false positives.',
    imageParts: [
      '/images/fraud-detection.png',
      '/images/fraud-detection.png',
      '/images/fraud-detection.png',
    ],
  },
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // track scroll position to update pagination
  useEffect(() => {
    if (!showSplash && containerRef.current) {
      const handleScroll = () => {
        const scrollTop = containerRef.current.scrollTop;
        const idx = Math.round(scrollTop / window.innerHeight);
        setCurrent(idx);
      };
      const el = containerRef.current;
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="app-container" ref={containerRef}>
      <Pagination count={projects.length} current={current} />
      {projects.map((project, idx) => (
        <ProjectPage
          key={idx}
          id={`section-${idx}`}
          project={project}
          variant={idx % 3}
        />
      ))}
    </div>
  );
}
