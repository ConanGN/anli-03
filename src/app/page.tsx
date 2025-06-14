import Image from 'next/image'
import React from 'react'
import { photos } from '@/data'
import Link from 'next/link'

interface Photo {
  id: string;
  src: string;
  alt: string;
  price: number;
}

const Page = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold mb-6">图片列表</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {photos.map((photo: Photo) => (
            <div key={photo.id} className="group">
              <Link href={`/photos/${photo.id}`} className="block">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-7/8 relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:opacity-75"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <h3 className="mt-4 text-sm text-gray-700">{photo.alt}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${photo.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page