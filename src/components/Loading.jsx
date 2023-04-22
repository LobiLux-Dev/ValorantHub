import { Spinner } from 'react-bootstrap'

export const Loader = () => {
  return (
    <div className="loader">
      <h1 className="fw-bold">Loading...</h1>
      <div>
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    </div>
  )
}
