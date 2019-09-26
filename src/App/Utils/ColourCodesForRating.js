const colourCodesForRating = rating => {
  let ratingColourCode = '';

  if (rating < 3.5) {
    ratingColourCode = "red";
  } else if (3.5 < rating && rating < 4) {
    ratingColourCode = "yellow";
  } else {
    ratingColourCode = "green";
  }

  return ratingColourCode;
}

export default colourCodesForRating;
