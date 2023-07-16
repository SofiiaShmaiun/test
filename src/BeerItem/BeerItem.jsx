import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBeerStore from "../store";
import {
  BeerPage,
  IngredientsGroup,
  MainInfo,
  MethodInfo,
} from "./BeerItem.styled";

import { nanoid } from "nanoid";

const BeerItem = () => {
  const { itemId } = useParams();

  const { beer, setBeer } = useBeerStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/${itemId}`
        );
        const data = await response.data;
        setBeer(data);
      } catch (err) {
        throw new Error(err.message);
      }
    };
    fetchRecipe();
  }, [itemId]);

  return (
    <BeerPage>
      {beer.map((beer) => (
        <div key={beer.id}>
          <MainInfo>
            <img src={beer.image_url} alt={beer.tagline} height="500px" />
            <div className="mainInfo">
              <h2>{beer.name}</h2>
              <p>{beer.description}</p>
              <table>
                <tbody>
                  <tr>
                    <td>First brewed</td>
                    <td>Alcohol by volume</td>
                    <td>International Bitterness Units</td>
                    <td>Target Final Gravity</td>
                    <td>Target Original Gravity</td>
                    <td>European Brewery Convention</td>
                    <td>Standard Reference Method</td>
                    <td>pH</td>
                    <td>Attenuation Level</td>
                    <td>Volume</td>
                    <td>Boil volume</td>
                  </tr>
                  <tr>
                    <td>{beer.first_brewed}</td>
                    <td>{beer.abv}</td>
                    <td>{beer.ibu}</td>
                    <td>{beer.target_fg}</td>
                    <td>{beer.target_og}</td>
                    <td>{beer.ebc}</td>
                    <td>{beer.srm}</td>
                    <td>{beer.ph}</td>
                    <td>{beer.attenuation_level}</td>
                    <td>
                      {beer.volume.value} {beer.volume.unit}
                    </td>
                    <td>
                      {beer.boil_volume.value} {beer.boil_volume.unit}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <IngredientsGroup>
              <h3>Ingredients</h3>
              <div className="ingredientsInfo">
                <div>
                  <p className="ingredientGroup">Hops</p>
                  {beer.ingredients.hops.map((item) => (
                    <p key={nanoid()} className="ingredient">
                      {item.name} - {item.amount.value} {item.amount.unit}{" "}
                      {item.add} {item.attribute}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="ingredientGroup">Malt</p>
                  {beer.ingredients.malt.map((item) => (
                    <p key={nanoid()} className="ingredient">
                      {item.name} - {item.amount.value} {item.amount.unit}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="ingredientGroup">Yeast</p>
                  <p className="ingredient">{beer.ingredients.yeast}</p>
                </div>
              </div>
            </IngredientsGroup>

            <MethodInfo>
              <h3>Method</h3>
              <div className="methodInfo">
                <p>
                  Fermentation temperature: {""}
                  {beer.method.fermentation.temp.value}{" "}
                  {beer.method.fermentation.temp.unit}
                </p>
                {beer.method.twist !== null ? (
                  <p>Twist: {beer.method.twist}</p>
                ) : null}
                {beer.method.mash_temp.map((item) =>
                  item.duration !== null ? (
                    <p key={nanoid()}>
                      Mash temperature | duration: {""}
                      {item.temp.value} {item.temp.unit} | {item.duration}
                    </p>
                  ) : null
                )}
                <div>
                  <p>
                    Brewer Tips: {beer.brewers_tips}
                  </p>

                  <div className="foodPairing">
                    <p>Food Pairing:</p>
                    {beer.food_pairing.map((item) => (
                      <span key={nanoid()}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </MethodInfo>
          </MainInfo>
          <p className="contributedBy">Contributed by: {beer.contributed_by}</p>
        </div>
      ))}
    </BeerPage>
  );
};

export default BeerItem;
