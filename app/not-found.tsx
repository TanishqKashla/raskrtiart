import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <Image
                src="/404.png"
                alt="Page Not Found"
                width={500}
                height={200}
                className="mx-auto my-5"
            />
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
                Return Home
            </Link>
        </div>
    )
}
