import React, { PropsWithChildren } from 'react'

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <section className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      {children}
    </section>
  )
}
