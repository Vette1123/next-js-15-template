import * as React from 'react'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Icons } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'

interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

interface NavLinkProps {
  item: NavItem
  mobile?: boolean
}

function NavLink({ item, mobile = false }: NavLinkProps) {
  if (!item.href) return null

  const linkClass = cn(
    'transition-colors hover:text-foreground',
    mobile
      ? 'w-fit text-base font-medium text-foreground/70'
      : 'flex items-center text-sm font-medium text-muted-foreground',
    item.disabled && 'pointer-events-none opacity-60'
  )

  return (
    <Link href={item.href} className={linkClass}>
      {item.title}
    </Link>
  )
}

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Home">
      <Icons.logo className="size-6" aria-hidden="true" />
      <span className="font-[family-name:var(--font-geist-sans)] font-bold">
        {siteConfig.name}
      </span>
    </Link>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className={buttonVariants({ size: 'icon', variant: 'ghost' })}
      >
        <Icons.gitHub className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noreferrer"
        className={buttonVariants({ size: 'icon', variant: 'ghost' })}
      >
        <Icons.twitter className="h-5 w-5 fill-current" />
        <span className="sr-only">Twitter</span>
      </Link>
    </>
  )
}

function MobileNavContent({ items }: { items?: NavItem[] }) {
  return (
    <SheetContent
      side="left"
      className="inset-y-0 flex h-auto w-[350px] flex-col p-0"
    >
      <div className="px-7 py-4">
        <SheetClose asChild>
          <Logo />
        </SheetClose>
      </div>
      <div className="my-4 flex flex-1 flex-col gap-4 px-9 pb-2">
        {items?.map((item) => (
          <div key={item.title} className="border-b-2 last:border-b-0">
            <SheetClose asChild>
              <NavLink item={item} mobile />
            </SheetClose>
          </div>
        ))}
      </div>
      <div className="px-9 pb-10">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({
              variant: 'default',
              size: 'default',
              className: 'w-full',
            })
          )}
        >
          Visit my portfolio
        </Link>
      </div>
    </SheetContent>
  )
}

export function SiteHeader() {
  const items = siteConfig.mainNav

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="hidden items-center gap-6 md:gap-8 lg:flex">
          <Logo />
          {items?.length ? (
            <nav className="flex gap-6">
              {items.map((item) => (
                <NavLink key={item.title} item={item} />
              ))}
            </nav>
          ) : null}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <Icons.menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <MobileNavContent items={items} />
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-4 px-4">
          <nav className="flex items-center space-x-1">
            <SocialLinks />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
