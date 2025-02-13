import Link from 'next/link'

export default function HomePage() {
  return (
    <main className='flex flex-1 flex-col justify-center text-center'>
      <h1 className='mb-4 text-2xl font-bold'>Resurface Cloud</h1>
      <p className='text-fd-muted-foreground'>Own your cloud</p>
      <p className='text-fd-muted-foreground mt-4'>
        You can open{' '}
        <Link
          href='/docs'
          className='text-fd-foreground font-semibold underline'
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  )
}
