import checkSlideIn from "./checkSlideIn"
import fetchData from "./fetchData"

export default () => {
  const { events, loading } = fetchData()
  const { isHalfShown, windowWidth, windowHeight, offset } = checkSlideIn()

  return { events, loading, isHalfShown, windowWidth, windowHeight, offset }
}
