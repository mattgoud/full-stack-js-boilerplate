"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface DocTOCProps {
  items: {
    title: string
    url: string
  }[]
}

export function DocTOC({ items }: DocTOCProps) {
  return (
    <div className="hidden xl:block">
      <div className="sticky min-w-64 top-16 -mt-10 p-4 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
        <div className="space-y-2">
          <p className="font-medium text-sm">On This Page</p>
          <ul className="m-0 list-none">
            {items.map((item) => (
              <li key={item.url} className="mt-0 pt-2">
                <Link
                  href={item.url}
                  className={cn(
                    "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground font-medium text-sm"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
