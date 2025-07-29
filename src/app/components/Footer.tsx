export function Footer() {
  return (
    <footer className="bg-background border-t border-border dark:bg-amber-800 p-4 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
    </footer>
  )
}
