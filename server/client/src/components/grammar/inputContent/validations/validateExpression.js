export default (expression, expressionErrors, expressionsArrayErrors, expressionIndex) => {

    if (!expression || !expression.content) {
        expressionErrors.content = 'Expression content is required';
        expressionsArrayErrors[expressionIndex] = expressionErrors;
    }
    if (!expression || !expression.no_words && expression.no_words !== 0) {
        expressionErrors.no_words = 'Number of Words in an Expression is required';
        expressionsArrayErrors[expressionIndex] = expressionErrors;
    } else if (expression.no_words < 2) {
        expressionErrors.no_words = 'There must be at least two Words in an Expressions';
        expressionsArrayErrors[expressionIndex] = expressionErrors;
    }
    if (!expression || !expression.domain) {
        expressionErrors.domain = 'Domain of an Expression is required';
        expressionsArrayErrors[expressionIndex] = expressionErrors;
    }
    if (!expression || !expression.level) {
        expressionErrors.level = 'Level of an Expression is required';
        expressionsArrayErrors[expressionIndex] = expressionErrors;
    }
}