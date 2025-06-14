import { photos } from '@/data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

interface Photo {
  id: string;
  src: string;
  alt: string;
  price: number;
}

const PhotoDetailPage = ({ params }: { params: { id: string } }) => {
  const photo = photos.find((p: Photo) => p.id === params.id)

  if (!photo) {
    notFound();
  }

  const description = "Ut non occaecat incididunt laboris. Aliquip laboris anim dolore in officia id commodo nostrud non adipisicing. Elit consectetur dolor deserunt Lorem mollit qui irure tempor. Id aute nostrud laborum pariatur incididunt duis ea. Culpa excepteur consectetur proident mollit esse excepteur in ad eiusmod dolor do amet tempor.Irure sunt aute aliquip fugiat consectetur consequat cillum ad esse in aute ipsum veniam. Dolor ut aute sit qui qui ipsum et adipisicing ex consectetur ullamco nulla. Elit magna et ex ipsum elit non ad ex culpa nostrud quis est."

  return (
    <main className="container mx-auto my-10 px-4">
      <div className="mx-auto max-w-lg">
        <Link href="/" className="mb-6 inline-block text-blue-600 hover:underline">
          &larr; 返回首页
        </Link>
        
        <div className="overflow-hidden rounded-lg shadow-lg bg-white">
          <div className="relative w-full" style={{ aspectRatio: '1 / 1' }}>
            <Image
              alt={photo.alt}
              className="object-cover"
              src={photo.src}
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
        
        <div className="mt-6 rounded-lg border-2 border-dashed border-gray-300 p-6">
          <h1 className="text-lg font-medium text-gray-900">
            <span className="font-bold">Title:</span> {photo.alt}
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            <span className="font-bold">Price:</span> ${photo.price}
          </p>
          <p className="mt-4 text-base text-gray-600">
            <span className="font-bold">Desc:</span> {description}
          </p>
        </div>
        
        <p className="mt-8 text-center text-gray-500">
          下面也可以像 unsplash.com 一样，再放一些其他图片，供用户继续浏览...
        </p>
      </div>
    </main>
  )
}

export default PhotoDetailPage; 