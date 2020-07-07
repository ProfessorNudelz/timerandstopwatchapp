import Link from 'next/link'
import Layout from '../components/layout'
import Clock from '../components/clock'
import StopwatchFullLength from '../components/stopwatchFullLength'

function index() {
  return (
    <Layout>
      <div className='container'>
        <div className='text-center'>
          <Link href='/'>
            <a>Stopwatch and Timer</a>
          </Link>
        </div>
        <div className='row'>
          <Clock />
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <StopwatchFullLength />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index