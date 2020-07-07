import Layout from '../components/layout'
import Clock from '../components/clock'
import Stopwatch from '../components/stopwatch'
import Countdown from '../components/countdown'

function index() {
  return (
    <Layout>
      <div className='container'>
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