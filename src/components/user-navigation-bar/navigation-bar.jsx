import { getPostList } from "api/learn-code"

function NavigationBar () {
  getPostList()
  return (
    <div>
      Hello
    </div>
  )
}

export default NavigationBar