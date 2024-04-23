
import { officialMembers } from '../data/members'
import Title from './Title';
var latestImage = officialMembers.length - 1;
const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={officialMembers[latestImage].image} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>42 Lion's Road</h3>
          <p>
          “In the tapestry of life, true friends are threads woven by God’s hand. They share the same faith, binding hearts with love and prayers. Through storms and sunsets, they walk together, their souls echoing the same hymns of hope.”
          </p>
          <a href='#home' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
