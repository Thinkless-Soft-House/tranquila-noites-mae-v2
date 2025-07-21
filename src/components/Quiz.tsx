import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number[] | number }>({});
  const [babyGender, setBabyGender] = useState<string>('');
  const { t, i18n } = useTranslation('quiz');

  const questions = t('quiz.questions', { returnObjects: true }) as Array<{
    question: string;
    options: string[];
    type?: string;
    instruction?: string;
  }>;

  const totalSteps = questions.length;

  const handleAnswerClick = (answerIndex: number) => {
    const currentQuestion = questions[currentStep];
    
    // Store gender selection for later use
    if (currentQuestion?.type === 'gender') {
      setBabyGender(currentQuestion.options[answerIndex]);
    }
    
    if (currentQuestion?.type === 'checkbox') {
      // Handle multiple selection
      const current = (selectedAnswers[currentStep] as number[]) || [];
      const newSelection = current.includes(answerIndex)
        ? current.filter(i => i !== answerIndex)
        : [...current, answerIndex];
      setSelectedAnswers({ ...selectedAnswers, [currentStep]: newSelection });
      return; // Don't auto-advance for checkbox questions
    } else {
      // Handle single selection
      setSelectedAnswers({ ...selectedAnswers, [currentStep]: answerIndex });
    }

    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(totalSteps); // Final step
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleNextFromCheckbox = () => {
    const selectedCount = ((selectedAnswers[currentStep] as number[]) || []).length;
    if (selectedCount === 0) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(totalSteps + 1); // Go to final result
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const getCheckoutUrl = () => {
    const lang = i18n.language.split('-')[0]; // Remove region code if present
    return `/checkout?lang=${lang}`;
  };

  const handleFinalButton = () => {
    window.location.href = getCheckoutUrl();
  };

  // Final result - new personalized result
  if (currentStep > totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className={`max-w-2xl mx-auto text-center transform transition-all duration-500 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t('quiz.finalResult.title')}
              </h2>
              <div className="text-lg text-gray-600 mb-8 whitespace-pre-line">
                {t('quiz.finalResult.description')}
              </div>
            </div>
            
            <button
              onClick={handleFinalButton}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('quiz.finalResult.button')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Original completion message
  if (currentStep >= totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className={`max-w-2xl mx-auto text-center transform transition-all duration-500 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t('quiz.completion.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('quiz.completion.description')}
              </p>
            </div>
            
            <button
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentStep(totalSteps + 1);
                  setIsTransitioning(false);
                }, 300);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('quiz.completion.button')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {t('quiz.progress.question')} {currentStep + 1} {t('quiz.progress.of')} {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-500 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {/* Back Button */}
          {currentStep > 0 && (
            <div className="mb-4">
              <button
                onClick={handleBackStep}
                disabled={isTransitioning}
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 disabled:opacity-50"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('quiz.buttons.back')}
              </button>
            </div>
          )}

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center leading-tight">
            {currentQuestion?.question}
          </h2>
          
          {currentQuestion?.instruction && (
            <p className="text-base text-gray-600 mb-6 text-center">
              {currentQuestion.instruction}
            </p>
          )}

          <div className={`space-y-4 ${currentQuestion?.type === 'gender' ? 'grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0' : ''}`}>
            {currentQuestion?.options.map((option, index) => {
              const isSelected = currentQuestion?.type === 'checkbox' 
                ? ((selectedAnswers[currentStep] as number[]) || []).includes(index)
                : false;
              const isScale = currentQuestion?.type === 'scale';
              const isGender = currentQuestion?.type === 'gender';
              const scaleColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
              
              if (isGender) {
                const imageSrc = index === 0 ? '/lovable-uploads/boy.png' : '/lovable-uploads/girl.png';
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isTransitioning}
                    className="group bg-white border-2 border-gray-200 rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="text-center">
                      <div className="relative mb-4 mx-auto w-24 h-24 md:w-32 md:h-32">
                        <img 
                          src={imageSrc} 
                          alt={option}
                          className="w-full h-full object-contain rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="text-lg md:text-xl font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={isTransitioning}
                  className={`w-full p-4 md:p-6 text-left border-2 rounded-xl transition-all duration-300 transform hover:scale-102 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSelected 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-400' 
                      : isScale
                      ? 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-gray-300'
                      : 'bg-gray-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center">
                    {currentQuestion?.type === 'checkbox' ? (
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                        isSelected ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500' : 'border-gray-400'
                      }`}>
                        {isSelected && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    ) : isScale ? (
                      <div className={`w-6 h-6 rounded-full mr-4 flex-shrink-0 ${scaleColors[index] || 'bg-gray-400'}`} />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </div>
                    )}
                    <span className="text-gray-700 font-medium text-base md:text-lg">
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {currentQuestion?.type === 'checkbox' && (
            <div className="mt-6 text-center">
              <button
                onClick={handleNextFromCheckbox}
                disabled={((selectedAnswers[currentStep] as number[]) || []).length === 0}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t('quiz.buttons.continue')}
              </button>
            </div>
          )}
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSteps }, (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
