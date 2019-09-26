const formatSurveyResponses = surveyResponses => {
  const { survey_result_detail: surveyDetails } = surveyResponses;
  let themeAverage = 0;
  let questionAverageRating = 0;

  surveyDetails.themes.forEach(theme => {
    themeAverage = 0;
    theme.questions.forEach(question => {
      questionAverageRating =
        calculateAverageRating(question.survey_responses);
      question.averageRating = questionAverageRating;
      themeAverage+= questionAverageRating;
    })
    theme.averageRating = themeAverage / theme.questions.length ;
  });
  return surveyDetails;
}

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
