import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/$bookID')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/books/$bookID"!</div>
}
