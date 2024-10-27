'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Icons.warning className="mb-4 h-12 w-12 text-yellow-500" />
      <h1 className="mb-2 text-3xl font-bold">Oops! Something went wrong</h1>
      <p className="mb-4 text-gray-600">
        We apologize for the inconvenience. Our team has been notified.
      </p>
      {error.digest && (
        <p className="mb-4 text-sm text-gray-500">Error ID: {error.digest}</p>
      )}
      <div className="space-x-4">
        <Button onClick={() => reset()} variant="outline">
          Try again
        </Button>
        <Button onClick={() => (window.location.href = '/')}>
          Go to homepage
        </Button>
      </div>
    </div>
  )
}
