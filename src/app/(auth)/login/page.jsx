import { handleGithubLogin } from '@/lib/actions'
import LoginForm from '@/components/loginForm/loginForm'
import styles from './login.module.css'

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage