import HelloPic from '../../images/MainPic.jpg';
import Button from 'components/Button/Button';

const HelloSection = () => {
  return (
    <section>
      <img src={HelloPic} alt="HelloPic" width="327" />
      <div>
        <h3>Start enjoying a benefit of up to 50%</h3>
        <p>
          You have always wanted to get the same product at a special price for
          you, without haggling - and it is yours.
        </p>
        <Button onClick={() => console.log('click')}>Start using</Button>
      </div>
    </section>
  );
};

export default HelloSection;
