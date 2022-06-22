
import { Link } from "react-scroll";

export const Introduction = () => {
    return (
      <section id='introduction' className='introduction section is-medium'>
        <div className='introduction-container container'>
          <div className='columns'>
            <div className='column is-12'>
              <div className='content' style={{ textAlign: 'center' }}>
                <h1 className='title'>
                landing<span className='eloware-cc'>.skillzl.me</span>
                </h1>
                <p className='description'>
                  simple landing page
                </p>
                <Link to='pricing' smooth={true} className='button'>
                  View More
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Introduction;