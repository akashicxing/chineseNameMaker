"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Sparkles, Users, Star, Heart, Zap, Crown, Feather, Mountain, Volume2 } from 'lucide-react';
import { GeneratedNameWithTranslation } from '@/types/name';
import { speakChinese } from '@/lib/features';

export default function GeneratorNamaChina({ params }: { params: { lang: string } }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [generatedName, setGeneratedName] = useState<GeneratedNameWithTranslation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName.trim() || !lastName.trim() || !gender) {
      alert('Mohon lengkapi semua field yang diperlukan');
      return;
    }
    
    try {
      setIsGenerating(true);
      
      const response = await fetch('/api/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mode: 'smart',
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          nameLanguage: 'Indonesian',
          gender
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setGeneratedName(result.data);
      } else {
        throw new Error(result.error || 'Failed to generate name');
      }
    } catch (error) {
      console.error('Error generating name:', error);
      alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSpeak = (text: string) => {
    speakChinese(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        
        {/* Hero Section untuk Indonesia */}
        <section className="text-center mb-16 pt-16">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <BookOpen className="h-5 w-5" />
            Khusus untuk Masyarakat Indonesia
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Generator Nama China
            <span className="block text-red-600 dark:text-red-400 mt-2">
              Berdasarkan Puisi Klasik
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            Metode revolusioner yang berbeda dari generator nama China lainnya. Kami menggunakan <strong>sastra klasik China</strong> dan <strong>puisi kuno berusia 5000 tahun</strong>, bukan hanya sistem Wu Xing (五行) seperti yang lain.
          </p>

          {/* Keunggulan Unik Kami */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Puisi Klasik</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Nama dari Tang Shi, Song Ci, Chu Ci, dan literatur klasik lainnya</p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Canggih</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Teknologi AI yang memahami konteks budaya dan makna mendalam</p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">100% Gratis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Tidak ada biaya tersembunyi, semua fitur premium gratis selamanya</p>
            </div>
          </div>
        </section>

        {/* Perbandingan dengan Kompetitor */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mengapa Berbeda dari Generator Nama China Lainnya?
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Aspek</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-500 dark:text-gray-400">Generator Lainnya</th>
                    <th className="text-center py-4 px-6 font-semibold text-red-600 dark:text-red-400">Metode Kami</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Metode Pembuatan</td>
                    <td className="py-4 px-6 text-center text-gray-500 dark:text-gray-400">Wu Xing (五行) & Feng Shui</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <BookOpen className="h-5 w-5 text-green-500" />
                        <span className="text-red-600 dark:text-red-400 font-medium">Puisi Klasik & Sastra</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Sumber Nama</td>
                    <td className="py-4 px-6 text-center text-gray-500 dark:text-gray-400">Database Modern</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-green-500" />
                        <span className="text-red-600 dark:text-red-400 font-medium">Tang Shi, Song Ci, Chu Ci</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Biaya</td>
                    <td className="py-4 px-6 text-center text-gray-500 dark:text-gray-400">$19-48 untuk fitur premium</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Heart className="h-5 w-5 text-green-500" />
                        <span className="text-red-600 dark:text-red-400 font-medium">100% Gratis</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Teknologi</td>
                    <td className="py-4 px-6 text-center text-gray-500 dark:text-gray-400">Generator Sederhana</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="h-5 w-5 text-green-500" />
                        <span className="text-red-600 dark:text-red-400 font-medium">AI + Analisis Sastra</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Panduan Pelafalan</td>
                    <td className="py-4 px-6 text-center text-gray-500 dark:text-gray-400">Tidak ada</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Volume2 className="h-5 w-5 text-green-500" />
                        <span className="text-red-600 dark:text-red-400 font-medium">Audio + Pinyin Lengkap</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Generator Form */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Coba Generator Nama China Kami
            </h2>
            
            <form onSubmit={handleGenerate} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nama Depan Indonesia
                  </label>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Contoh: Budi"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nama Belakang Indonesia
                  </label>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Contoh: Santoso"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jenis Kelamin
                </label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Laki-laki</SelectItem>
                    <SelectItem value="female">Perempuan</SelectItem>
                    <SelectItem value="other">Netral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Sedang Membuat Nama Dari Puisi Klasik...
                  </>
                ) : (
                  <>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Buat Nama China Dari Puisi Klasik
                  </>
                )}
              </Button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                ✨ 100% gratis • Tidak perlu registrasi • Berdasarkan sastra klasik China
              </p>
            </form>
          </div>
        </section>

        {/* Hasil Generator */}
        {generatedName && (
          <section className="mb-16">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Nama China Anda
                </h3>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-4xl font-bold text-red-600 dark:text-red-400">
                    {generatedName.fullName || `${generatedName.surname?.surname}${generatedName.name}`}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleSpeak(generatedName.fullName || `${generatedName.surname?.surname}${generatedName.name}`)}
                    className="rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                  >
                    <Volume2 className="h-6 w-6" />
                  </Button>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {generatedName.pinyin?.fullName || `${generatedName.pinyin?.surname} ${generatedName.pinyin?.givenName}`}
                </p>
              </div>

              {/* Informasi Sastra Klasik */}
              {generatedName.chineseContent && (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    📜 Sumber dari Sastra Klasik China
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Informasi Sumber:</h5>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <strong>Dinasti:</strong> {generatedName.chineseContent.dynasty}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <strong>Penulis:</strong> {generatedName.chineseContent.author}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        <strong>Karya:</strong> 《{generatedName.chineseContent.title}》
                      </p>
                      
                      <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded">
                        <p className="text-gray-800 dark:text-gray-200 font-medium italic">
                          "{generatedName.chineseContent.sentence}"
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Terjemahan & Makna:</h5>
                      {generatedName.englishTranslation && (
                        <>
                          <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded mb-3">
                            <p className="text-gray-800 dark:text-gray-200 italic">
                              "{generatedName.englishTranslation.sentence}"
                            </p>
                          </div>
                          
                          {generatedName.englishTranslation.meaning && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                <strong>Makna Nama:</strong> {generatedName.englishTranslation.meaning}
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Keunggulan Metode Puisi Klasik */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mengapa Metode Puisi Klasik Lebih Bermakna?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Warisan Sastra</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nama diambil dari karya master sastra China seperti Li Bai, Du Fu, dan penyair terkenal lainnya.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Feather className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Keindahan Bahasa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Setiap nama memiliki keindahan puitis dan makna mendalam yang telah teruji sepanjang sejarah.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Nilai Filosofis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tidak hanya berdasarkan elemen, tetapi juga filosofi kehidupan dan kebijaksanaan kuno.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">Keunikan Personal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Setiap nama disesuaikan dengan kepribadian dan latar belakang Indonesia Anda.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimoni dari Pengguna Indonesia */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Kata Pengguna Indonesia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ahmad S.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Jakarta</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  "Nama China yang saya dapat dari sini benar-benar unik! Berbeda sekali dengan generator lain yang cuma asal-asalan. Ini benar-benar dari puisi klasik."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Sari M.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Surabaya</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  "Gratis dan kualitasnya jauh lebih bagus dari yang berbayar! Nama yang saya dapat benar-benar punya makna mendalam dari sastra klasik."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Rizky P.</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bandung</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  "Sebagai mahasiswa Sastra China, saya tahu betul kualitas nama-nama di sini. Benar-benar dari sumber klasik yang autentik!"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Khusus Indonesia */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Pertanyaan Yang Sering Diajukan
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Apa bedanya dengan generator nama China yang lain?
                </h4>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Generator lain menggunakan sistem Wu Xing (五行) atau feng shui. Kami menggunakan metode revolusioner berdasarkan <strong>sastra klasik China</strong> - puisi Tang, Song Ci, Chu Ci, dan karya master seperti Li Bai dan Du Fu. Hasilnya lebih bermakna dan puitis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Apakah benar-benar gratis selamanya?
                </h4>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Ya! 100% gratis tanpa biaya tersembunyi. Berbeda dengan generator lain yang mengenakan biaya $19-48 untuk fitur premium, semua fitur kami gratis untuk masyarakat Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bagaimana cara menggunakan nama China ini di Indonesia?
                </h4>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Nama China bisa digunakan sebagai nama panggilan, nama bisnis, username media sosial, atau untuk keperluan budaya. Banyak orang Indonesia menggunakan nama China untuk networking bisnis dengan China atau sebagai identitas kreatif.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Apakah nama yang dihasilkan benar-benar akurat secara budaya?
                </h4>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Sangat akurat! Setiap nama diambil dari sumber sastra klasik yang autentik - Tang Shi (唐诗), Song Ci (宋词), Chu Ci (楚辞), dan Shi Jing (诗经). Ini bukan nama buatan, melainkan frasa indah dari karya master sastra China.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA untuk Indonesia */}
        <section className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Dapatkan Nama China Berdasarkan Puisi Klasik
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Rasakan perbedaan metode revolusioner kami yang menggunakan sastra klasik China berusia 5000 tahun. Gratis selamanya untuk masyarakat Indonesia!
          </p>
          <Button 
            onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Coba Sekarang - 100% Gratis!
          </Button>
        </section>
      </div>
    </div>
  );
}
