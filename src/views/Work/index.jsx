import WorkCard from '../../components/workCard'
import sachaMistolImage from '../../assets/images/sachamistol.png'
import movieapp from '../../assets/images/movieapp.png'

import './workStyles.scss'

const Work = () => {
  return (
    <main className='work_container'>
      <section>
        <WorkCard
          title='Sacha Mistol Art Hotel'
          image={sachaMistolImage}
          alt='Sacha Mistol Art Hotel Website'
          description='Website for an Hotel where you can see their services, lounges, rooms and more. Made with Create-react-app, React, Sass, Gatsby, GraphQL and Contenful'
          siteLink={"https://sachamistol.com/en/"}
          repoLink={"https://github.com/elhesuu/sacha-mistol-web"}
        />
        <WorkCard 
          title='Movie app'
          image={movieapp}
          alt='Movies website'
          description='Personal website where you can find your favorites movies. Made with React, Css, Vercel and the OMDB movie API'
          siteLink={"https://movies-app-fg.vercel.app/"}
          repoLink={"https://github.com/franciscoG98/movies-app"}
        />
      </section>
    </main>
  )
}

export default Work