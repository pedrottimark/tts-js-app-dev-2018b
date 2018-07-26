import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Category from './Category';
import Main404 from './Main404';
import MainHome from './MainHome';

import {asides, categories, days} from './content';
import {
  fetchDeletePortion,
  fetchGetFoods,
  fetchGetPortions,
  fetchPatchPortion,
  fetchPostPortion,
} from './fetch';
import {
  appendPortion,
  deletePortion,
  filterFoodsByCategory,
  filterPortionsByCategory,
  filterPortionsByIndex,
  findFoodById,
  findPortionByFoodId,
  incrementQuantity,
} from './logic';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodsArray: categories.map(() => []),
      portionsArray: categories.map(() => days.map(() => [])),
    };
  }

  componentDidMount() {
    Promise.all([fetchGetFoods(), fetchGetPortions()]).then(([foods, portions]) => {
      // Given array of all foods, return arrays of foods whose indexes correspond to categories.
      const foodsArray = categories.map(category => filterFoodsByCategory(foods, category));

      // Given array of all portions, return arrays of arrays of portions.
      // The first level of indexes correspond to categories.
      // The second level of indexes correspond to days from 0 for Today to 7 for a week ago.
      const portionsArray = categories.map(category => {
        const portionsByCategory = filterPortionsByCategory(portions, category);
        return days.map((days, index) => filterPortionsByIndex(portionsByCategory, index));
      });

      this.setState({
        foodsArray,
        portionsArray,
      })
    }).catch(error => {
      console.error(error.message);
    });
  }

  _deletePortion = (categoryIndex, portionId) => {
    fetchDeletePortion(portionId).then(() => {
      this.setState(({portionsArray}) => ({
        portionsArray: portionsArray.map(
          (portionsByDayIndex, index) => index === categoryIndex
            ? portionsByDayIndex.map(
                (portions, dayIndex) => dayIndex === 0 ? deletePortion(portions, portionId) : portions
              )
            : portionsByDayIndex
        )
      }));
    }).catch(error => {
      console.error(error.message);
    });
  }

  _addFood = (categoryIndex, foodId) => {
    const today = 0;
    const portion = findPortionByFoodId(this.state.portionsArray[categoryIndex][today], foodId);
    if (portion === undefined) {
      const food = findFoodById(this.state.foodsArray[categoryIndex], foodId);
      fetchPostPortion({foodId, index: today, quantity: 1}).then(portion => {
        this.setState(({portionsArray}) => ({
          portionsArray: portionsArray.map(
            (portionsByDayIndex, index) => index === categoryIndex
              ? portionsByDayIndex.map(
                  (portions, dayIndex) => dayIndex === today ? appendPortion(portions, {...portion, food}) : portions
                )
              : portionsByDayIndex
          )
        }));
      }).catch(error => {
        console.error(error.message);
      });
    } else {
      const {id: portionId, quantity} = portion;
      fetchPatchPortion(portionId, quantity + 1).then(() => {
        this.setState(({portionsArray}) => ({
          portionsArray: portionsArray.map(
            (portionsByDayIndex, index) => index === categoryIndex
              ? portionsByDayIndex.map(
                  (portions, dayIndex) => dayIndex === today ? incrementQuantity(portions, portionId) : portions
                )
              : portionsByDayIndex
          )
        }));
      }).catch(error => {
        console.error(error.message);
      });
    }
  }

  render () {
    const {foodsArray, portionsArray} = this.state;
    return (
      <Switch>
        <Route exact path="/" component={MainHome}/>
        {categories.map((category, categoryIndex) => (
          <Route key={category} path={`/${category}`} render={() => (
            <Category
              category={category}
              foods={foodsArray[categoryIndex]}
              portionsByDayIndex={portionsArray[categoryIndex]}
              aside={asides[categoryIndex]}
              onAddFood={this._addFood.bind(null, categoryIndex)}
              onDeletePortion={this._deletePortion.bind(null, categoryIndex)}
            />
          )}/>
        ))}
      </Switch>
    );
  }
}

export default Main;
