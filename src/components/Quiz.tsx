import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number[] | number }>({});
  const [babyGender, setBabyGender] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentLoadingStep, setCurrentLoadingStep] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const { t, i18n } = useTranslation('quiz');

  const questions = t('quiz.questions', { returnObjects: true }) as Array<{
    question: string;
    options: string[];
    type?: string;
    instruction?: string;
    benefits?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    testimonial?: {
      image: string;
      quote: string;
      author: string;
      highlight: string;
    };
    persuasive?: {
      paragraphs: string[];
      signature: string;
      button: string;
    };
    summary?: {
      title: string;
      description: string;
      metrics: {
        [key: string]: {
          label: string;
          value: string;
          color: string;
          description: string;
        };
      };
      profile: {
        type: string;
        characteristics: string[];
      };
    };
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
    } else if (currentQuestion?.type === 'checkbox-grid') {
      // Handle multiple selection for grid layout
      const current = (selectedAnswers[currentStep] as number[]) || [];
      const newSelection = current.includes(answerIndex)
        ? current.filter(i => i !== answerIndex)
        : [...current, answerIndex];
      setSelectedAnswers({ ...selectedAnswers, [currentStep]: newSelection });
      return; // Don't auto-advance for checkbox-grid questions
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
    
    // Check if next question is the summary - start analysis loading
    const nextQuestion = questions[currentStep + 1];
    if (nextQuestion?.type === 'summary') {
      setTimeout(() => {
        setIsTransitioning(false);
        startAnalysis();
      }, 300);
      return;
    }
    
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      } else {
        // Last question - start loading
        setIsTransitioning(false);
        startLoading();
      }
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
    
    // Check if we're in development mode
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isDevelopment) {
      // For testing in localhost - just show an alert and return a test URL
      return `#checkout-${lang}`;
    }
    
    const checkoutUrls = {
      'pt': 'https://pay.kirvano.com/723dbad7-ba44-4223-acc9-a874956fc05b',
      'es': 'https://pay.hotmart.com/H100347979Y',
      'fr': 'https://pay.hotmart.com/B100347189Q',
      'it': 'https://pay.hotmart.com/X100347508U',
      'de': 'https://pay.hotmart.com/L100338792M',
      'en': 'https://pay.hotmart.com/Q100315324A'
    };
    
    return checkoutUrls[lang] || checkoutUrls['pt']; // Fallback para português
  };

  const handleFinalButton = () => {
    const checkoutUrl = getCheckoutUrl();
    const lang = i18n.language.split('-')[0];
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isDevelopment) {
      // Show alert for testing in localhost
      alert(`🚀 TESTE NO LOCALHOST\n\nEm produção, o usuário seria redirecionado para:\n\nIdioma: ${lang.toUpperCase()}\nURL: ${
        lang === 'pt' ? 'https://pay.kirvano.com/723dbad7-ba44-4223-acc9-a874956fc05b' :
        lang === 'es' ? 'https://pay.hotmart.com/H100347979Y' :
        lang === 'fr' ? 'https://pay.hotmart.com/B100347189Q' :
        lang === 'it' ? 'https://pay.hotmart.com/X100347508U' :
        lang === 'de' ? 'https://pay.hotmart.com/L100338792M' :
        'https://pay.hotmart.com/Q100315324A'
      }\n\n✅ Quiz funcionando perfeitamente!`);
      return;
    }
    
    window.location.href = checkoutUrl;
  };

  // Analysis loading logic
  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    const analysisDuration = 3000; // 3 seconds
    const progressInterval = 50; // Update every 50ms
    
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += (100 / (analysisDuration / progressInterval));
      setAnalysisProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsAnalyzing(false);
          setCurrentStep(currentStep + 1);
        }, 500);
      }
    }, progressInterval);
  };

  // Loading logic
  const startLoading = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    setCurrentLoadingStep(0);
    
    const loadingSteps = t('quiz.loading.steps', { returnObjects: true }) as string[];
    const stepDuration = 4000; // 4 seconds total
    const progressInterval = 50; // Update every 50ms
    
    let currentProgress = 0;
    let currentStepIndex = 0;
    
    const interval = setInterval(() => {
      currentProgress += (100 / (stepDuration / progressInterval));
      
      // Update current step based on progress
      const newStepIndex = Math.floor((currentProgress / 100) * loadingSteps.length);
      if (newStepIndex !== currentStepIndex && newStepIndex < loadingSteps.length) {
        setCurrentLoadingStep(newStepIndex);
        currentStepIndex = newStepIndex;
      }
      
      setLoadingProgress(Math.min(currentProgress, 100));
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          setShowCompletion(true); // Exibe a tela de conclusão do quiz
          setCurrentStep(totalSteps); // Garante que está na etapa de conclusão
        }, 500);
      }
    }, progressInterval);
  };

  // Analysis loading screen
  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Circular Progress */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#analysisGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - analysisProgress / 100)}`}
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient id="analysisGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">
                  {Math.round(analysisProgress)}%
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {t('quiz.analysis.title')}
            </h2>

            {/* Analysis Steps */}
            <div className="space-y-4">
              <div className={`flex items-center justify-center space-x-3 transition-all duration-500 ${
                analysisProgress >= 25 ? 'text-purple-600 opacity-100' : 'text-gray-400 opacity-60'
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  analysisProgress >= 25 ? 'bg-purple-500 text-white' : 'bg-gray-200'
                }`}>
                  {analysisProgress >= 25 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  )}
                </div>
                <span className="font-medium">{(t('quiz.analysis.steps', { returnObjects: true }) as string[])[0]}</span>
              </div>
              
              <div className={`flex items-center justify-center space-x-3 transition-all duration-500 ${
                analysisProgress >= 50 ? 'text-purple-600 opacity-100' : 'text-gray-400 opacity-60'
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  analysisProgress >= 50 ? 'bg-purple-500 text-white' : 'bg-gray-200'
                }`}>
                  {analysisProgress >= 50 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  )}
                </div>
                <span className="font-medium">{(t('quiz.analysis.steps', { returnObjects: true }) as string[])[1]}</span>
              </div>
              
              <div className={`flex items-center justify-center space-x-3 transition-all duration-500 ${
                analysisProgress >= 75 ? 'text-purple-600 opacity-100' : 'text-gray-400 opacity-60'
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  analysisProgress >= 75 ? 'bg-purple-500 text-white' : 'bg-gray-200'
                }`}>
                  {analysisProgress >= 75 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  )}
                </div>
                <span className="font-medium">{(t('quiz.analysis.steps', { returnObjects: true }) as string[])[2]}</span>
              </div>
              
              <div className={`flex items-center justify-center space-x-3 transition-all duration-500 ${
                analysisProgress >= 100 ? 'text-purple-600 opacity-100' : 'text-gray-400 opacity-60'
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  analysisProgress >= 100 ? 'bg-purple-500 text-white' : 'bg-gray-200'
                }`}>
                  {analysisProgress >= 100 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  )}
                </div>
                <span className="font-medium">{(t('quiz.analysis.steps', { returnObjects: true }) as string[])[3]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading screen
  if (isLoading) {
    const loadingSteps = t('quiz.loading.steps', { returnObjects: true }) as string[];
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Circular Progress */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - loadingProgress / 100)}`}
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-green-600">
              {t('quiz.loading.title')}
            </h2>

            {/* Loading Steps */}
            <div className="space-y-4">
              {loadingSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    index <= currentLoadingStep 
                      ? 'text-green-600 opacity-100' 
                      : 'text-gray-400 opacity-60'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index < currentLoadingStep 
                      ? 'bg-green-500 text-white' 
                      : index === currentLoadingStep 
                        ? 'bg-green-100 border-2 border-green-500' 
                        : 'bg-gray-200'
                  }`}>
                    {index < currentLoadingStep ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className={`w-2 h-2 rounded-full ${
                        index === currentLoadingStep ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    )}
                  </div>
                  <span className="text-left font-medium">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show completion message
  if (showCompletion && currentStep >= totalSteps) {
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
                  setShowCompletion(false);
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

  // Final result - new personalized result
  if (currentStep > totalSteps || (!showCompletion && currentStep >= totalSteps)) {
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

  const currentQuestion = questions[currentStep];
  
  // If we don't have a current question, we shouldn't render the quiz
  if (!currentQuestion) {
    return null;
  }
  
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

          <div className={`space-y-4 ${currentQuestion?.type === 'gender' ? 'grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0 items-center' : ''}`}>
            {currentQuestion?.type === 'testimonial' ? (
              <div className="space-y-8">
                {/* Testimonial Display */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
                  {/* Header with highlight number */}
                  <div className="text-center mb-8">
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                      {currentQuestion.testimonial?.highlight}
                    </div>
                    <p className="text-lg text-gray-600">
                      {t('quiz.testimonial.subtitle')}
                    </p>
                  </div>
                  
                  {/* Profile and testimonial */}
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Profile image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={currentQuestion.testimonial?.image} 
                          alt="Juliana"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="relative">
                        {/* Quote marks */}
                        <div className="text-6xl text-purple-300 absolute -top-4 -left-2 font-serif">"</div>
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic pl-8 pr-4">
                          {currentQuestion.testimonial?.quote}
                        </blockquote>
                        <div className="text-6xl text-purple-300 absolute -bottom-4 right-0 font-serif transform rotate-180">"</div>
                      </div>
                      
                      {/* Author */}
                      <div className="mt-6 text-purple-600 font-semibold text-base md:text-lg">
                        {currentQuestion.testimonial?.author}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-pink-200/30 rounded-full blur-lg"></div>
                </div>
                
                {/* Continue Button */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => handleAnswerClick(0)}
                    disabled={isTransitioning}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion.options[0]}
                  </button>
                </div>
              </div>
            ) : currentQuestion?.type === 'benefits' ? (
              <div className="space-y-8">
                {/* Benefits Display */}
                <div className="space-y-6">
                  {currentQuestion.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border-l-4 border-purple-400">
                      <div className="text-3xl md:text-4xl flex-shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                      {/* Arrow connector */}
                      {index < (currentQuestion.benefits?.length || 0) - 1 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-20">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Continue Button */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => handleAnswerClick(0)}
                    disabled={isTransitioning}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion.options[0]}
                  </button>
                </div>
              </div>
            ) : currentQuestion?.type === 'persuasive' ? (
              <div className="space-y-8">
                {/* Persuasive Content Display */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 md:p-12 border border-teal-100 relative overflow-hidden">
                  {/* Decorative illustration area */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    {/* Left side - Illustration */}
                    <div className="flex-shrink-0 lg:w-1/3">
                      <div className="relative">
                        {/* Abstract illustration representing support and organization */}
                        <div className="w-64 h-64 mx-auto relative">
                          {/* Background elements */}
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-green-100 rounded-3xl transform rotate-3"></div>
                          <div className="absolute inset-4 bg-white rounded-2xl shadow-lg border border-teal-200/50"></div>
                          
                          {/* Central elements */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-4">
                              {/* Checkmark list */}
                              <div className="bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              
                              {/* Abstract data/progress elements */}
                              <div className="space-y-2">
                                <div className="h-2 bg-teal-200 rounded-full"></div>
                                <div className="h-2 bg-teal-300 rounded-full w-4/5"></div>
                                <div className="h-2 bg-teal-400 rounded-full w-3/5"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Floating elements */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
                          <div className="absolute bottom-8 left-6 w-6 h-6 bg-teal-300 rounded-full opacity-40"></div>
                          <div className="absolute top-1/2 right-2 w-4 h-4 bg-green-400 rounded-full opacity-50"></div>
                          
                          {/* Clock icon in corner */}
                          <div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-teal-200">
                            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12,6 12,12 16,14"></polyline>
                            </svg>
                          </div>
                          
                          {/* Chart elements */}
                          <div className="absolute bottom-6 right-8 space-y-1">
                            <div className="flex items-end space-x-1">
                              <div className="w-2 h-6 bg-teal-300 rounded-sm"></div>
                              <div className="w-2 h-8 bg-teal-400 rounded-sm"></div>
                              <div className="w-2 h-10 bg-teal-500 rounded-sm"></div>
                              <div className="w-2 h-7 bg-green-400 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-1 lg:w-2/3">
                      {/* Persuasive paragraphs */}
                      <div className="space-y-6 text-gray-700">
                        {currentQuestion.persuasive?.paragraphs.map((paragraph, index) => (
                          <p key={index} className="text-base md:text-lg leading-relaxed">
                            {paragraph.split(' ').map((word, wordIndex) => {
                              // Highlight key terms
                              const keyTerms = ['exaustivo', 'cansaço físico', 'noites mal dormidas', 'paciência', 'saúde mental', 'autoestima', 'ambiente certo', 'rotina adequada', 'acolhimento emocional', 'Mamãe Tranquila', 'sistema prático', 'especialistas', 'noites intermináveis', 'descansar'];
                              const isKeyTerm = keyTerms.some(term => word.toLowerCase().includes(term.toLowerCase()));
                              
                              return (
                                <span key={wordIndex} className={isKeyTerm ? 'font-semibold text-gray-900' : ''}>
                                  {word}{wordIndex < paragraph.split(' ').length - 1 ? ' ' : ''}
                                </span>
                              );
                            })}
                          </p>
                        ))}
                      </div>
                      
                      {/* Signature */}
                      <div className="mt-8 pt-6 border-t border-teal-200">
                        <p className="text-sm font-medium text-teal-700 whitespace-pre-line">
                          {currentQuestion.persuasive?.signature}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative background elements */}
                  <div className="absolute top-8 right-8 w-24 h-24 bg-teal-200/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-8 left-8 w-32 h-32 bg-green-200/20 rounded-full blur-3xl"></div>
                </div>
                
                {/* Continue Button */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => handleAnswerClick(0)}
                    disabled={isTransitioning}
                    className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold py-4 px-12 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion.persuasive?.button || currentQuestion.options[0]}
                  </button>
                </div>
              </div>
            ) : currentQuestion?.type === 'checkbox-grid' ? (
              <div className="space-y-8">
                {/* Grid Layout for Checkbox Options */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = ((selectedAnswers[currentStep] as number[]) || []).includes(index);
                    
                    // Extract emoji and text
                    const parts = option.split(' ');
                    const emoji = parts[0];
                    const text = parts.slice(1).join(' ');
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={isTransitioning}
                        className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                          isSelected 
                            ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-400 shadow-lg' 
                            : 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        {/* Selection indicator */}
                        <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          isSelected 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500' 
                            : 'border-gray-300 group-hover:border-purple-400'
                        }`}>
                          {isSelected && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="text-center space-y-3">
                          <div className="text-3xl md:text-4xl">
                            {emoji}
                          </div>
                          <div className={`text-sm md:text-base font-medium leading-tight transition-colors duration-300 ${
                            isSelected ? 'text-purple-700' : 'text-gray-700 group-hover:text-purple-600'
                          }`}>
                            {text}
                          </div>
                        </div>
                        
                        {/* Hover effect */}
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                          isSelected 
                            ? 'bg-gradient-to-br from-purple-100/20 to-pink-100/20' 
                            : 'bg-transparent group-hover:bg-purple-50/30'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : currentQuestion?.type === 'summary' ? (
              <div className="space-y-8">
                {/* Personal Summary Display */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {currentQuestion.summary?.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {currentQuestion.summary?.description}
                    </p>
                  </div>

                  {/* Metrics Section */}
                  <div className="space-y-6 mb-8">
                    {Object.entries(currentQuestion.summary?.metrics || {}).map(([key, metric]) => {
                      const getColorClasses = (color: string) => {
                        switch (color) {
                          case 'red':
                            return {
                              bg: 'bg-red-50',
                              border: 'border-red-200',
                              text: 'text-red-700',
                              badge: 'bg-red-100 text-red-800'
                            };
                          case 'orange':
                            return {
                              bg: 'bg-orange-50',
                              border: 'border-orange-200',
                              text: 'text-orange-700',
                              badge: 'bg-orange-100 text-orange-800'
                            };
                          case 'yellow':
                            return {
                              bg: 'bg-yellow-50',
                              border: 'border-yellow-200',
                              text: 'text-yellow-700',
                              badge: 'bg-yellow-100 text-yellow-800'
                            };
                          default:
                            return {
                              bg: 'bg-gray-50',
                              border: 'border-gray-200',
                              text: 'text-gray-700',
                              badge: 'bg-gray-100 text-gray-800'
                            };
                        }
                      };

                      const colors = getColorClasses(metric.color);

                      return (
                        <div key={key} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6`}>
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-lg font-semibold text-gray-800">
                              {metric.label}
                            </h4>
                            <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}>
                              {metric.value}
                            </span>
                          </div>
                          <p className={`${colors.text} text-sm md:text-base`}>
                            {metric.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Profile Section */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/mae.webp" 
                            alt="Mãe dedicada"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Profile Info */}
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                          Seu perfil: {currentQuestion.summary?.profile.type}
                        </h4>
                        <div className="space-y-3">
                          {currentQuestion.summary?.profile.characteristics.map((characteristic, index) => (
                            <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm md:text-base">
                                {characteristic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Continue Button */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => handleAnswerClick(0)}
                    disabled={isTransitioning}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-12 rounded-xl text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion.options[0]}
                  </button>
                </div>
              </div>
            ) : (
              currentQuestion?.options.map((option, index) => {
              const isSelected = currentQuestion?.type === 'checkbox' 
                ? ((selectedAnswers[currentStep] as number[]) || []).includes(index)
                : false;
              const isScale = currentQuestion?.type === 'scale';
              const isGender = currentQuestion?.type === 'gender';
              const scaleColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
              
              if (isGender) {
                const imageSrc = index === 0 ? '/lovable-uploads/boy.png' : '/lovable-uploads/girl.png';
                const gradientClass = index === 0 
                  ? 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100' 
                  : 'bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100';
                const hoverGradientClass = index === 0
                  ? 'hover:from-sky-100 hover:via-blue-100 hover:to-indigo-200'
                  : 'hover:from-pink-100 hover:via-rose-100 hover:to-purple-200';
                const borderColor = index === 0 ? 'border-blue-200/60' : 'border-pink-200/60';
                const hoverBorderColor = index === 0 ? 'hover:border-blue-300' : 'hover:border-pink-300';
                const shadowColor = index === 0 ? 'shadow-blue-100/30' : 'shadow-pink-100/30';
                const hoverShadowColor = index === 0 ? 'hover:shadow-blue-200/50' : 'hover:shadow-pink-200/50';
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isTransitioning}
                    className={`group relative overflow-hidden ${gradientClass} ${hoverGradientClass} border-2 ${borderColor} ${hoverBorderColor} rounded-3xl p-8 transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl ${shadowColor} ${hoverShadowColor} disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <div className="text-center relative z-10">
                      {/* Image container with improved styling */}
                      <div className="relative mb-8 mx-auto">
                        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
                          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl shadow-inner border border-white/40" />
                          <div className="relative z-10 w-full h-full p-4">
                            <img 
                              src={imageSrc} 
                              alt={option}
                              className="w-full h-full object-contain drop-shadow-lg filter"
                            />
                          </div>
                          {/* Subtle glow effect */}
                          <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${index === 0 ? 'bg-gradient-to-r from-blue-300 to-cyan-300' : 'bg-gradient-to-r from-pink-300 to-rose-300'} blur-xl -z-10`} />
                        </div>
                      </div>
                      
                      {/* Text with improved styling */}
                      <div className="relative">
                        <span className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${index === 0 ? 'text-blue-700 group-hover:text-blue-800' : 'text-pink-700 group-hover:text-pink-800'}`}>
                          {option}
                        </span>
                        <div className="flex items-center justify-center mt-3">
                          <div className={`w-12 h-1 rounded-full transition-all duration-300 ${index === 0 ? 'bg-blue-400 group-hover:bg-blue-500' : 'bg-pink-400 group-hover:bg-pink-500'} group-hover:w-16`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
                    
                    {/* Subtle floating elements */}
                    <div className={`absolute top-6 right-6 w-3 h-3 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform scale-0 group-hover:scale-100 ${index === 0 ? 'bg-blue-300' : 'bg-pink-300'}`} />
                    <div className={`absolute bottom-8 left-8 w-2 h-2 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 transform scale-0 group-hover:scale-100 ${index === 0 ? 'bg-cyan-400' : 'bg-rose-400'}`} />
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
            })
            )}
          </div>

          {(currentQuestion?.type === 'checkbox' || currentQuestion?.type === 'checkbox-grid') && (
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
