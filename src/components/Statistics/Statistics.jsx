import css from './Statistics.module.css';
import { colorRandom } from '../../helper/colorRandom';

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            key={id}
            className={css.item}
            style={{
              backgroundColor: colorRandom(),
            }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
