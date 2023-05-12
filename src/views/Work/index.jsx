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
              description='Website for an Hotel where you can see their services, lounges, rooms and more. Made with Create-react-app, React, Sass, Gatsby, GraphQL and Contenful'
              siteLink={"https://sachamistol.com/en/"}
              repoLink={"https://github.com/elhesuu/sacha-mistol-web"}
            />
            <WorkCard 
              title='Nelo Works'
              image={neloworks}
              alt='NeloWorks website'
              description='Website for a local business where you can reach their main social media, contact them by whatsapp and see some products. Made with Vite, Netlify, React and Sass'
              siteLink={"https://neloworks.netlify.app/"}
              repoLink={"https://github.com/franciscoG98/NeloWorks"}
            />
          </section>
          <section>
            <WorkCard 
              title='Movie app'
              image={movieapp}
              alt='Movies website'
              description='Personal website where you can find your favorites movies. Made with React, Css, Vercel and the OMDB movie API'
              siteLink={"https://movies-app-fg.vercel.app/"}
              repoLink={"https://github.com/franciscoG98/movies-app"}
            />
            <WorkCard 
              title='Portfolio V1'
              image={portfoliov1}
              alt='Portfolio V1'
              description='Personal profolio where you can see my skills, contact information and persola proyects. Made with React, Github-pages and Css'
              siteLink={"https://franciscog98.github.io/portfolio/"}
              repoLink={"https://github.com/franciscoG98/portfolio"}
            />
          </section>
        </main>
    </>
  )
}

export default Work