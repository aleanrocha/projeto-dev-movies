import { useRouteError, useNavigate } from 'react-router-dom'

import Button from '../components/Button'

const ErrorBoundary = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className="errorPage">
      <h1>Oops!</h1>
      <h2>{error.status}</h2>
      <p>{error.statusText}</p>
      {error.data?.message && <p>{error.data.message}</p>}
      <Button
        style={{ marginRight: 0 }}
        onClick={() => navigate('/projeto-dev-movies')}
      >
        Voltar ao Início
      </Button>
    </div>
  )
}

export default ErrorBoundary
