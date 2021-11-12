export default function Main() {
  return (
    <main>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="accordion accordion-flush" id="accordion">
              <div class="card">
                <div class="card-header">
                  <h4><a data-toggle="collapse" data-target="#pizza">Brick Oven Pizza</a></h4>
                  <div class="collapse show" id="pizza" data-parent="#accordion">
                    <div class="card-body col-12 overflow" id="pizza-card">
                      <div class="cotainer overlay-35 box-padding">
                        <p>Our handcrafted brick oven pizza is traditional "dark crust" because it is baked directly on stone. If you prefer "light crust" please specify. 10 inch is 4 slices and makes a great personal size, or a 16 inch is 8 slices, good for 2+ people. </p>
                        <div class="row section-title">
                          <div class="col">
                            <h5>House Combinations</h5>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2" >
                            <h5 class="sizing">10" / 16"</h5>
                          </div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Calorosa</h6>
                            <p>Tomato Sauce, Smoked Mozzerella, Pepperoni, Bacon, Italian Sausage</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">15 / 23</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Bambinos</h6>
                            <p>Tomato Sauce, Mozzerella, Pepperoni, Meatball, Mushrooms, Olives</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">15 / 24</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Capricciosa</h6>
                            <p>Tomato Sauce, Fresh Mozzerella, Italian Sausage, Onions, Mushrooms</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">14 / 20</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Bufala</h6>
                            <p>Tomato Sauce, Water Buffalo Mozzerella, Basil, Olive Oil</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">11 / 18</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Genovese</h6>
                            <p>Pesto, Fresh Mozzerella, Chicken, Roasted Garlic, Tomatoes</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">14 / 22</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Lazio</h6>
                            <p>Truffle Oil, Fontina, Mushrooms</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">13 / 20</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Tropicale</h6>
                            <p>Tomato Sauce, Fresh Mozzerella, Canadian Bacon, Pineapple</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">13 / 20</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Primavera</h6>
                            <p>Tomato Sauce, Fresh Mozzerella, Onions, Peppers, Mushrooms, Olives, Tomatoes</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">15 / 24</div>
                        </div>
                        <div class="row section-title">
                          <div class="col">
                            <h5>Build Your Own</h5>
                          </div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Margherita Base</h6>
                            <p>Tomato Sauce, Fresh Mozzerella, Basil</p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">11 / 16</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Aditional Toppings</h6>
                            <p>Eggplant, Onions, Tomatoes, Pineapple, Olives, Gaeta Olives, Peppers,Castelvetrano Olives, Mushroom, Portebello, Roasted Garlic, Ricotta
                              Mama's Lil' Peppers, Calabrian Peppers,Chicken, Pepperoni, Chicken Sausage, Italian Sausage, Spicy Calabrese Sausage, Ham, Salami, Bacon White Anchovies, Fontina, Extra Mozzerella
                            </p>
                          </div>
                          <div class="col-4 col-md-3 col-lg-2 pricing">1.5 / 2.5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#taps">Microbrews</a></h4>
                  <div class="collapse" id="taps" data-parent="#accordion">
                    <div class="card-body overflow" id="tap-card">
                      <div class="container overlay-10">
                        <p class="box-padding">All drafts $7</p>
                        <table class="table table-sm table-striped">
                          <thead>
                            <tr>
                              <th>Tap</th>
                              <th>Brewery</th>
                              <th>Beer</th>
                              <th>ABV</th>
                              <th>State</th>
                              <th>Oz</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Boneyard</td>
                              <td>RPM IPA</td>
                              <td>6.5%</td>
                              <td>OR</td>
                              <td>16</td>
                            </tr>
                            <tr class="odd">
                              <td>2</td>
                              <td>Ommegang</td>
                              <td>Rosetta</td>
                              <td>5.6%</td>
                              <td>NY</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Crucible</td>
                              <td>Blood Orange Heffe</td>
                              <td>5.2%</td>
                              <td>WA</td>
                              <td>16</td>
                            </tr>
                            <tr class="odd">
                              <td>4</td>
                              <td>Pfreim</td>
                              <td>Pilsner</td>
                              <td>5%</td>
                              <td>OR</td>
                              <td>16</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Ace</td>
                              <td>Pineapple Cider</td>
                              <td>5%</td>
                              <td>WA</td>
                              <td>12</td>
                            </tr>
                            <tr class="odd">
                              <td>6</td>
                              <td>Diamond Knot</td>
                              <td>Brown Ale</td>
                              <td>5.9%</td>
                              <td>WA</td>
                              <td>16</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Pike Kilt Lifter</td>
                              <td>Scotch Ale</td>
                              <td>7.5%</td>
                              <td>WA</td>
                              <td>12</td>
                            </tr>
                            <tr class="odd">
                              <td>8</td>
                              <td>Firestone</td>
                              <td>DBL Mind Haze</td>
                              <td>8.2%</td>
                              <td>CA</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>805</td>
                              <td>Blonde</td>
                              <td>4.7%</td>
                              <td>CA</td>
                              <td>12</td>
                            </tr>
                            <tr class="odd">
                              <td>10</td>
                              <td>Scuttlebutt</td>
                              <td>Amber</td>
                              <td>4.7%</td>
                              <td>CA</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>Freemont</td>
                              <td>Summer Ale</td>
                              <td>5.2%</td>
                              <td>WA</td>
                              <td>12</td>
                            </tr>
                            <tr class="odd">
                              <td>12</td>
                              <td>Pfriem</td>
                              <td>Pale Ale</td>
                              <td>5%</td>
                              <td>OR</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>13</td>
                              <td>Seattle Cider</td>
                              <td>Berry Rose</td>
                              <td>5%</td>
                              <td>WA</td>
                              <td>12</td>
                            </tr>
                            <tr class="odd">
                              <td>14</td>
                              <td>Freemont Stout</td>
                              <td>Berry Rose</td>
                              <td>6%</td>
                              <td>WA</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>15</td>
                              <td>Ecliptic</td>
                              <td>Tucana Tang Sour</td>
                              <td>5%</td>
                              <td>OR</td>
                              <td>12</td>
                            </tr>
                            <tr class="odd">
                              <td>16</td>
                              <td>Anderson Valley</td>
                              <td>Briney Melon Gose</td>
                              <td>4.2%</td>
                              <td>CA</td>
                              <td>12</td>
                            </tr>
                            <tr>
                              <td>17</td>
                              <td>Lost Coast</td>
                              <td>Tangerine Wheat Ale</td>
                              <td>5.2%</td>
                              <td>CA</td>
                              <td>16</td>
                            </tr>
                            <tr class="odd">
                              <td>18</td>
                              <td>Deschutes</td>
                              <td>Porter</td>
                              <td>6.5%</td>
                              <td>WA</td>
                              <td>12</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#calzoni">Calzoni</a></h4>
                  <div class="collapse" id="calzoni" data-parent="#accordion">
                    <div class="card-body col-12 overflow" id="calzoni-card">
                      <div class="container overlay-50 box-padding">
                        <p>All Calzoni is made with Tomato Sauce and Mozzerella. Subtractions OK, no substitutions</p>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Pancrazio</h6>
                            <p>Italian Sausage, Mushrooms</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Benedetto</h6>
                            <p>Spicy Calabrese Sausage, Spicy Peppers</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Cipriano</h6>
                            <p>Pepperoni</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Cipriano</h6>
                            <p>Ricotta Cheese</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Pietro</h6>
                            <p>Chicken sausage, Calabrian Peppers, Ricotta Cheese</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Gennaro</h6>
                            <p>Meatballs, Onion, Peppers</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Claudio</h6>
                            <p>Eggplant, Ricotta Cheese</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Filipo</h6>
                            <p>Portabella Mushroom, Ricotta Cheese</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Giacomo</h6>
                            <p>Tomatoes, Onions, Olives, Ricotta Cheese</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">11</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#appetizers">Appetisers</a></h4>
                  <div class="collapse" id="appetizers" data-parent="#accordion">
                    <div class="card-body" id="appetizers-card">
                      <div class="container overlay-35 box-padding">
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Assorted Olives</h6>
                            <p></p>
                          </div>
                          <div class="col-3 col-md-2 pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Cheese Plate</h6>
                            <p>Flatbread, Honey, Brie and Beechers Cheese</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">10</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Meatballs</h6>
                            <p>Trio of beef meatballs in a marinara sauce. Served with breadsticks.</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">10</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Pork Belly</h6>
                            <p>Braised Porkbelly served with garlic mustard and breadsticks.</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">10</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Breadsticks</h6>
                            <p>2 breadsticks served with a side of marinara</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#salad">Salads</a></h4>
                  <div class="collapse" id="salad" data-parent="#accordion">
                    <div class="card-body" id="salad-card">
                        <div class="container overlay-50 box-padding">
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Insalata Verde</h6>
                            <p>Balsamic Vinegrette, Baby Greens</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Insalata Cesarina</h6>
                            <p>Caesar Dressing, Romaine Hearts, Croutons, Parmesan</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">9</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Insalata Viola</h6>
                            <p>Sherry Vinagrette, Baby Greens, Roasted Beets, Riocotta Salata</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">9</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Insalata di Noci</h6>
                            <p>Fig Vinagrette, Baby Greens, Candied Walnuts, Dried Cranberries, Chevre</p>
                          </div>
                          <div class="col-3 col-md-2 pricing">10</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#vino">Wine</a></h4>
                  <div class="collapse" id="vino" data-parent="#accordion">
                    <div class="card-body overflow" id="vino-card">
                      <div class="cotainer overlay-50 box-padding" >
                        <div class="row section-title">
                          <div class="col">
                            <h5>Red</h5>
                          </div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Pinot Noir</h6>
                            <p>Hahn, California  | 2019</p>
                          </div>
                          <div class="col-4 pricing">8.5 / 28</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Cabernet</h6>
                            <p>Leese-Fitch, WA  | 2019</p>
                          </div>
                          <div class="col-4 pricing">8.5 / 32</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Red Blend</h6>
                            <p>Wolfe, WA  | 2018</p>
                          </div>
                          <div class="col-4 pricing">8.5 / 28</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Merlot</h6>
                            <p>Sodale, Italy  | 2015</p>
                          </div>
                          <div class="col-4 pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 36</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Chianti</h6>
                            <p>Villa Lusia, Italy  | 2016</p>
                          </div>
                          <div class="col-4 pricing"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 30</div>
                        </div>
                      </div>
                      <div class="cotainer overlay-75 box-padding">
                        <div class="row section-title">
                          <div class="col">
                            <h5>White</h5>
                          </div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Chardonay</h6>
                            <p>Alexandria Nicole, WA | 2017</p>
                          </div>
                          <div class="col-4 pricing"> 8.5 / 30</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Pinot Grigio</h6>
                            <p>Vandori | 2019</p>
                          </div>
                          <div class="col-4 pricing"> 8.5 / 28</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Riesling</h6>
                            <p>Tatoo Girl, WA | 2019</p>
                          </div>
                          <div class="col-4 pricing"> 8.5 / 32</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Savigon Blanc</h6>
                            <p>Tohu, NZ  | 2019</p>
                          </div>
                          <div class="col-4 pricing"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 30</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Chardonay</h6>
                            <p>Ryan Patrick, WA | 2019</p>
                          </div>
                          <div class="col-4 pricing"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 36</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#gelato">D'Ambrosio Gelato</a></h4>
                  <div class="collapse" id="gelato" data-parent="#accordion">
                    <div class="card-body" id="gelato-card">
                      <div class="container overlay-35 box-padding">
                        <div class="row">
                          <div class="col">
                            <p>Price per Scoop</p>
                          </div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Chocolate</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Chocolate Hazelnut</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Salted Carmel</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Tiramisu</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Coconut</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing pricing">6</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Vanilla</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing pricing">6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4><a class="collapsed" data-toggle="collapse" data-target="#na-bev">Non Alcholic</a></h4>
                  <div class="collapse" id="na-bev" data-parent="#accordion">
                    <div class="card-body" id="na-bev-card">
                      <div class="cotainer overlay-35 box-padding">
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Ginger Beer</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3.5</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>San Pellegrino</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Coke</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Diet Coke</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Fanta</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Sprite</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Ginger Ale</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                        <div class="row offset-1">
                          <div class="col">
                            <h6>Root Beer</h6>
                          </div>
                          <div class="col-3 col-md-2 pricing">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}