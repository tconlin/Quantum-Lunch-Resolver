"use client";

import React, { useState } from "react";

const LunchDecider = () => {
  const [isThinking, setIsThinking] = useState(false);
  const [decision, setDecision] = useState(null);

  const makeImportantDecision = () => {
    setIsThinking(true);
    setDecision(null);

    // Extremely advanced decision-making algorithm
    setTimeout(() => {
      setDecision(Math.random() > 0.5 ? "🌯 Get Burritos" : "🍕 Order Pizza");
      setIsThinking(false);
    }, 2000);
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white shadow">
        <div className="p-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥪</span>
              <span className="text-lg font-semibold">
                Quantum Lunch Resolver™
              </span>
            </div>

            <button
              onClick={makeImportantDecision}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isThinking}
            >
              {isThinking ? "Computing..." : "Make Critical Decision"}
            </button>

            {isThinking && (
              <div className="flex flex-col items-center space-y-2">
                <div className="animate-spin text-2xl">⚡</div>
                <div className="text-sm text-gray-500">
                  Analyzing market conditions...
                </div>
              </div>
            )}

            {decision && (
              <div className="text-xl font-bold text-center">{decision}</div>
            )}

            <div className="text-xs text-gray-400 text-center">
              Powered by state-of-the-art random number generation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchDecider;
