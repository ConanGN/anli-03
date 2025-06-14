"use client";

import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'
import { notFound, useRouter } from 'next/navigation'

interface Photo {
  id: string;
  src: string;
  alt: string;
  price: number;
}

export default function ModalPhotoPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const photo = photos.find((p: Photo) => p.id === params.id)
  
  if (!photo) {
    notFound()
  }

  return (
    <div onClick={() => router.back()} className='fixed inset-0 flex items-center justify-center bg-gray-500/[.8] z-50'>
      <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded-lg max-w-lg w-full relative">
        <div className="relative h-[400px] w-full">
          <Image 
            src={photo.src} 
            alt={photo.alt} 
            fill
            className='object-contain rounded-lg'
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">{photo.alt}</h2>
          <p className="text-lg text-gray-700">价格: ${photo.price}</p>
        </div>
      </div>
    </div>
  )
} 