export const parsePath = path => {
  path = path.replace(/\//g, "").toUpperCase()
  return path.replace(/-/g, " ")
}

export const parseLabel = id => {
  // space 'camelCase' into 'camel Case'
  const titleizeRest = id.replace(/([A-Z])/g, " $1")

  // capitalize first letter and attach the rest
  // resulting in 'camel Case' to 'Camel Case'
  const titleized = titleizeRest.charAt(0).toUpperCase() + titleizeRest.slice(1)

  return titleized
}
