import { useEffect, useState } from 'react';

const greetings = [
  { text: 'Hello', language: 'English' },
  { text: 'Hola', language: 'Spanish' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Ciao', language: 'Italian' },
  { text: 'Olá', language: 'Portuguese' },
  { text: 'Hallo', language: 'German' },
  { text: 'こんにちは', language: 'Japanese' },
  { text: '안녕하세요', language: 'Korean' },
  { text: '你好', language: 'Chinese' },
  { text: 'नमस्ते', language: 'Hindi' },
  { text: 'Привет', language: 'Russian' },
  { text: 'مرحبا', language: 'Arabic' },
];

export default function MultiLanguageGreeting() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100px] flex items-center justify-center overflow-hidden">
      <div className="relative h-[100px] overflow-hidden">
        <div 
          className="absolute transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateY(-${currentGreetingIndex * 100}%)`,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {greetings.map((greeting, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-[100px]"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-gradient">{greeting.text}</span>
                <span className="ml-2 opacity-70 text-2xl md:text-3xl">({greeting.language})</span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 