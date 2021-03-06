import Link from 'next/link'
import Layout from '../components/layout'
import Clock from '../components/clock'
import Stopwatch from '../components/stopwatch'
import Countdown from '../components/countdown'

function index() {
  return (
    <Layout>
      <div className='container'>
        <div className='text-center'>
          <Link href='/stopwatch'>
            <a>Stopwatch</a>
          </Link>
        </div>
        <div className='row'>
          <Clock />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Stopwatch />
          </div>
          <div className='col-md-6'>
            <Countdown />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index