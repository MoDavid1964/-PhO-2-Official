const REGEX = {
  CODE: /^\d+[a-z]{0,1}$/,
  ANSWER: /^[-]{0,1}\d*(?=(\.)\d+(?=(e)[-]{0,1}\d+$|$)|(?=(e)[-]{0,1}\d+$|$))/g,
  TOLERANCE: /^\d+(?=(\.)\d+$|$)/,
  POINTS: /^\d*$/,
};