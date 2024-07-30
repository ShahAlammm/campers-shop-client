import ReactPlayer from 'react-player';
import tour1 from '@/assets/tour-1.jpg';
import tour2 from '@/assets/tour-2.jpg';
import tour3 from '@/assets/tour-3.jpg';
import tour4 from '@/assets/tour-4.jpg';

const VideoPlayer = () => {

  const tourPlane = [
    {
      name: 'Meghalaya',
      image: tour1,
    },
    {
      name: 'Darjeeling & Sikkim',
      image: tour2,
    },
    {
      name: 'Sikkim',
      image: tour3,
    },
    {
      name: 'Kashmir',
      image: tour4,
    },
  ]
  return (
    <div className='pt-10'>
      <h1 className="text-4xl font-bold text-yellow-400">Best Tour Plane</h1>
      <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1 text-white">
        Chose Your's One
      </h2>
      <div className='space-y-4'>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 lg:mt-8 lg:gap-4 lg:grid-cols-4">
            {tourPlane?.map((item) => (<div className="relative group ">
              <div className="overflow-hidden aspect-w-1 aspect-h-1 shadow-2xl">
                <img className="object-cover w-full h-[300px] transition-all duration-300 group-hover:scale-125" src={item?.image} alt="" />
              </div>

              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title="">
                      {item?.name}
                      <span className="absolute inset-0" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <svg className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=MHZpkHqB-U0'
            playing
            controls
            loop
            muted
            width='full'
            height='600px'
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
