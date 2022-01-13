import { useRouter } from 'next/router'
import { useEffect } from 'react'

import SkySpace from './../layouts/skyspace';

export default function index() {
  const router = useRouter()


  useEffect(() => {
    router.push('/messages');
  }, []);

  return (
    <>
      <SkySpace>
        {/* <h2 className="text-warning text-lg">Under Development</h2> */}
      </SkySpace>
    </>
  )
}