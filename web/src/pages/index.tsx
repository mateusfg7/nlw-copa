import Image from 'next/image'

import appPreviewImage from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImage from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt='NLW Copa' />
        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExampleImage} alt='' />

          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type='text' required placeholder='Qual o nome do seu bolão?' />
          <button type='submit'>Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt='' />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={iconCheckImg} alt='' />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImage} alt='App preview' quality={100} />
    </div>
  )
}
