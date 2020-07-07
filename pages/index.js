import Layout from '../components/layout'
import Stopwatch from '../components/stopwatch'
import Countdown from '../components/countdown'

function index() {
  return (
    <Layout>
      <Stopwatch />
      <Countdown />
    </Layout>
  )
}

export default index