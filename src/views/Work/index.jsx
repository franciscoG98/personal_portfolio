import Navbar from '../../components/navbar'
import WorkCard from '../../components/workCard'
import sachaMistolImage from '../../assets/images/sachamistol.png'
import neloworks from '../../assets/images/neloworks.png'
import movieapp from '../../assets/images/movieapp.png'
import portfoliov1 from '../../assets/images/portfolioV1.png'


import './workStyles.scss'

const Work = () => {
  return (
    <>
        <Navbar />
        <main className='work_container'>
          <section>
            <WorkCard 
              title='Sacha Mistol Art Hotel'
              image={sachaMistolImage}
              alt='Sacha Mistol Art Hotel Website'
              description='Website for an Hotel made with React, Gatsby, GraphQL and Contenful'
              siteLink={"https://sachamistol.com/en/"}
              repoLink={"https://github.com/elhesuu/sacha-mistol-web"}
            />
            <WorkCard 
              title='Nelo Works'
              image={neloworks}
              alt='NeloWorks website'
              description='Website for a local business made with React'
              siteLink={"https://neloworks.netlify.app/"}
              repoLink={"https://github.com/franciscoG98/NeloWorks"}
            />
          </section>
          <section>
            <WorkCard 
              title='Movie app'
              image={movieapp}
              alt='Movies website'
              description='Personal website made with React and the OMDB moview API'
              siteLink={"https://movies-app-fg.vercel.app/"}
              repoLink={"https://github.com/franciscoG98/movies-app"}
            />
            <WorkCard 
              title='Portfolio V1'
              image={portfoliov1}
              alt='Portfolio V1'
              description='Personal profolio made with React'
              siteLink={"https://franciscog98.github.io/portfolio/"}
              repoLink={"https://github.com/franciscoG98/portfolio"}
            />
          </section>
        </main>
    </>
  )
}

export default Work