'use client';

import { useState } from 'react';
import { GeneratedNameWithTranslation } from '@/types/name';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage, translations } from '@/lib/i18n';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollText, Volume2 } from 'lucide-react';
import { speakChinese } from '@/lib/features';

export default function NamePage() {
  const [generatedName, setGeneratedName] = useState<GeneratedNameWithTranslation | null>(null);
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const generateName = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/name');
      const data = await response.json();
      setGeneratedName(data);
    } catch (error) {
      console.error('Error generating name:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeak = (text: string) => {
    speakChinese(text);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Chinese Name Generator</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Generate unique Chinese names inspired by classical literature
          </p>
          <Button 
            size="lg" 
            onClick={generateName}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {loading ? 'Generating...' : (generatedName ? 'Generate Again' : 'Generate Name')}
          </Button>
        </div>

        {loading ? (
          <Card>
            <CardHeader>
              <Skeleton className="h-12 w-24 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ) : generatedName ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-red-600 dark:text-red-400">
                <div className="flex items-center justify-center gap-4">
                  <span>{generatedName.surname.surname}{generatedName.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleSpeak(`${generatedName.surname.surname}${generatedName.name}`)}
                    className="rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
                <div className="text-lg font-normal text-gray-600 dark:text-gray-400 mt-2">
                  {generatedName.pinyin.surname} {generatedName.pinyin.givenName}
                </div>
              </CardTitle>
              <CardDescription className="text-center text-lg">
                From {generatedName.englishTranslation.dynasty} · {generatedName.englishTranslation.author}
                <br />
                "{generatedName.englishTranslation.title}"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <ScrollText className="h-5 w-5" />
                  Source Text
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-2 flex items-start gap-2">
                    <span>{generatedName.sentence}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleSpeak(generatedName.sentence)}
                      className="rounded-full hover:bg-red-100 dark:hover:bg-red-900 flex-shrink-0"
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base">
                    {generatedName.englishTranslation.sentence}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Complete Original Text</h3>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap mb-2">
                  {generatedName.content}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {generatedName.englishTranslation.content}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Source: {generatedName.englishTranslation.book}
              </p>
            </CardFooter>
          </Card>
        ) : null}
      </div>
    </div>
  );
} 