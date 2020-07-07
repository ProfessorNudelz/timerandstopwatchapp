import Layout from '../components/layout'
import Clock from '../components/clock'
import Stopwatch from '../components/stopwatch'
import Countdown from '../components/countdown'

function index() {
  return (
    <Layout>
      <Clock />
      <Stopwatch />
      <Countdown />
    </Layout>
  )
}

export default index