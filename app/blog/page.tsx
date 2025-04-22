"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Chinese Name Culture",
    description: "Explore the deep cultural significance of Chinese names and their importance in society.",
    content: "Chinese names carry profound cultural meaning...",
    date: "2024-03-20"
  },
  {
    id: 2,
    title: "The Art of Chinese Characters",
    description: "Discover the beauty and complexity of Chinese characters used in naming.",
    content: "Chinese characters are more than just symbols...",
    date: "2024-03-18"
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Blog & Resources
        </h1>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}