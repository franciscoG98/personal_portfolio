import Footer from '../../components/footer'

const Error = () => {

  return (
    <main className='error__page'>
      <h1>Error!</h1>
      <h2>What are you doing chinchulin?</h2>
      <p>Please go back <a href="/" className="link__go-home">Home</a></p>
      <Footer />
    </main>
  )
}

export default Error