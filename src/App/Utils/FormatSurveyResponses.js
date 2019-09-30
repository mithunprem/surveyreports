/**
 * Utility method to format the survey responses received from the backend.
 * Each survey will have multiple themes and each themes will have multiple
 * quesions contained in it. And each question will have multiple responses
 * to them. This method will calculate the average rating for each question
 * in a particular theme and finally will compute an average rating for the
 * theme itself based on the averages of each question in them.
 */
const formatSurveyResponses = surveyResponses => {
  const { survey_result_detail: surveyDetails } = surveyResponses;
  let themeAverage = 0;
  let questionAverageRating = 0;

  surveyDetails &&
  surveyDetails.themes &&
  surveyDetails.themes.length &&
  surveyDetails.themes.forEach(theme => {
    themeAverage = 0;

    theme &&
    theme.questions &&
    theme.questions.length &&
    theme.questions.forEach(question => {
      // Compute the average of each question.
      questionAverageRating =
        calculateAverageRating(question.survey_responses);
      question.averageRating = questionAverageRating;
      themeAverage+= questionAverageRating;
    })
    // Compute the theme average.
    theme.averageRating = themeAverage / theme.questions.length ;
  });
  return surveyDetails;
}

/**
 * Calculates the average rating of a survey by computing the average
 * of responses to each questions in the survey.
 */
const calculateAverageRating = surveys => {
  let responseAggregate = 0;
  let numberOfResponses = 0;

  if (!surveys || !surveys.length > 0) {
    return null;
  }

  surveys.forEach(({ response_content: response }) => {
    if (response && (response !== "" || response !== " ")) {
      responseAggregate+= Number(response);
      numberOfResponses++;
    }
  });

  return responseAggregate / numberOfResponses;
}

export default formatSurveyResponses;
