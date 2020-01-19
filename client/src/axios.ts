import _axios from "axios";

const axios = _axios.create({
  baseURL: process.env.API_URL,
  transformResponse: data => {
    const transformed = JSON.parse(data, stringifyTransfromer);
    console.log("Axios Transformed Response", transformed);
    return transformed;
  }
});

export default axios;

function stringifyTransfromer(_: string, value: any) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    const replacement: any = {};
    for (const key of Object.keys(value)) {
      replacement[toCamel(key)] = value[key];
    }
    return replacement;
  }
  return value;
}

function toCamel(s: string) {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
}
