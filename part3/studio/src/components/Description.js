import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = "https://cookieandkate.com/healthy-banana-bread-recipe/"
    let authorPhoto = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcookieandkate.com%2Fimages%2F2020%2F05%2Fhealthy-banana-bread-recipe-5.jpg&tbnid=humQTlmpvGDybM&vet=12ahUKEwj6tZid5MGAAxWTPd4AHeQrA_AQMygCegUIARD5AQ..i&imgrefurl=https%3A%2F%2Fcookieandkate.com%2Fhealthy-banana-bread-recipe%2F&docid=HHtMaO_R9Y9LTM&w=1100&h=1650&q=recipe%20healthy%20banana%20bread&ved=2ahUKEwj6tZid5MGAAxWTPd4AHeQrA_AQMygCegUIARD5AQ"
    let authorName = "Kathryne Taylor"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component{
    render(){ 

    }
}