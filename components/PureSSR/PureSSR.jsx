import { store } from "@store";

const PureSSR = () => {
  return (
    <div>{JSON.stringify(store.getState().general.members)}</div>
  )
}

export default PureSSR