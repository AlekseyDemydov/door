import PenalSlider from "./Slider/Slider";
import s from './Penal.module.scss'

const Penal = () => {
  return (
    <>
    <div className={s.penalBox}>
      <h1 className={s.titlePenal}>РОЗСУВНА СИСТЕМА «ПЕНАЛ»</h1>
      <p className={s.textPenal}>
        Наше виробництво виготовляє в різних варіантах систему «Пенал». Це
        система прихованого монтажу розсувних дверей, які функціонують за
        допомогою спеціального короба, вмонтованого в стіну. Він приховує все
        дверне полотно, завдяки чому двері не відчиняються, як завжди. Внаслідок
        цього двері практично не займають місце і значно економляться корисний
        простір. <span>Детальніше...</span>{' '}
      </p>
      <PenalSlider/>
    </div>
      
    </>
  );
};

export default Penal;
