import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import WorkCard from '../../components/workCard'
import sachaMistolImage from '../../assets/images/sachamistol.png'
import movieapp from '../../assets/images/movieapp.png'
// import poadaLaValentina from '../../assets/images/aaaaaaaaaaaaaa.png'

const Work = () => {
  return (
    <>
      <Navbar />
        <main className='work_container'>
          <WorkCard
            title='Sacha Mistol Art Hotel'
            image={sachaMistolImage}
            alt='Sacha Mistol Art Hotel Website'
            description='Website for an Hotel in Cordoba, Argentina, where you can see their services, lounges, rooms and more. Made with Create-react-app, React, Sass, Gatsby, GraphQL and Contenful'
            siteLink={"https://sachamistol.com/en/"}
            repoLink={"https://github.com/elhesuu/sacha-mistol-web"}
          />
          {/* <WorkCard 
            title='Posada la Valentina'
            image={poadaLaValentina}
            alt='Posada La Valentina'
            description='Website for an holiday resort located in Villa las Rosas, Cordoba, Argentina. Created with Hugo, Sass, deployed on Netlify'
            siteLink={"https://movies-app-fg.vercel.app/"}
            repoLink={"https://github.com/franciscoG98/movies-app"}
          /> */}
          <WorkCard 
            title='Movie app'
            image={movieapp}
            alt='Movies website'
            description='Website where you can find your favorites movies. Created with Vite, React, Sass, deployed on Vercel and the OMDB movie API'
            siteLink={"https://movies-app-fg.vercel.app/"}
            repoLink={"https://github.com/franciscoG98/movies-app"}
          />
        </main>
      <Footer />
    </>
  )
}

export default Work