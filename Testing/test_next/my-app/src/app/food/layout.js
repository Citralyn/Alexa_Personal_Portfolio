import { Food, Burger } from './food.js'

export default function FoodLayout({children}) {
    return (
      <html lang="en">
        <body>
            <Food></Food>
            {children}
            <Burger></Burger>
        </body>
      </html>
    );
  }