import { useState, useRef, useEffect } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to SoftSell! How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample questions
  const sampleQuestions = [
    "How do I sell my license?",
    "What software can I buy?",
    "How does the pricing work?",
    "Is my transaction secure?",
    "How long does the process take?"
  ];

  // Mock AI response function (replace with actual OpenAI API call)
  const getAIResponse = async (question) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock responses based on keywords
    let response = "I'm not sure about that. Could you provide more details?";
    
    if (question.toLowerCase().includes('sell')) {
      response = "To sell your license, click on the 'Sell License' button on our homepage. You'll need to provide details about your software, license type, and asking price. Our team will verify the license and list it on our marketplace within 24 hours.";
    } else if (question.toLowerCase().includes('buy') || question.toLowerCase().includes('purchase')) {
      response = "We offer a wide range of software licenses including Microsoft, Adobe, Autodesk, and many more. Browse our marketplace to see current listings or use the search function to find specific software.";
    } else if (question.toLowerCase().includes('price') || question.toLowerCase().includes('cost')) {
      response = "Our pricing is transparent - sellers set their asking price, and we add a 10% service fee for buyers. This fee covers our verification process and secure transaction handling.";
    } else if (question.toLowerCase().includes('secure') || question.toLowerCase().includes('safe')) {
      response = "All transactions on SoftSell are secure. We use escrow payments, verify all licenses before transfer, and ensure compliance with software licensing terms.";
    } else if (question.toLowerCase().includes('time') || question.toLowerCase().includes('long')) {
      response = "The typical process takes 2-3 business days from purchase to license transfer. Verification usually takes 24 hours, and the transfer process depends on the software vendor.";
    }
    
    setIsLoading(false);
    return response;
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Get AI response
    const aiResponse = await getAIResponse(inputValue);
    setMessages(prev => [...prev, { role: 'system', content: aiResponse }]);
  };

  const handleSampleQuestion = async (question) => {
    // Add user message
    const userMessage = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    
    // Get AI response
    const aiResponse = await getAIResponse(question);
    setMessages(prev => [...prev, { role: 'system', content: aiResponse }]);
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-medium">SoftSell Assistant</h3>
            <p className="text-xs opacity-75">We typically reply in a few minutes</p>
          </div>
          
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Sample questions */}
          <div className="p-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-x-auto whitespace-nowrap">
            <div className="flex space-x-2">
              {sampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSampleQuestion(question)}
                  className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;