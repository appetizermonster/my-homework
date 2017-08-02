'use strict';

module.exports = (asyncHandler) => {
  return (req, res, next) => {
    asyncHandler(req, res).catch(next);
  };
};
