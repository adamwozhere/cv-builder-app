// Unique Identifier function

/** called every time a new ItemComponent is made,
 *  it is passed down as an argument and used for
 *  label 'for' attribute and an input field 'id'
 */

const UID = (() => {
  let index = 0;
  return () => index++;
})();

/**
 * IIFE Immediately Invoked Function Expression
 * index becomes 'static' as it's scoped to UID
 *
 * function () {
 *  creates variable
 *  returns function () {
 *    returns index incremented by 1
 *  }
 * }
 *
 */
