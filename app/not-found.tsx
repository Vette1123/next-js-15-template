import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Icons.warning
        className="mb-6 h-16 w-16 text-yellow-500"
        aria-hidden="true"
      />
      <h1 className="mb-2 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button asChild>
        <Link href="/">
          <Icons.arrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </Button>
    </div>
  )
}
