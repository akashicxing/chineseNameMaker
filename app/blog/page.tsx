"use client";

import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-24 mb-16">
        <h1 className="text-4xl font-bold mb-12">Blog & Resources</h1>
        
        <div className="grid gap-8">
          <Link 
            href="/blog/chinese-names-for-boys"
            className="block p-8 bg-card hover:bg-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <h2 className="text-2xl font-semibold mb-3">Chinese Male Names: A Guide for Foreigners</h2>
            <p className="text-muted-foreground mb-3 text-sm">2024-04-22</p>
            <p className="text-muted-foreground leading-relaxed">A comprehensive guide to understanding and choosing Chinese names for boys, including cultural significance, naming principles, and examples.</p>
          </Link>

          <Link 
            href="/blog/chinese-names-for-girls"
            className="block p-8 bg-card hover:bg-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <h2 className="text-2xl font-semibold mb-3">Chinese Names for Girls: A Guide for Foreigners</h2>
            <p className="text-muted-foreground mb-3 text-sm">2024-04-22</p>
            <p className="text-muted-foreground leading-relaxed">A comprehensive guide to understanding and choosing Chinese names for girls, including cultural significance, naming principles, and examples.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}