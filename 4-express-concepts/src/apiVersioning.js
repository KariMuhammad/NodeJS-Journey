/**
 * Check if api starts with specified version or not `/api/v2`
 * @param {*} version
 * @returns
 */
const urlVersioning = (version) => (request, response, next) => {
  console.log(request.url);
  if (request.url.startsWith(`/api/${version}`)) next();
  else {
    response.status(404).json({
      message: "API version is not supported",
    });
  }
};

/**
 * check header `Accept-Version` if it is specified version or not (not url)
 * @param {*} version
 * @returns
 */
const headerVersioning = (version) => (request, response, next) => {
  if (request.get("Accept-Version") === version) next();
  else {
    response.status(404).json({
      message: "API version is not supported",
    });
  }
};

/**
 * We can use versioning also in header `Content-Type`
 * How is that?
 * Instead we type value `application/json`
 * we type like this `application/project.api.v2+json`
 */

const contentTypeVersioning = (version) => (request, response, next) => {
  const contentType = request.get("Content-Type");
  if (
    contentType &&
    contentType.includes(`application/project.api.${version}+json`)
  )
    next();
  else {
    response.status(404).json({
      message: "API version is not supported",
    });
  }
};

module.exports = { urlVersioning, headerVersioning, contentTypeVersioning };
