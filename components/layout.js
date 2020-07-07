import Header from './header'

function layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default layout