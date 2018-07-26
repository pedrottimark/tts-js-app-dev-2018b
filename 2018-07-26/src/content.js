import React from 'react';
import ExternalLink from './ExternalLink';

export const days = [
  'Today',
  'Wednesday',
  'Tuesday',
  'Monday',
  'Sunday',
  'Saturday',
  'Friday',
  'Thursday'
];

export const categories = [
  'vegetables',
  'fruits',
  'grains',
  'protein',
  'oils',
  'fluids',
];

export const nbsp = '\u00A0';
export const title = 'Healthy Eating';

export const asides = [
  <aside>
    <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/">Vegetables and Fruits</ExternalLink>
    <p>Eat dark leafy greens; bright red, yellow and orange <strong>vegetables</strong>; and cooked tomatoes.</p>
    <p>Salad and stir fry are two ideas for getting tasty vegetables on your plate.</p>
    <p>Potatoes and French fries <em>don’t</em> count.</p>
  </aside>,
  <aside>
    <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/">Vegetables and Fruits</ExternalLink>
    <p>To eat a variety of types and colors of <strong>fruits</strong> is as important as quantity.</p>
    <p>Keep fruit where you can see it. That way you’ll be more likely to eat it.</p>
    <p>Citrus fruits especially lower the chances of developing cardiovascular disease.</p>
  </aside>,
  <aside>
    <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/whole-grains/">Whole Grains</ExternalLink>
    <p>Eat a variety of <strong>whole grains</strong> (like whole wheat bread, whole-grain pasta, and brown rice).</p>
    <p>Bran and fiber slow the breakdown of starch into glucose. Fiber helps lower cholesterol.</p>
    <p><em>Limit</em> refined grains (like white rice and white bread).</p>
  </aside>,
  <aside>
    <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/protein/">Protein</ExternalLink>
    <p>Choose <strong>healthy protein</strong> like fish, poultry, beans, and nuts.</p>
    <p><em>Limit</em> red meat and cheese.</p>
    <p><em>Avoid</em> bacon, cold cuts, and other processed meats.</p>
  </aside>,
  <aside>
    <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/">Fats and Cholesterol</ExternalLink>    <p>Use <strong>healthy oils</strong> (like olive and canola oil) for cooking, on salad, and at the table.</p>
    <p><em>Limit</em> butter.</p>
    <p><em>Avoid</em> trans fat.</p>
  </aside>,
  <aside>
    <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/healthy-drinks/">Healthy Drinks</ExternalLink>
    <p>Drink <strong>water</strong>, tea, or coffee (with little or no sugar).</p>
    <p><em>Limit</em> dairy including milk (to 1 or 2 servings per day) and juice (to 1 small glass per day).</p>
    <p><em>Avoid</em> sugary drinks.</p>
  </aside>,
];
