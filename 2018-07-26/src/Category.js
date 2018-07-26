import React from 'react';
import DocumentTitle from 'react-document-title';

import Food from './Food';
import Portion from './Portion';

import {days, nbsp, title} from './content';

class Category extends React.Component {
  render() {
    const {aside, category, foods, portionsByDayIndex, onAddFood, onDeletePortion} = this.props;
    return (
      <DocumentTitle title={`${category} ${title}`}>
        <main className={`category ${category}`}>
          <section>
            <table className="choices">
              <tbody>
                {days.map((day, dayIndex) => (
                  <tr key={day}>
                    <th scope="row">{day}<br/>{nbsp}</th>
                    <td>
                      <ul className="portions">{portionsByDayIndex[dayIndex].map(portion => (
                        <Portion
                          key={portion.id}
                          portion={portion}
                          onClick={dayIndex === 0 ? onDeletePortion.bind(null, portion.id) : undefined}
                        />
                      ))}</ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {aside}
          </section>
          <ul className="foods">{foods.map(food => (
            <Food
              key={food.id}
              food={food}
              onClick={onAddFood.bind(null, food.id)}
            />
          ))}</ul>
        </main>
      </DocumentTitle>
    );
  }
};

export default Category;
