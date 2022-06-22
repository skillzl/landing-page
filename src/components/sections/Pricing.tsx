/** @format */
export const Pricing = () => {
  return (
    <section id='pricing' className='pricing section is-medium'>
      <div className='pricing-container'>
        <h1>Pricing</h1>
        <div className='package-container'>
          <div className='packages'>
            <h1>Normal Subscription</h1>
            <h2 className='text1'>
              $24.99<span>/monthly</span>
            </h2>
            <ul className='list'>
              <li className='first'>external software</li>
              <li>easy ui</li>
              <li>updates &#38; resources</li>
              <li>support</li>
            </ul>
            <a href='/' className='button-price button1'>
              purchase
            </a>
          </div>
          <div className='packages'>
            <h1>HWID Spoofer</h1>
            <h2 className='text1'>
              $14.99<span>/lifetime</span>
            </h2>
            <ul className='list'>
              <li className='first'>supported on win10</li>
              <li>avoid being banned</li>
              <li>private &#38; simple to use </li>
              <li>lifetime acces</li>
            </ul>
            <a href='/' className='button-price button2'>
              purchase
            </a>
          </div>
          <div className='packages'>
            <h1>Pack</h1>
            <h2 className='text1'>$34.99</h2>
            <ul className='list'>
              <li className='first'>lifetime spoofer</li>
              <li>1 month acces</li>
              <li>full guide</li>
              <li>updates early acces</li>
            </ul>
            <a href='/' className='button-price button3'>
              purchase
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
