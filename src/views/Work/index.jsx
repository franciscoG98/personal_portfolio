import WorkCard from '../../components/workCard'
// import sachaMistolImage from '../../assets/images/sachamistol.png'
import movieapp from '../../assets/images/movieapp.png'
import poadaLaValentina from '../../assets/images/la_valentina_home.png'
import fakestoreNext from '../../assets/images/fakestore-next.png'
import elCarroCafe from '../../assets/images/elCarroCafe.png'

const Work = () => {
  return (
    <>
      <h2 className='hashnode__title'>Work</h2>
      <section className='work_container'>
        <WorkCard
          title='FakeStore - Next'
          image={fakestoreNext}
          alt='FakeStore - Next'
          description='Website build for a challenge, list and filter products and categories. Used Next.js, Tailwind, Shadcn/ui and deployed it on Netlify.'
          siteLink={"https://fakestore-next.netlify.app/"}
          repoLink={"https://github.com/franciscoG98/fakestore-next"}
        />
        <WorkCard
          title='Posada la Valentina'
          image={poadaLaValentina}
          alt='Posada La Valentina'
          description='Website for an holiday resort located in Villa las Rosas, Cordoba, Argentina. Created with Hugo, Sass and deployed on Netlify.'
          siteLink={"https://posadalavalentina.com.ar/"}
        />
        {/* <WorkCard
            title='Sacha Mistol Art Hotel'
            image={sachaMistolImage}
            alt='Sacha Mistol Art Hotel Website'
            description='Website for an Hotel in Cordoba, Argentina, where you can see their services, lounges, rooms and more. Made with Create-react-app, React, Sass, Gatsby, GraphQL and Contenful'
            siteLink={"https://sachamistol.com/en/"}
            repoLink={"https://github.com/elhesuu/sacha-mistol-web"}
          /> */}
        <WorkCard
          title='Movie app'
          image={movieapp}
          alt='Movies website'
          description='Website where you can find your favorites movies. Created with Vite, React, Sass, and the OMDB movie API to fetch data. Deployed on Vercel.'
          siteLink={"https://movies-app-fg.vercel.app/"}
          repoLink={"https://github.com/franciscoG98/movies-app"}
        />
        <WorkCard
          title='El Carro Café'
          image={elCarroCafe}
          alt='El Carro Café'
          description='QR menu website for a local food truck with a mobile-first design. The owner can create and edit all the data displayed on Contentful. The website was built using Astro and Contentful and deployed on Netlify.'
          siteLink={"https://elcarrocafe.netlify.app/"}
          repoLink={"https://github.com/franciscoG98/el-carro-cafe"}
        />
      </section>
    </>
  )
}

export default Work