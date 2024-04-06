interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function PageHeader({ title, description, image }: Props) {
  return (
    <section className=' py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8'>
          <img
            src={image}
            alt=''
            className='absolute rounded-lg opacity-90 bg-primary-950/90 inset-0 -z-10 h-full w-full object-cover'
          />
          <div
            className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
            aria-hidden='true'
          ></div>
          <div
            className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
            aria-hidden='true'
          ></div>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-4xl font-bold tracking-tight text-primary-200 sm:text-6xl'>
              {title}
            </h2>
            <p className='mt-6 text-lg leading  text-primary-200'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
