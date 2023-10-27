import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'This is homepage',
}

export default function Home() {
  return (
    <Button size={'sm'} variant={'outline'}>Test Button</Button>
  )
}
